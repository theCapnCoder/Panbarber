import { FC } from "react";

type Props = {
  className: string;
};

export const Map: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="uiw:map" clip-path="url(#clip0_118_6)">
        <path
          id="Vector"
          d="M40.5475 4.85738C42.18 6.13738 43.305 8.20488 43.765 10.3699C43.8207 10.3875 43.875 10.4092 43.9275 10.4349L49.04 12.7999C49.3258 12.9311 49.568 13.1414 49.7381 13.4058C49.9082 13.6703 49.9991 13.9779 50 14.2924V45.2099C49.9982 45.4667 49.9369 45.7196 49.8209 45.9488C49.7049 46.1779 49.5374 46.3771 49.3315 46.5307C49.1257 46.6842 48.887 46.788 48.6343 46.8338C48.3816 46.8797 48.1217 46.8663 47.875 46.7949L33.7025 42.7949L16.8525 47.4399C16.5485 47.5234 16.2271 47.5199 15.925 47.4299L1.185 43.0424C0.844302 42.9423 0.544974 42.735 0.331488 42.4513C0.118002 42.1675 0.00174915 41.8225 0 41.4674L0 9.99488C0 8.89488 1.07 8.10488 2.1375 8.41488L16.3925 12.5674L23.6375 10.3499C23.7372 10.3204 23.8392 10.2995 23.9425 10.2874C24.2225 8.64738 25.005 7.07238 26.3175 5.53738C27.875 3.71238 30.6075 2.64238 33.27 2.51488C36.0325 2.38238 38.1425 2.97238 40.545 4.85488L40.5475 4.85738ZM3.3325 12.2024V40.2399L15.5075 43.8624V15.7449L3.3325 12.2024ZM23.855 13.7374L18.84 15.2699V43.4674L31.5025 39.9824V31.7449C31.5025 30.8349 32.25 30.0974 33.17 30.0974C34.09 30.0974 34.835 30.8349 34.835 31.7474V39.6899L46.6675 43.0274V15.3399L43.8675 14.0399C43.82 14.3149 43.76 14.5849 43.685 14.8474C43.1414 16.7643 42.2294 18.5568 41 20.1249L34.8075 27.8574C34.6445 28.0607 34.4362 28.2231 34.1993 28.3318C33.9625 28.4405 33.7035 28.4924 33.4431 28.4835C33.1826 28.4745 32.9278 28.4048 32.699 28.2801C32.4702 28.1554 32.2737 27.9789 32.125 27.7649L26.3375 19.3824C25.3825 18.0474 24.7125 16.8574 24.335 15.7924C24.098 15.1277 23.937 14.4383 23.855 13.7374ZM33.43 5.80988C31.615 5.89738 29.75 6.62738 28.8625 7.66488C27.795 8.91488 27.27 10.0849 27.165 11.2699C27.04 12.6974 27.125 13.7049 27.48 14.7024C27.7425 15.4399 28.265 16.3749 29.0725 17.5024L33.6 24.0574L38.375 18.0949C39.3383 16.8638 40.0525 15.4567 40.4775 13.9524C41.0775 11.8524 40.1725 8.76738 38.4775 7.44238C36.74 6.07988 35.4275 5.71238 33.4325 5.80988H33.43ZM33.775 7.55238C36.535 7.55238 38.775 9.76488 38.775 12.4949C38.7714 13.1478 38.6392 13.7935 38.3859 14.3953C38.1327 14.9971 37.7633 15.5431 37.299 16.0021C36.8347 16.461 36.2845 16.824 35.6798 17.0703C35.0751 17.3166 34.4279 17.4413 33.775 17.4374C31.015 17.4374 28.775 15.2249 28.775 12.4949C28.775 9.76488 31.015 7.55238 33.775 7.55238ZM33.775 10.8474C33.5573 10.8461 33.3415 10.8876 33.1399 10.9697C32.9383 11.0518 32.7549 11.1728 32.6 11.3258C32.4452 11.4788 32.322 11.6607 32.2375 11.8613C32.153 12.0619 32.1088 12.2772 32.1075 12.4949C32.1075 13.4049 32.855 14.1424 33.775 14.1424C33.9927 14.1434 34.2084 14.1015 34.4099 14.0191C34.6113 13.9367 34.7946 13.8154 34.9492 13.6622C35.1038 13.509 35.2268 13.3268 35.311 13.1261C35.3952 12.9254 35.439 12.71 35.44 12.4924C35.4367 12.0536 35.2596 11.6341 34.9475 11.3258C34.6354 11.0174 34.2137 10.8454 33.775 10.8474Z"
          fill="#B5612C"
        />
      </g>
      <defs>
        <clipPath id="clip0_118_6">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
