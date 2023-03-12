import { FC, useState } from "react";
import * as Select from "@radix-ui/react-select";

const TokenSelector: FC = () => {
  const tokens = [
    {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      symbol: "WETH",
      logo: "https://assets.coingecko.com/coins/images/2518/thumb/weth.png?1628852295",
    },
    {
      address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      symbol: "UNI",
      logo: "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604",
    },
    {
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      symbol: "USDT",
      logo: "https://assets.coingecko.com/coins/images/325/thumb/Tether.png?1668148663",
    },
  ];

  const [tokenSelected, setTokenSelected] = useState("");
  return (
    <div className="">
      <Select.Root
        value={tokenSelected}
        onValueChange={(value) => {
          setTokenSelected(value);
        }}
      >
        <Select.Trigger className="flex items-center justify-center border  rounded-3xl py-1 px-2.5 bg-pink-500 text-white text-lg font-bold">
          <Select.Value>
            {tokenSelected ? tokenSelected : "Select Token"}
          </Select.Value>
          <Select.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3.5 h-3.5  ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className="z-20  ">
          <Select.Viewport className="rounded-2xl">
            {tokens?.map((token, i) => (
              <Select.Item
                key={i}
                value={token.symbol}
                textValue={token.symbol}
                className="flex cursor-pointer items-center gap-2 bg-gray-300 py-2 px-4 text-lg text-black hover:bg-gray-500  "
              >
                <img
                  src={`${token.logo}`}
                  alt="Token Image"
                  className="h-5 w-5"
                />
                <div> {token.symbol}</div>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default TokenSelector;
