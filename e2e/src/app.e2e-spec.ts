import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    browser.waitForAngularEnabled(false);
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to Claire\'s version of HackerNews');
  });

  it('should test the headline text', () => {
    page.navigateTo();
    expect(page.getStory()).toEqual('This is a dummy story to use for dev and testing purposes');
  });

  it('should be able to click a headline', () => {
    page.navigateTo();
    expect(page.clickStory());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
