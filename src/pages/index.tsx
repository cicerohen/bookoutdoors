import type { NextPage } from "next";
import { SeachPage } from "../components/SearchPage";
import { ParkOutdoor } from "../types/models";

export async function getStaticProps() {
  return {
    props: {
      outdoors: [
        {
          id: 0,
          name: "Sandy Beach RV Park",
          city: "Brownwood",
          state: {
            abbr: "TX",
            name: "Texas",
          },
          thumbnail: {
            src: "https://res.cloudinary.com/bookoutdoors/image/upload/v1662421975/production/property/dinosaur-valley-rv-park/49e679_b2aa1bc80686451dbc689d3bdaa753c0_mv2_xnikne.jpg",
          },
          description:
            "Come and relax in this charming, fun, and friendly environment. We are surrounded by the beautiful waters and sandy shores of Lake Brownwood. We have a variety of site types to suit every preference. We have three private cabanas; each with their own special features and we even offer several premier camp sites for those who want to experience camping under trees and close to the water. Get to know the friendly faces of our staff and take advantage of the natural beauty Lake Brownwood has to offer.",
          geoloc: {
            lat: 31.803973498691501,
            lng: 98.822318513665294,
          },
          amenities: [],
          price: {
            amount: 200.0,
            currency: {
              name: "USD",
              symbol: "$",
            },
          },
        },
        {
          id: 1,
          name: "Sandy Beach RV Park",
          city: "Brownwood",
          state: {
            abbr: "TX",
            name: "Texas",
          },
          thumbnail: {
            src: "https://res.cloudinary.com/bookoutdoors/image/upload/v1662421975/production/property/dinosaur-valley-rv-park/49e679_b2aa1bc80686451dbc689d3bdaa753c0_mv2_xnikne.jpg",
          },
          description:
            "Come and relax in this charming, fun, and friendly environment. We are surrounded by the beautiful waters and sandy shores of Lake Brownwood. We have a variety of site types to suit every preference. We have three private cabanas; each with their own special features and we even offer several premier camp sites for those who want to experience camping under trees and close to the water. Get to know the friendly faces of our staff and take advantage of the natural beauty Lake Brownwood has to offer.",
          geoloc: {
            lat: 31.803973498691501,
            lng: 98.822318513665294,
          },
          amenities: [],
          price: {
            amount: 200.0,
            currency: {
              name: "USD",
              symbol: "$",
            },
          },
        },
        {
          id: 2,
          name: "Sandy Beach RV Park",
          city: "Brownwood",
          state: {
            abbr: "TX",
            name: "Texas",
          },
          thumbnail: {
            src: "https://res.cloudinary.com/bookoutdoors/image/upload/v1662421975/production/property/dinosaur-valley-rv-park/49e679_b2aa1bc80686451dbc689d3bdaa753c0_mv2_xnikne.jpg",
          },
          description:
            "Come and relax in this charming, fun, and friendly environment. We are surrounded by the beautiful waters and sandy shores of Lake Brownwood. We have a variety of site types to suit every preference. We have three private cabanas; each with their own special features and we even offer several premier camp sites for those who want to experience camping under trees and close to the water. Get to know the friendly faces of our staff and take advantage of the natural beauty Lake Brownwood has to offer.",
          geoloc: {
            lat: 31.803973498691501,
            lng: 98.822318513665294,
          },
          amenities: [],
          price: {
            amount: 200.0,
            currency: {
              name: "USD",
              symbol: "$",
            },
          },
        },
      ],
    },
  };
}

type Props = {
  outdoors: ParkOutdoor[];
};

export const Home: NextPage<Props> = ({ outdoors }) => {
  return <SeachPage outdoors={outdoors} />;
};

export default Home;
