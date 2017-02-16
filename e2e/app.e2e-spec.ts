import { NgdashboardPage } from './app.po';

describe('ngdashboard App', function() {
  let page: NgdashboardPage;

  beforeEach(() => {
    page = new NgdashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
