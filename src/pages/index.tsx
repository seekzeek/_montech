import React, { useState, useEffect } from "react";

import { Images } from "@constants";
import {
  Features,
  Header,
  Hero,
  Newsletter,
  NftCollections,
  NftGreenPlatform,
  NftMarketplace,
  NftSectioned,
  Footer,
  Cursor,
} from "@components";
import { NFT_SECTIONED } from "@mock";

interface customWindow extends Window {
  ethereum: any;
}

declare const window: customWindow;

const App = () => {
  const [accountAddress, setAccountAddress] = useState<string>("");
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const alertToggler = () => setIsAlert(!isAlert);

  const getAccount = async () => {
    try {
      if (
        typeof window !== "undefined" &&
        typeof window.ethereum !== "undefined"
      ) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setIsAlert(true);
        return setAccountAddress(account);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlert(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isAlert]);

  return (
    <div className="bg-image overflow-x-hidden">
      <Cursor />

      <div className="md:bg-custom-secondary">
        <Header
          {...{
            accountAddress,
            getAccount,
          }}
        />
        <Hero
          {...{
            accountAddress,
            isAlert,
            getAccount,
            alertToggler,
          }}
        />
      </div>

      <Features />

      <NftMarketplace />

      <NftSectioned imgSrc={Images.ReviewChart.src} {...NFT_SECTIONED[0]} />

      <NftSectioned
        imgSrc={Images.NftCollections.src}
        reverse
        {...NFT_SECTIONED[1]}
      />

      <NftSectioned imgSrc={Images.NftMarketplace.src} {...NFT_SECTIONED[2]} />

      <NftGreenPlatform />

      <NftCollections />

      <Footer />
    </div>
  );
};

export default App;
