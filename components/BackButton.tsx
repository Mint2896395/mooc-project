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
  href: string
}

const BackButton: FC<BackButtonProps> = ({ href, className }) => {
  return (
    <div className={cn('relative box-border flex w-full max-w-full flex-col items-center mt-5', className)}>
        <div className="box-border ">
        <Link
            className="group box-border rounded-3xl border border-[var(--global-color-primary)] px-6 py-2 text-center font-[inherit] text-sm font-medium normal-case leading-[inherit] tracking-normal text-[var(--global-color-primary)] cursor-pointer hover:bg-[var(--global-color-primary)]"
            href={href}
        >
            <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ width: "10px" }}
            className="box-border inline-block not-italic leading-none text-[var(--global-color-primary)] group-hover:text-white"
            />
            <span className="group-hover:text-white ">
            &nbsp;&nbsp;ย้อนกลับ
            </span>
        </Link>
        </div>
    </div>
  )
}

export default BackButton