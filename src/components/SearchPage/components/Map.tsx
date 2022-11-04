import * as L from "leaflet";
import { useEffect, useRef } from "react";

import "leaflet/dist/leaflet.css";

export const Map = () => {
  const map = useRef<L.Map>();
  const container = useRef<HTMLElement>();

  useEffect(() => {
    if (container.current) {
      map.current = L.map(container.current).setView([51.505, -0.09], 13);
      map.current.invalidateSize();

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map.current);

      return () => {
        map.current?.off();
        map.current?.remove();
      };
    }
  }, []);

  return <div ref={container} className="h-full w-full"></div>;
};
