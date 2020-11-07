import React from "react";
import styled from "styled-components";
import { YoutubeLinkMetadata } from "../../../core/schema";

const StyledMetacard = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  width: 40rem;
  display: flex;
  padding: 1rem;
  cursor: pointer;
`;

const YtThumbnail = styled.img`
  width: 246px;
  height: 138px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1rem;
`;

const YtText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const YtTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const YtDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const YoutubeEmbed: React.FC<{
  youtubeMetadata: YoutubeLinkMetadata;
  url: string;
}> = ({ youtubeMetadata, url }) => {
  return (
    <StyledMetacard
      onClick={() => window.open(url)}
      aria-label={"Watch on youtube: " + youtubeMetadata.title}
    >
      <YtThumbnail src={youtubeMetadata.thumbnail} />
      <YtText>
        <YtTitle>{youtubeMetadata.title}</YtTitle>
        <YtDescription>{youtubeMetadata.description}</YtDescription>
      </YtText>
    </StyledMetacard>
  );
};
