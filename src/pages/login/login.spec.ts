import { TestWindow } from '@stencil/core/testing';
import { LoginPage } from './login';

describe('login-page', () => {
  it('should build', () => {
    expect(new LoginPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLHomePageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [LoginPage],
        html: '<login-page></login-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
