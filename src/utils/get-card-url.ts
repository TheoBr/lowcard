import { CardProperties } from "../core/schema";
import querystring from "query-string";

export const getCardURL = (card: CardProperties) => {
  return `${window.location.origin}/card?${querystring.stringify({
    ...card,
  })}`;
};
