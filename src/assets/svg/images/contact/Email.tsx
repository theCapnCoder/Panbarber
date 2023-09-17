import { FC } from "react";

type Props = {
  className: string;
};

export const Email: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon-park-outline:email-push">
        <g id="Group">
          <path
            id="Vector"
            d="M37.5 17.8125H45.8334V48.6875H4.16669V17.8125H12.5M25 22.5625V5.9375M25 5.9375L31.25 13.0625M25 5.9375L18.75 13.0625"
            stroke="#B5612C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M4.16669 17.8125L25 35.625L45.8334 17.8125"
            stroke="#B5612C"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};
