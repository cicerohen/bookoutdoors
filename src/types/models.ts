type ParkOutdoorAmenity = {
  id: number;
  slug: string;
  name: string;
};

export type ParkOutdoor = {
  id: number;
  name: string;
  description: string;
  city: string;
  thumbnail: {
    src: string;
  };
  state: {
    abbr: string;
    name: string;
  };
  geoloc: {
    lat: number;
    lng: number;
  };
  amenities: Partial<ParkOutdoorAmenity>[];
  price: {
    amount: number;
    currency: {
      name: string;
      symbol: string;
    };
  };
};

export type Location = {
  id: number;
  city: string;
  state: {
    abbr: string;
    name: string;
  };
  geoloc: {
    lat: number;
    lng: number;
  };
};
