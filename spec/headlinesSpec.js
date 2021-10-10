const headlines = new Headlines();

it('a new instance of Headlines is an empty array', () => {
  expect(headlines.articles.length).toEqual(0);
});

it('adds a new article in the headlines', () => {
  headlines.addArticle();
  expect(headlines.articles.length).toEqual(1);
});
