import React, { FC } from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface BackButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  //customproperty go here
  href: string;
  label: string;
  icon: boolean;
}

const BackButton: FC<BackButtonProps> = ({ href, className, label, icon }) => {
  return (
    <div
      className={cn(
        "relative box-border flex flex-col items-center justify-center ",
        className
      )}
    >
      <div className="box-border ">
        <Link
          className="group box-border cursor-pointer rounded-3xl border border-[var(--global-color-primary)] px-3 pb-[6px] pt-[5px] text-center font-[inherit] text-sm normal-case leading-[inherit] tracking-normal text-[var(--global-color-primary)] hover:bg-[var(--global-color-primary)] md:px-6 md:py-2 md:font-medium"
          href={href}
        >
          {icon && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ width: "10px" }}
              className="box-border inline-block not-italic leading-none text-[var(--global-color-primary)] group-hover:text-white"
            />
          )}
          <span className="group-hover:text-white ">&nbsp;&nbsp;{label}</span>
        </Link>
      </div>
    </div>
  );
};

export default BackButton