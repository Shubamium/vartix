import React from "react";

type Props = {
  t: string;
  r?: boolean;
  className?: string;
};

export default function InfiniteText({ t, r, className }: Props) {
  return (
    <div className={`infinitext ${r && "r"} ${className}`}>
      {t} {t} {t} {t} {t} {t} {t}
    </div>
  );
}
