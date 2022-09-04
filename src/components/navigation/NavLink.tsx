import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export type NavLinkProps = {
  href: string;
  icon: string;
  text: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, onClick }) => {
  const router = useRouter();
  const isActive = useMemo(
    () => router.pathname === href.toLowerCase().replace(" ", "-"),
    [router.pathname, href]
  );

  return (
    <Link href={href}>
      <div
        onClick={onClick}
        className={
          "flex gap-4 items-center justify-center sm:justify-start px-2 py-1 w-full hover:bg-light-background dark:hover:bg-dark-background  hover:text-light-primary dark:hover:text-dark-primary transition-colors rounded cursor-pointer " +
          (isActive
            ? "text-light-primary dark:text-dark-primary"
            : "text-light-secondary dark:text-dark-secondary")
        }
      >
        <i className={`fa-solid ${icon} min-w-[1rem]`}></i>
        <p className="hidden sm:block">{text}</p>
      </div>
    </Link>
  );
};

export default NavLink;
