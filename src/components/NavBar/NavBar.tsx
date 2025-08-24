"use client";

import { useState, useEffect } from "react";
import NavbarMobile from "./NavbarMobile";
import NavBarDesktop from "./NavBarDesktop";

export default function NavBar() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    setIsMobileOrTablet(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobileOrTablet ? <NavbarMobile /> : <NavBarDesktop />}</div>;
}