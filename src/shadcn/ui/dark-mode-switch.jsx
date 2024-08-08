"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/shadcn/utils";

const DarkModeSwitch = React.forwardRef(({ className, ...props }, ref) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleThemeChange = (checked) => {
    setIsDarkMode(checked);
    setTheme(checked ? "dark" : "light");
  };

  if (!mounted) {
    return null; // Don't render the switch until the theme is resolved
  }

  return (
    <SwitchPrimitives.Root
      // className={cn(
      //   "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      //   className
      // )}
      checked={isDarkMode}
      onCheckedChange={handleThemeChange}
      {...props}
      ref={ref}
    >
      {/* <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      /> */}
      {isDarkMode ? (
        <Moon className=" h-5 w-5 text-white" />
      ) : (
        <Sun className="  h-5 w-5 text-green-500" />
      )}
    </SwitchPrimitives.Root>
  );
});

DarkModeSwitch.displayName = SwitchPrimitives.Root.displayName;

export { DarkModeSwitch };
