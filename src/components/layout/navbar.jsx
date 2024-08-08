"use client";
import { Button } from "@/shadcn/ui/button";
import Image from "next/image";
import { DarkModeSwitch } from "@/shadcn/ui/dark-mode-switch";
import { buttonVariants } from "@/shadcn/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full  bg-background fixed top-0 left-0  border-b-[1px] border-foreground/15 z-10">
      <div className="flexBetXcenterY py-3 px-20">
        <Image
          src="/svgs/skillear-logo.svg"
          width={100}
          height={30}
          alt="logo"
        />

        <div className="secondaryFont flexCenterXY gap-4">
          <div className="flexCenterXY  gap-4 ">
            <DarkModeSwitch />
            <Link
              className={buttonVariants()}
              // className={buttonVariants({ variant: "outline" })}
              href={"/auth/sign-up"}
            >
              Sign Up
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"/auth/login"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
