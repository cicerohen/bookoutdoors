import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

type Props = Partial<{
  isOpen: boolean;
  onClose: () => void;
}>;

export const SearchDrawer = ({ isOpen = false, onClose }: Props) => {
  const applyStyles = () => {
    const scrolWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.marginRight = `${scrolWidth}px`;
    document.body.style.overflow = (isOpen && "hidden") || "";
  };

  const removeStyles = () => {
    document.body.style.overflow = "";
    document.body.style.marginRight = "";
  };

  useEffect(() => {
    if (isOpen) {
      applyStyles();
      return;
    }
    removeStyles();
    return () => {
      removeStyles();
    };
  }, [isOpen]);

  return (
    <Transition show={isOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="ease-in duration-200"
        leaveFrom="translate-y-full"
        leaveTo="-translate-y-full"
      >
        <div className="bg-gray-50 shadow-lg fixed top-0 w-screen min-h-[320px] z-10">
          <div className="flex items-center justify-between border-b p-4">
            <h5 className="text-sm font-semibold">Edit your search</h5>
            <button onClick={onClose}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4">form</div>
        </div>
      </Transition.Child>
    </Transition>
  );
};
