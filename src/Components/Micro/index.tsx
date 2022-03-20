import Newsletter from "./Newsletter";
import Features from "./Features";
import NftCollections from "./NftCollections";
import NftGreenPlatform from "./NftGreenPlatform";
import NftMarketplace from "./NftMarketplace";
import NftSectioned from "./NftSectioned";
import Hero from "./Hero";

import { useMousePosition } from "@utils";

export {
  Newsletter,
  Features,
  NftCollections,
  NftGreenPlatform,
  NftMarketplace,
  NftSectioned,
  Hero,
  Cursor,
};

const Cursor = (props) => {
  const {
    position: { clientX, clientY },
    isVisible,
  } = useMousePosition();

  return (
    <div
      className="hidden md:block transition-all"
      style={{
        position: "absolute",
        left: clientX - 2,
        top: clientY - 2,
        transform: "translate(-50%, -50%)",
        width: 15,
        height: 15,
        borderRadius: 50,
        background: "#29DC89",
        transitionTimingFunction: "cubic-bezier(0.89,0.98,0.87,1)",
        opacity: isVisible && clientX > 1 ? 1 : 0,
      }}
    ></div>
  );
};
