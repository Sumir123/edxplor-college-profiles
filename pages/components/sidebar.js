import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Dashboard</Link>
        </li>

        <li className={router.pathname == "/programs" ? "active" : ""}>
          <Link href="/programs">Programs</Link>
        </li>
        <li className={router.pathname == "/facilities" ? "active" : ""}>
          <Link href="/facilities">Facilities</Link>
        </li>
        <li className={router.pathname == "/location" ? "active" : ""}>
          <Link href="/location">Location</Link>
        </li>
        <li className={router.pathname == "/overview" ? "active" : ""}>
          <Link href="/overview">Overview</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
