import { EduPortalAngular2Page } from './app.po';

describe('edu-portal-angular2 App', function() {
  let page: EduPortalAngular2Page;

  beforeEach(() => {
    page = new EduPortalAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
