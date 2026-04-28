import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
  url?: string;
}

function setMeta(property: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function PageMeta({ title, description, url }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setMeta("robots", "index, follow");

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Solved Together", "property");
    if (url) setMeta("og:url", url, "property");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [title, description, url]);

  return null;
}
