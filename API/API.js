export const fetchArticles = async (count = 10, category = 'general', lang = 'es') => {
  // const apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&apikey=e1205d27fd86e308e2c0cfff61ed52c1`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  const articles = data.articles.slice(0, count);
  return articles;
};

