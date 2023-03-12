import { FC } from "react";

const Container: FC = () => {
  return (
    <div className="border border-gray-300 rounded-2xl inline-block p-4 w-1/3 bg-white">
      <div className="mb-3">Swap</div>
      <div className="flex flex-col gap-2">
        <input className="bg-gray-100 rounded-xl h-24 text-3xl" />
        <input className="bg-gray-100 rounded-xl h-24 text-3xl" />
        <button className="border h-16 rounded-3xl mt-2 bg-gray-200">
          Swap
        </button>
      </div>
    </div>
  );
};

export default Container;
