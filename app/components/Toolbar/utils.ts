import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useTopToolbar = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const handleOfferClick = () => {
    if (location.pathname === "/") {
      // If already on the main page, just scroll to the section
      scrollToSection("offer");
    } else {
      // Navigate to the main page and scroll to the section after navigating
      router.push("/");

      // Use setTimeout to ensure the page has changed before scrolling
      setTimeout(() => {
        scrollToSection("offer");
      }, 100);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY > lastScrollY &&
      window.scrollY > 50 &&
      !isSmallMenuOpen
    ) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.clientY < 50) {
      setIsVisible(true);
    } else if (window.scrollY > 50 && !isSmallMenuOpen) {
      setIsVisible(false);
    }
  };

  return {
    scrollToSection,
    handleOfferClick,
    handleMouseMove,
    handleScroll,
    isVisible,
    isSmallMenuOpen,
    setIsSmallMenuOpen,
    lastScrollY,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        // @ts-expect-error/unexpected
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
