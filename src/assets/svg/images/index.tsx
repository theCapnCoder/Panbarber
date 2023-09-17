import React, { FC } from "react";
import { Blank } from "./Blank";
import { Bottle } from "./Bottle";
import { Scissors } from "./Scissors";
import { Glass } from "./Glass";
import { CLock } from "./contact/Clock";
import { Email } from "./contact/Email";
import { Facebook } from "./contact/Facebook";
import { Instagram } from "./contact/Instagram";
import { Map } from "./contact/Map";
import { Phone } from "./contact/Phone";

export type IconName =
  | "blank"
  | "bottle"
  | "scissors"
  | "glass"
  | "clock"
  | "email"
  | "facebook"
  | "instagram"
  | "map"
  | "phone";

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
    clock: <CLock className={className} />,
    email: <Email className={className} />,
    facebook: <Facebook className={className} />,
    instagram: <Instagram className={className} />,
    map: <Map className={className} />,
    phone: <Phone className={className} />,
  };
  return <>{icons[name]}</>;
};

export default Icon;
