import React from "react";

export function IconMenu() {
  return (
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fill="#69707D"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function IconCart(props) {
  return (
    <svg
      width="22"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.fill ? props.fill : "fill-[#69707D]"}`}
    >
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export function IconLeftArrow() {
  return (
    <svg
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <path
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
        className="group-hover:stroke-orange group-focus:stroke-orange"
      />
    </svg>
  );
}

export function IconRightArrow() {
  return (
    <svg
      viewBox="0 0 13 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
    >
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
        className="group-hover:stroke-orange group-focus:stroke-orange"
      />
    </svg>
  );
}

export function IconPlus() {
  return (
    <svg
      width="12"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
          id="b"
        />
      </defs>
      <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
    </svg>
  );
}

export function IconMinus() {
  return (
    <svg
      width="12"
      height="4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          id="a"
        />
      </defs>
      <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg
      viewBox="0 0 14 15"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 fill-white group-hover:fill-orange"
    >
      <g clip-path="url(#clip0_1_4)">
        <path d="M11.596 0.782L13.718 2.904L9.12 7.499L13.717 12.096L11.595 14.218L7 9.62L2.405 14.217L0.283 12.095L4.878 7.5L0.282 2.904L2.404 0.782L6.999 5.378L11.596 0.782Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_4">
          <rect width="14" height="15" />
        </clipPath>
      </defs>
    </svg>
  );
}
