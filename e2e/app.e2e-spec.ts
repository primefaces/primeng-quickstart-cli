import { PrimengQuickstartCliPage } from './app.po';

describe('primeng-quickstart-cli App', function() {
  let page: PrimengQuickstartCliPage;

  beforeEach(() => {
    page = new PrimengQuickstartCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
