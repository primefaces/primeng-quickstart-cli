import { PqPage } from './app.po';

describe('pq App', () => {
  let page: PqPage;

  beforeEach(() => {
    page = new PqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
