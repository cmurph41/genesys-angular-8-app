import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  getStory() {
    return element(by.css('.mat-expansion-panel-header-title')).getText() as Promise<string>;
  }
  clickStory() {
    return element(by.css('.mat-expansion-panel-header-title')).click() as Promise<void>;
  }
  getStoryDescription() {
    return element(by.css('.mat-expansion-panel-body p')).getText() as Promise<string>;
  }
}
