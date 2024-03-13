export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pPh0toNUWd3k2lqLwGcdLEYtRg8jD0Pi&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images.downsized_medium.url,
    };
  });
  return gifs;
};
