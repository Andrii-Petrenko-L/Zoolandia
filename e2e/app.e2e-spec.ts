import { ZoolandiaPage } from './app.po';

describe('zoolandia App', () => {
  let page: ZoolandiaPage;

  beforeEach(() => {
    page = new ZoolandiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
