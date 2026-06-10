import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageWrapper({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setFadeIn(false);

    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setFadeIn(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        fadeIn
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2"
      }`}
    >
      {displayChildren}
    </div>
  );
}