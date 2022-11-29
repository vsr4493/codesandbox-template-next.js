import Script from "next/script";
import { useRef } from "react";
import { useGleanSearchBox } from "../hooks/useGleanSearch";

const NavBar = (props) => {
  const gleanSearchRef = useRef(null);
  const { scriptSrc, renderSearchBox } = useGleanSearchBox(gleanSearchRef);

  return (
    <>
      <Script onLoad={renderSearchBox} src={scriptSrc} />
      <section className="bg-blue-200">
        <div className="py-2 mx-auto max-w-screen-lg flex items-center justify-between">
          <h2 className="tracking-tight text-2xl flex-1">Sample</h2>
          <div id="glean-search">
            <div
              ref={gleanSearchRef}
              id="search-box"
              className="relative w-[600px] h-12 z-20"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
