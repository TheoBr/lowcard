export const getCardParamsFromURL = (searchParams: URLSearchParams) => {
  const char = searchParams.get("char");
  const backgroundColor = searchParams.get("backgroundColor");
  const textColor = searchParams.get("textColor");

  if (!char || !backgroundColor || !textColor) {
    return;
  }

  return { char, backgroundColor, textColor };
};
