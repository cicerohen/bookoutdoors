import { LocationCombobox } from "./LocationCombobox";
import { DatePopover } from "./DatePopover";
import { PassengersPopover } from "./PassengersPopover";

import { useSearchForm } from "../hooks/useSearchForm";

export const SearchForm = () => {
  const form = useSearchForm({
    onSubmit: () => {},
  });
  return (
    <form className="text-sm flex divide-x-2 divide-gray-100 rounded-lg bg-white border border-gray-300 ">
      <LocationCombobox />
      <DatePopover />
      <PassengersPopover />
    </form>
  );
};
