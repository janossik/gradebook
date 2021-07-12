import { useState, useRef, useEffect } from "react";
import { childNodesToArray } from "utils/utils";

const useHandleNavigation = (init: boolean = false) => {
  const [active, setActive] = useState(init);
  const refNavigation = useRef<HTMLElement>(null);

  const closeNavigation = () => setActive(false);
  const openNavigation = () => setActive(true);
  const inverseNavigation = () => setActive(!active);

  useEffect(() => {
    const closeNavigationIfClickOtherElement = (e: MouseEvent) => {
      const { current } = refNavigation;
      if (active && current) {
        const childNodes = childNodesToArray(current);
        const clickInNavigation = childNodes.includes(e.target) || e.target === current;
        if (!clickInNavigation) {
          setActive(false);
        }
      }
    };
    document.addEventListener("click", closeNavigationIfClickOtherElement);
    return () => {
      document.removeEventListener("click", closeNavigationIfClickOtherElement);
    };
  }, [active]);

  return { active, setActive, refNavigation, closeNavigation, openNavigation, inverseNavigation };
};

export default useHandleNavigation;
