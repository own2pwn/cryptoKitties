import { CryptoKittiesPage } from './app.po';

describe('crypto-kitties App', () => {
  let page: CryptoKittiesPage;

  beforeEach(() => {
    page = new CryptoKittiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
