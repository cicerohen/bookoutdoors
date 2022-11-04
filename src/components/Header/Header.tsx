import { useState } from "react";
import { Logo } from "./components/Logo";
import { ToggleButton } from "./components/ToggleButton";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
import { SearchForm } from "./components/SearchForm";

export const Header = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);

  const onToggleMobileNav = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  return (
    <header className="border-b">
      <div className="flex items-center justify-between h-24 px-4 lg:container mx-auto">
        <Logo />
        <SearchForm />
        <DesktopNav />
        <ToggleButton
          mobileNavIsOpen={mobileNavIsOpen}
          onToggleMobileNav={onToggleMobileNav}
        />
      </div>
      <MobileNav isOpen={mobileNavIsOpen} />
    </header>
  );
};
