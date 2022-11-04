import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { OutdoorList } from "./components//OutdoorList";
import { ParkOutdoor } from "../../types/models";

const Map = dynamic(
  () => import("./components/Map").then((module) => module.Map),
  {
    ssr: false,
  }
);

type Props = {
  outdoors: ParkOutdoor[];
};

export const SeachPage = ({ outdoors }: Props) => {
  return (
    <div className="z-10 relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>BookOutdoors</title>
      </Head>
      <Header />
      <main className="lg:container lg:mx-auto">
        <div className="min-h-[400px] relative py-4 lg:grid  lg:gap-4 lg:grid-cols-2">
          <div className="">
            <OutdoorList outdoors={outdoors} />
          </div>
          <div className="">
            <div className="h-screen sticky top-0  items-center justify-center rounded-lg hidden bg-gray-100 lg:flex">
              <Map />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
