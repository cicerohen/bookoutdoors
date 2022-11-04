import { OutdoorsListItem } from "./OutdoorsListItem";

import { ParkOutdoor } from "../../../types/models";

type Props = {
  outdoors: ParkOutdoor[];
};

export const OutdoorList = ({ outdoors }: Props) => {
  return (
    <ul>
      {outdoors.map((outdoor) => (
        <OutdoorsListItem key={outdoor.id} {...outdoor} />
      ))}
    </ul>
  );
};
