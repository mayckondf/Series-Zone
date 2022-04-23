export const removeTagsFromText = (text: string) => {
  return text.replace(/(<([^>]+)>)/gi, '');
};
