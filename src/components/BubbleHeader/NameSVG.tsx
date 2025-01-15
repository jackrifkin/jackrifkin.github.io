import React from "react";

interface NameSVGProps {
  size?: "sm" | "md" | "lg";
  svgRef: React.RefObject<SVGSVGElement>;
}

const NameSVG = ({ size = "lg", svgRef }: NameSVGProps) => {
  return size === "lg" ? (
    <svg
      ref={svgRef}
      width="776"
      height="127"
      viewBox="0 0 776 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M54.4999 6.5V75.5C54.4999 81 50 108.625 27.5 107.5C5.00001 106.375 6.33333 77.3333 6 77M86.4997 55.5C91.4997 52.3333 109.606 42.5084 120 55.5C124.553 61.1914 125.552 69.4559 126 77.5C125.766 82.4459 126 100.099 126 104M114.5 83.5L103 74C94.5 74 81.5 82.7 81.5 89.5C81.5 98 88.2041 106.588 95.5 107.5C102.34 108.355 113.5 107.5 114.5 97"
        stroke="none"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M212.053 57.286C189.014 37.8321 163.106 52.6289 168.023 81.9161C173.156 112.488 200.276 107.935 218.51 95.7476"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M245.5 24.5V104.5M296.5 36L259 77.5L295 116"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M591 24V104M642 35.5L604.5 77L640.5 115.5"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M379 103V27.5V19.5M390 66.5H416C441.5 59.5 440 32 416 25.5H390M423 80.5L438.5 113"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M479.5 62V115.5M479 14.5L479.5 35.5"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M669.5 61V116M669 15L669.5 36"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M716 47.3542V110.354M768.5 119.354C768.5 105.854 768.855 66.3539 765.5 59.8539C757.5 44.3539 734.5 47.8539 730.5 59.8539"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M531.5 106.061V41.061C532.167 36.2276 527.5 -7.5 573 13M541 55.061L559.5 55.061M522 55.061L505.5 55.061"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  ) : size === "md" ? (
    <svg
      ref={svgRef}
      width="404"
      height="266"
      viewBox="0 0 404 266"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M101.5 6V75C101.5 80.5 97 108.125 74.5 107C52 105.875 53.3333 76.8333 53 76.5M133.5 55C138.5 51.8333 156.606 42.0084 167 55C171.553 60.6914 172.552 68.9559 173 77C172.766 81.9459 173 99.5988 173 103.5M161.5 83L150 73.5C141.5 73.5 128.5 82.2 128.5 89C128.5 97.5 135.204 106.088 142.5 107C149.34 107.855 160.5 107 161.5 96.5"
        stroke="none"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M259.053 56.786C236.014 37.3321 210.106 52.1289 215.023 81.4161C220.156 111.988 247.276 107.435 265.51 95.2476"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M292.5 24V104M343.5 35.5L306 77L342 115.5"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M219 162.937V242.937M270 174.437L232.5 215.937L268.5 254.437"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M7 241.937V166.437V158.437M18 205.437H44C69.5 198.437 68 170.937 44 164.437H18M51 219.437L66.5 251.937"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M107.5 200.937V254.437M107 153.437L107.5 174.437"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M297.5 199.937V254.937M297 153.937L297.5 174.937"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M344 186.291V249.291M396.5 258.291C396.5 244.791 396.855 205.291 393.5 198.791C385.5 183.291 362.5 186.791 358.5 198.791"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M159.5 244.998V179.998C160.167 175.165 155.5 131.437 201 151.937M169 193.998L187.5 193.998M150 193.998L133.5 193.998"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      ref={svgRef}
      width="280"
      height="185"
      viewBox="0 0 280 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.4256 6V53.0409C71.4256 56.7906 68.3578 75.624 53.0183 74.857C37.6789 74.0901 38.5879 54.2908 38.3607 54.0636M93.2416 39.4059C96.6503 37.247 108.995 30.5489 116.08 39.4059C119.184 43.286 119.866 48.9203 120.171 54.4044C120.011 57.7763 120.171 75.3403 120.171 78M112.331 58.495L104.491 52.0183C98.6958 52.0183 89.833 57.9496 89.833 62.5855C89.833 68.3804 94.4035 74.2353 99.3775 74.857C104.041 75.4399 111.649 74.857 112.331 67.6986"
        stroke="none"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M178.838 40.6235C163.131 27.3608 145.468 37.4485 148.82 57.4152C152.32 78.2578 170.809 75.1536 183.24 66.8449"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M201.64 18.2716V80.652M236.41 26.1118L210.844 54.4045L235.387 80.652"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M151.532 112.992V175.373M186.301 120.832L160.735 149.125L185.278 175.373"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M7 166.851V115.378V109.924M14.4993 141.967H32.2249C49.6096 137.194 48.5869 118.446 32.2249 114.015H14.4993M32.2249 147.5L47.5643 173.668"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M75.5162 138.899V175.373M75.1753 106.516L75.5162 120.832"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M205.049 138.217V175.713M204.708 106.856L205.049 121.173"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M236.751 128.914V171.864M272.543 178C272.543 168.796 272.785 141.867 270.497 137.436C265.043 126.869 249.363 129.255 246.636 137.436"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M110.967 168.938V124.624C111.422 121.328 108.24 91.517 139.26 105.493M117.444 134.168L130.056 134.168M104.491 134.168L93.2417 134.168"
        stroke="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NameSVG;
