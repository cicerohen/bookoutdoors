import { Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
};

export const MobileNav = ({ isOpen }: Props) => {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      unmount={false}
      enter="transition-all duration-200"
      enterFrom="h-0 opacity-0 overflow-hidden"
      enterTo="h-56"
      leave="transition-all duration-200"
      leaveFrom="h-56 opacity-1"
      leaveTo="h-0 opacity-0"
    >
      <nav className="list-none space-y-1 p-4 bg-gray-100 lg:hidden">
        <li>
          <a
            href="#"
            title="Know more about us"
            className="text-sm text-indigo-900 font-semibold block rounded-lg px-4 py-3"
          >
            About
          </a>
        </li>
        <li>
          <a
            title="Sign in on your account"
            href="#"
            className="text-sm text-indigo-900 font-semibold block rounded-lg px-4 py-3"
          >
            Sign In
          </a>
        </li>
        <li>
          <a
            title="Create your account"
            href="#"
            className="text-sm text-indigo-900 font-semibold block rounded-lg px-4 py-3"
          >
            Sign Up
          </a>
        </li>

        <li>
          <a
            title="List your property"
            href="#"
            className="text-sm text-white text-center font-semibold block rounded-lg  px-4 py-3 bg-indigo-500"
          >
            List your property
          </a>
        </li>
      </nav>
    </Transition>
  );
};
