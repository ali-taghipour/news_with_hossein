import React from "react";
import classNames from "../../../utils/classNames";
import colorInvert from "../../../utils/colorInvert";

function Box({
  title,
  children,
  color,
  full,
  className,
  wrapperClassName,
  extra,
}) {
  return (
    <section className={wrapperClassName}>
      <div className="flex justify-between items-center">
        <h4
          className={classNames(
            "py-2 self-end rounded-t w-[max-content] font-bold uppercase",
            full ? "bg-dark text-white px-4" : ""
          )}
          style={{
            backgroundColor: full ? color || null : null,
            color: color ? (full ? colorInvert(color, true) : color) : null,
          }}
        >
          {title}
        </h4>
        {extra}
      </div>
      <div
        className={classNames("border-t-2 border-dark py-2", className)}
        style={{ borderColor: color || null }}
      >
        {children}
      </div>
    </section>
  );
}

export default Box;
