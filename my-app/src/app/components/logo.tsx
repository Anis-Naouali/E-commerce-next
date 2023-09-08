import React from "react";

interface Props {
  divClassName: any;
}

const Logo = ({ divClassName }: Props): JSX.Element => {
  return (
    <div className="relative w-[118px] h-[24px]">
      <div
        className={`absolute -top-px left-0 [font-family:var(--heading-24px-bold-font-family)] font-[number:var(--heading-24px-bold-font-weight)] text-[color:var(--text-2)] text-[length:var(--heading-24px-bold-font-size)] tracking-[var(--heading-24px-bold-letter-spacing)] leading-[var(--heading-24px-bold-line-height)] whitespace-nowrap  ${divClassName}`}
      >
        Exclusive
      </div>
    </div>
  );
};


export default Logo 