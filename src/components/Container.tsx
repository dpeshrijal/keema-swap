import { FC } from "react";
import TokenSelector from "./TokenSelector";

const Container: FC = () => {
  return (
    <div className="border border-gray-300 rounded-2xl inline-block p-4 w-1/3 bg-white">
      <div className="mb-3 ml-2">Swap</div>
      <div className="relative flex flex-col gap-2">
        <input
          className="bg-gray-100 rounded-xl h-24 text-3xl px-2"
          type="number"
          placeholder="0.00"
        />
        <div className="absolute right-4 top-7">
          <TokenSelector />
        </div>

        <input
          className="bg-gray-100 rounded-xl h-24 text-3xl px-2"
          type="number"
          placeholder="0.00"
        />
        <div className="absolute right-4 top-36 -mt-3 ">
          <TokenSelector />
        </div>
        <button className="border h-16 rounded-3xl mt-2 bg-gray-200">
          Swap
        </button>
      </div>
    </div>
  );
};

export default Container;
