class Headlines {
  constructor() {
    this.articles = [];
  }

  addArticle(article) {
    this.articles.push(article);
  }

  showAll() {
    return this.articles;
  }
}
