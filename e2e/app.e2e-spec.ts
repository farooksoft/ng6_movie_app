import { AppPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('movie-app App', () => {
  //let page: AppPage;

  beforeEach(() => {
    //page = new AppPage();
  });

  it('should navigate to login page', () => {
    //page.navigateTo();
    browser.get("/");
    expect(element(by.css('#title')).isPresent()).toBe(true);
    expect(element(by.css('.login-form')).isPresent()).toBe(true);

    let uid=element(by.id("email"));
    let pwd=element(by.id("password"));

    uid.sendKeys("mukesh.goel@niit.com");
    pwd.sendKeys("admin123");
    
    let btn=element(by.id("btnSubmit"));
    btn.click();

  });
});
