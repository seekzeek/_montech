import { useState, useEffect } from "react";

export const useGetRemainingHeight = () => {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    let winW, winH;
    if (document.body && document.body.offsetWidth) {
      //Internet Explorer (backward-compatibility mode):
      winW = document.body.offsetWidth;
      winH = document.body.offsetHeight;
    }

    if (
      document.compatMode == "CSS1Compat" &&
      document.documentElement &&
      document.documentElement.offsetWidth
    ) {
      //Internet Explorer (standards mode, document.compatMode=='CSS1Compat'):
      winW = document.documentElement.offsetWidth;
      winH = document.documentElement.offsetHeight;
    }

    if (window.innerWidth && window.innerHeight) {
      // most other browsers – as well as IE9 (standards mode):
      winW = window.innerWidth;
      winH = window.innerHeight;
    }

    let topbarHeight = document.querySelector(".topbar_height").clientHeight;
    let bodyHeight = winH - topbarHeight - 30; //  height left for element to occupy
    setHeight(`${bodyHeight}px`);
  }, []);

  return [height];
};

export const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  const updatePosition = (event) => {
    const { pageX, pageY, clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document
      .querySelector(".bg-image")
      .addEventListener("mouseenter", () => setIsVisible(true));
    document
      .querySelector(".bg-image")
      .addEventListener("mouseleave", () => setIsVisible(false));
    return () => {
      document
        .querySelector(".bg-image")
        .removeEventListener("mouseenter", () => setIsVisible(true));
      document
        .querySelector(".bg-image")
        .removeEventListener("mouseleave", () => setIsVisible(false));
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition, false);
    document.addEventListener("mouseenter", updatePosition, false);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
    };
  }, []);

  return { position, isVisible };
};

// {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "@constants": ["src/Constants/index"],
//       "@components": ["src/Components/index"],
//       "@mock": ["src/Mock/Data"],
//       "@utils": ["src/Utils/helpers"]
//     }
//   }
// }
