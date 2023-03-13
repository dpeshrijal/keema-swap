import { FC, useState, useEffect } from "react";
import TokenSelector from "./TokenSelector";
import axios from "axios";
import { abi } from "@/data/abi";
import Web3 from "web3";
import { BigNumber } from "bignumber.js";

export type I_Token = {
  address: string;
  symbol: string;
  logo: string;
  decimal: number;
};

type props = {
  account: string;
};

const Container: FC<props> = ({ account }) => {
  const [fromToken, setFromToken] = useState<I_Token>();
  const [toToken, setToToken] = useState<I_Token>();
  const [fromTokenValue, setFromTokenValue] = useState("");
  const [toTokenValue, setToTokenValue] = useState("");
  const [price, setPrice] = useState<number>();

  const swapDisabled =
    !fromToken || !toToken || !fromTokenValue || account.length === 0;

  const handleFromTokenSelection = (value: I_Token) => {
    setFromToken(value);
    getPrice();
  };
  const handleToTokenSelection = (value: I_Token) => {
    setToToken(value);
    getPrice();
  };

  const getPrice = async () => {
    if (swapDisabled) return;
    const amount = Number(fromTokenValue) * 10 ** fromToken.decimal;

    try {
      const response = await axios.get(
        `https://api.0x.org/swap/v1/price?sellToken=${fromToken.symbol}&buyToken=${toToken.symbol}&sellAmount=${amount}&takerAddress=${account}`
      );
      const exchangeRate = await response.data.price;
      const buyAmount = await response.data.buyAmount;
      setPrice(Number(exchangeRate));
      setToTokenValue((Number(buyAmount) / 10 ** toToken.decimal).toString());
      return await response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const swap = async () => {
    const fromTokenAddress = fromToken?.address;
    const exchangeData = await getPrice();
    const web3 = new Web3(Web3.givenProvider);
    const TokenContract = new web3.eth.Contract(abi as any, fromTokenAddress);
    const maxApproval = 2 ** 18;
    console.log(maxApproval);
    try {
      await TokenContract.methods
        .approve(exchangeData.allowanceTarget, maxApproval)
        .send({ from: account });

      await web3.eth.sendTransaction(exchangeData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrice();
  }, [fromToken, toToken, fromTokenValue]);

  return (
    <div className="border border-gray-300 rounded-2xl inline-block p-4 w-1/3 bg-white">
      <div className="mb-3 ml-2">Swap</div>
      <div className="relative flex flex-col gap-2">
        <input
          className="bg-gray-100 rounded-xl h-24 text-3xl px-2"
          type="number"
          placeholder="0.00"
          onChange={(e) => {
            setFromTokenValue(e.target.value);
          }}
          onBlur={getPrice}
        />
        <div className="absolute right-4 top-7">
          <TokenSelector
            tokenSelected={fromToken}
            onTokenSelect={handleFromTokenSelection}
          />
        </div>

        <input
          className="bg-gray-100 rounded-xl h-24 text-3xl px-2"
          type="number"
          placeholder="0.00"
          value={toTokenValue}
        />
        <div className="absolute right-4 top-36 -mt-3 ">
          <TokenSelector
            tokenSelected={toToken}
            onTokenSelect={handleToTokenSelection}
          />
        </div>
        <button
          className="border h-16 rounded-3xl mt-2 bg-pink-500 disabled:cursor-not-allowed disabled:bg-pink-100 text-white font-bold disabled:text-gray-500"
          disabled={swapDisabled}
          onClick={swap}
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Container;
