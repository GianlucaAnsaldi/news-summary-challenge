it('a new instance of Headlines is an empty array', () => {
  let headlines = new Headlines();
  expect(headlines.articles.length).toEqual(0);
});
