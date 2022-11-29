import { useEffect, Ref } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setIsReady, selectIsReady } from "../redux/GleanSearchRedux";

declare global {
  interface Window {
    EmbeddedSearch: any;
  }
}

/**
 * Renders Glean embedded search results based on the query param
 */
export const useGleanSearchResults = (containerRef: Ref<HTMLDivElement>) => {
  const isGleanSearchReady = useSelector(selectIsReady);
  const router = useRouter();

  useEffect(() => {
    if (!isGleanSearchReady) {
      console.debug("Glean Embedded search results :: Script not ready yet");
      return;
    }
    window.EmbeddedSearch.renderSearchResults(containerRef?.current, {
      query: router.query.q,
    });
  }, [router, isGleanSearchReady, containerRef]);
};

/**
 * Attaches the Glean embedded search box to a given containerRef
 */
export const useGleanSearchBox = (containerRef: Ref<HTMLElement>) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isReady = useSelector(selectIsReady);
  useEffect(() => {
    if (!isReady) {
      console.debug("Glean Embedded search box :: Script not ready yet");
      return;
    }
    window.EmbeddedSearch.renderSearchBox(containerRef?.current, {
      query: router.query.q,
      onSearch: (searchTerm: string) => {
        router.push({
          pathname: "/search",
          query: { ...router.query, q: searchTerm },
        });
      },
    });
  }, [isReady, router, containerRef]);

  return {
    renderSearchBox: () => dispatch(setIsReady(true)),
    scriptSrc: "https://app.glean.com/embedded-search-latest.min.js",
  };
};
