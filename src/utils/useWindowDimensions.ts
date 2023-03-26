import { useEffect, useLayoutEffect, useState } from "react";

export function useScreenSize() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
      setIsTab(screenWidth >= 768 && screenWidth <= 979);
      setIsDesktop(screenWidth > 979);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [isMobile, isTab, isDesktop];
}
