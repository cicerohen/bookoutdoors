import { Combobox } from "@headlessui/react";
import { useState, useMemo } from "react";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";

import { Location } from "../../../types/models";

const locations: Location[] = [
  {
    id: 0,
    city: "Brownwood",
    state: {
      abbr: "TX",
      name: "Texas",
    },
    geoloc: {
      lat: 1,
      lng: 1,
    },
  },
  {
    id: 1,
    city: "Brownwood",
    state: {
      abbr: "TX",
      name: "Texas",
    },
    geoloc: {
      lat: 1,
      lng: 1,
    },
  },
  {
    id: 2,
    city: "Brownwood",
    state: {
      abbr: "TX",
      name: "Texas",
    },
    geoloc: {
      lat: 1,
      lng: 1,
    },
  },
  {
    id: 3,
    city: "Brownwood",
    state: {
      abbr: "TX",
      name: "Texas",
    },
    geoloc: {
      lat: 1,
      lng: 1,
    },
  },
  {
    id: 4,
    city: "Brownwood",
    state: {
      abbr: "TX",
      name: "Texas",
    },
    geoloc: {
      lat: 1,
      lng: 1,
    },
  },
];

export const LocationCombobox = () => {
  const [selected, setSelected] = useState(locations[0]);
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    if (!query) {
      return locations;
    }
    return locations.filter((location) => {
      if (
        location.city
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      ) {
        return location;
      }
    });
  }, [query]);

  return (
    <div className="relative">
      <Combobox value={selected} onChange={setSelected}>
        <Combobox.Input
          className="bg-transparent px-4 py-3 w-48 rounded-l-lg"
          displayValue={(location: Location) =>
            `${location.city}, ${location.state.name}`
          }
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Select"
        />

        <Combobox.Options
          className="bg-white border border-gray-200 absolute top-full mt-1 rounded-md overflow-hidden z-10 shadow-lg w-screen max-w-sm"
          as="div"
        >
          <ul className="max-h-60 overflow-x-auto divide-y">
            {filtered.map((location) => (
              <Combobox.Option key={location.id} value={location}>
                {({ active }) => {
                  return (
                    <div className="flex px-4 py-6 cursor-pointer">
                      <MapPinIcon className="w-5 h-5 mr-2" />
                      <span>{`${location.city}, ${location.state.name}`}</span>
                    </div>
                  );
                }}
              </Combobox.Option>
            ))}
          </ul>
        </Combobox.Options>
      </Combobox>
    </div>
  );
};
