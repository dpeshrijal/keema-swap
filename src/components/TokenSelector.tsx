import { FC } from "react";
import * as Select from "@radix-ui/react-select";

const TokenSelector: FC = () => {
  const tokens = ["ETH", "USDT", "UNI"];
  return (
    <div className="">
      <Select.Root>
        <Select.Trigger className="flex items-center justify-center border  rounded-3xl py-1 px-2.5 bg-pink-500 text-white text-lg font-bold">
          <Select.Value>Select Token</Select.Value>
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

        <Select.Content className="z-20">
          <Select.Viewport className="rounded-2xl">
            {tokens.map((token, i) => (
              <Select.Item
                key={i}
                value={token}
                className="flex cursor-pointer items-center gap-2 bg-gray-300 py-2 px-4 text-sm text-black hover:bg-gray-500 "
              >
                <Select.ItemText>{token}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default TokenSelector;
