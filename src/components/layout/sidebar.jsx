"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BotMessageSquare,
  FileText,
  FolderGit2,
  Headset,
  ListVideo,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [sidebarClose, setSidebarClose] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    const pathEndName = pathname.split("/dashboard")[1];
    setActiveLink(pathEndName);
  }, [pathname]);

  const handleSidebarToggle = () => {
    setSidebarClose(!sidebarClose);
  };

  // Reusable NavLink component
  const NavLink = ({ href, icon: Icon, label, isActive, onClick }) => (
    <div
      className={`w-full flex  items-center ${
        sidebarClose ? "justify-center" : " justify-start"
      } ${
        isActive ? "hover:bg-primary" : "hover:bg-muted"
      } px-3 py-2 rounded-lg ${isActive ? "bg-primary text-muted" : ""} `}
      onClick={onClick}
    >
      <Link href={`/dashboard${href}`} className="flexCenterXY gap-4">
        <Icon className={`h-5 w-5 ${isActive ? "text-muted" : ""}`} />
        <span
          className={`${isActive ? "text-muted" : ""} ${
            sidebarClose ? "hidden" : "block"
          }`}

          // `${sidebarClose ? `hidden` : "bloack"}`
          // className=`${ isActive ? "text-muted" : ""}`
        >
          {label}
        </span>
      </Link>
    </div>
  );

  return (
    <aside
      className={`flex-shrink-0 sticky top-0 border-r  w-[250px]  ${
        sidebarClose
          ? "w-[70px] px-0 items-center"
          : "w-[250px] px-2 items-start"
      } flex flex-col justify-between items-start  `}
    >
      <nav
        className={`relative w-full flex flex-col  ${
          sidebarClose ? "justify-center " : "justify-start "
        }  items-start gap-5 px-4  mt-20 text-foreground text-[14px]`}
      >
        {/* hide sidebar */}
        <div
          className={`absolute  ${
            sidebarClose ? "-right-3" : "-right-6"
          } top-4 bg-white rounded-full border p-1 `}
          onClick={handleSidebarToggle}
        >
          {sidebarClose ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </div>

        <NavLink
          href="/my-courses"
          icon={Headset}
          label="My Courses"
          isActive={activeLink === "/my-courses"}
          onClick={() => handleLinkClick("/my-courses")}
        />

        <NavLink
          href="/explore"
          icon={ListVideo}
          label="Explore"
          isActive={activeLink === "/explore"}
          onClick={() => handleLinkClick("/explore")}
        />
        <NavLink
          href="/certificates"
          icon={FileText}
          label="Certificates"
          isActive={activeLink === "/certificates"}
          onClick={() => handleLinkClick("/certificates")}
        />
        <NavLink
          href="/ai-helper"
          icon={BotMessageSquare}
          label="Ai Helper"
          isActive={activeLink === "/ai-helper"}
          onClick={() => handleLinkClick("/ai-helper")}
        />
        <NavLink
          href="/projects"
          icon={FolderGit2}
          label="Projects"
          isActive={activeLink === "/projects"}
          onClick={() => handleLinkClick("/projects")}
        />
      </nav>
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 w-full">
        <NavLink
          href="/settings"
          icon={Settings}
          label="settings"
          isActive={activeLink === "/settings"}
          onClick={() => handleLinkClick("/settings")}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
