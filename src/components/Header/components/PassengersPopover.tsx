import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import UserPlusIcon from "@heroicons/react/24/outline/UserPlusIcon";

import { PassengerInput } from "./PassengerInput";

export const PassengersPopover = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex px-4 py-3">
        <UserPlusIcon className="w-5 h-5" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="bg-white border border-gray-200 absolute top-full mt-1 rounded-md overflow-hidden z-10 shadow-lg  w-72 left-1/2 -translate-x-1/2 ">
          <div className="p-4 space-y-4">
            <div className="divide-y">
              <PassengerInput title="Adults" description="Ages 13 or older" />
              <PassengerInput title="Kids" description="Ages 12 or younger" />
              <PassengerInput
                title="Pets"
                description="We love furry friends!"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-white font-semibold rounded-md px-2 py-1 bg-indigo-500"
              >
                Apply
              </button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
