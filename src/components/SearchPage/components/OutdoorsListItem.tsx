import Image from "next/image";
import { ParkOutdoor } from "../../../types/models";

type Props = ParkOutdoor;

export const OutdoorsListItem = ({
  name,
  description,
  city,
  state,
  thumbnail,
}: Props) => {
  return (
    <li className="p-4 border border-gray-100 space-y-4">
      <div>
        <Image
          src={thumbnail.src}
          objectFit="cover"
          sizes="100%"
          width={700}
          height={475}
          className="rounded-lg"
        />
      </div>
      <div>
        <p className="text-sm text-gray-500">{`${city}, ${state.abbr}`}</p>
        <h5 className="text-lg font-semibold mb-2">{name}</h5>
        <p className="text-sm">{description}</p>
      </div>
    </li>
  );
};
