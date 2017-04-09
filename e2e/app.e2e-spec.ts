import { NySearchPage } from './app.po';

describe('ny-search App', () => {
  let page: NySearchPage;

  beforeEach(() => {
    page = new NySearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
