import React from "react";
import linkify from "linkify-it";
import { CardView } from "../../cards/card";
import { getCardParamsFromURL } from "../../../utils/get-params-from-url";
import { mockYoutubeMetaFactory } from "../mock";
import { YoutubeEmbed } from "./youtube-embed";

export const MetadataView: React.FC<{ link: linkify.Match }> = ({ link }) => {
  // This is the point where metadata should be fetched for the url passed
  // const urlMetadata = useQuery(URL_METADATA, {variables: {url: link.url}});

  const url = new URL(link.url);

  // Youtube embed
  if (url.hostname === "www.youtube.com") {
    // return <div>Youtube Embed</div>;
    const youtubeMetadata = mockYoutubeMetaFactory();
    return <YoutubeEmbed youtubeMetadata={youtubeMetadata} url={url.href} />;
  }

  // Card embed
  if (url.hostname === window.location.hostname) {
    const cardProps = getCardParamsFromURL(url.searchParams);
    if (cardProps) {
      return (
        <CardView
          {...cardProps}
          onCardClick={() => {
            window.open(url.href);
          }}
        />
      );
    }
  }

  // If not a supported type, return null
  return null;
};
