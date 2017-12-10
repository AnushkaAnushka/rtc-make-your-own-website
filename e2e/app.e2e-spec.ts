import { LetscodePage } from './app.po';

describe('letscode App', () => {
  let page: LetscodePage;

  beforeEach(() => {
    page = new LetscodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
