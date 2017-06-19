import { PqPage } from './app.po';

describe('pq App', () => {
  let page: PqPage;

  beforeEach(() => {
    page = new PqPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
