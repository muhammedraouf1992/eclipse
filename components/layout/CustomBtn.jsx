import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CustomBtn = ({ variant, text, href = "#" }) => {
  let customClasses =
    variant == "primary"
      ? "bg-primary"
      : "bg-transparent border border-gray-800 group-hover:border-white/20";

  return (
    <div className={"wc-btn-wrapper style-1"}>
      <Link href={href} className="wc-btn-group" aria-label="read more">
        <span className={cn("wc-btn-play  ", customClasses)}>
          <ArrowUpRight />
        </span>
        <span className={cn("wc-btn-primary", customClasses)}> {text} </span>
        <span className={cn("wc-btn-play", customClasses)}>
          <ArrowUpRight />
        </span>
      </Link>
    </div>
  );
};

export default CustomBtn;
