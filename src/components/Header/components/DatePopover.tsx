import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const DatePopover = () => {
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date());

  const onChangeCheckInDate = (date: Date) => {
    setCheckInDate(date);
  };
  const onChangeCheckOutDate = (date: Date) => {
    setCheckOutDate(date);
  };

  return (
    <Popover className="relative">
      <Popover.Button className="flex px-4 py-3 w-24">Nov, 2-3</Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="bg-white border border-gray-200 absolute top-full mt-1 rounded-md overflow-hidden z-10 shadow-lg left-1/2 -translate-x-1/2 ">
          <div className="flex p-4 space-x-4">
            <div>
              <p className="mb-2 text-gray-500 text-center">Check-in</p>
              <DatePicker
                selected={checkInDate}
                onChange={onChangeCheckInDate}
                inline
              />
            </div>

            <div>
              <p className="mb-2 text-gray-500 text-center">Check-out</p>
              <DatePicker
                selected={checkOutDate}
                onChange={onChangeCheckOutDate}
                inline
              />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
