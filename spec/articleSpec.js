it('expect an articles to be of the Article class', () => {
  let article = new Article(
    (image = 'some image'),
    (title = 'a title'),
    (body = 'some text'),
    (url = 'some url')
  );
  expect(article).toBeInstanceOf(Article);
});
