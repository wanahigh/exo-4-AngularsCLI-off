import { Exo4Page } from './app.po';

describe('exo4 App', () => {
  let page: Exo4Page;

  beforeEach(() => {
    page = new Exo4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
