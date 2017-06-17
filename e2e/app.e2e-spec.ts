import { MYTASKPROJECTPage } from './app.po';

describe('my-task-project App', function() {
  let page: MYTASKPROJECTPage;

  beforeEach(() => {
    page = new MYTASKPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
