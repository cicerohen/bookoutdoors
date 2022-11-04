import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = Partial<{
  title: React.ReactNode;
  description: React.ReactNode;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}>;

export const PassengerInput = ({
  title,
  description,
  value = 0,
  onDecrease,
  onIncrease,
}: Props) => {
  return (
    <div className="flex items-center justify-between h-16">
      <div>
        <h6 className="text-sm font-semibold">{title}</h6>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onDecrease}
          className="text-white bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center"
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <input
          type="text"
          className="text-lg w-10 text-center"
          inputMode="numeric"
          value={Math.max(value, 0)}
          tabIndex={-1}
          readOnly
        />
        <button
          type="button"
          onClick={onIncrease}
          className="text-white bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center"
        >
          <PlusIcon className="w-8 h-4" />
        </button>
      </div>
    </div>
  );
};
