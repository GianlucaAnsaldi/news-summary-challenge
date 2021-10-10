it('expect to correctly create a new Article', () => {
  let article = new Article(
    (image = 'some image'),
    (title = 'a title'),
    (body = 'some text'),
    (url = 'some url')
  );
  expect(article).toBeInstanceOf(Article);
  expect(article.image).toEqual('some image');
  expect(article.title).toEqual('a title');
  expect(article.body).toEqual('some text');
  expect(article.url).toEqual('some url');
});
