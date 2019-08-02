import { LoteriaPage } from './app.po';

describe('loteria App', () => {
  let page: LoteriaPage;

  beforeEach(() => {
    page = new LoteriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
