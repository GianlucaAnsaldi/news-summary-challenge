const headlines = new Headlines();

it('a new instance of Headlines is an empty array', () => {
  expect(headlines.articles.length).toEqual(0);
});

it('adds a new article in the headlines', () => {
  headlines.addArticle();
  expect(headlines.articles.length).toEqual(1);
});

it('returns all the articles', () => {
  headlines.addArticle();
  expect(headlines.showAll().length).toEqual(2);
});
