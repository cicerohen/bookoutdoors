import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";

type Props = {
  mobileNavIsOpen: boolean;
  onToggleMobileNav: () => void;
};

export const ToggleButton = ({ mobileNavIsOpen, onToggleMobileNav }: Props) => {
  return (
    <button
      onClick={onToggleMobileNav}
      className="rounded-lg px-4 py-3 lg:hidden"
    >
      {mobileNavIsOpen ? (
        <XMarkIcon className="w-6 h-6" />
      ) : (
        <Bars3Icon className="w-6 h-6" />
      )}
    </button>
  );
};
