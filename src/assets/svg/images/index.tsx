import React, { FC } from "react";
import { Blank } from "./Blank";
import { Bottle } from "./Bottle";
import { Scissors } from "./Scissors";
import { Glass } from "./Glass";

export type IconName = "blank" | "bottle" | "scissors" | "glass";

type Props = {
  name: IconName;
  className: string;
};

const Icon: FC<Props> = ({ name, className }) => {
  const icons: { [key in IconName]: React.ReactNode } = {
    blank: <Blank className={className} />,
    bottle: <Bottle className={className} />,
    scissors: <Scissors className={className} />,
    glass: <Glass className={className} />,
  };
  return <>{icons[name]}</>;
};

export default Icon;
