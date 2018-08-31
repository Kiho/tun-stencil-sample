import { TestWindow } from '@stencil/core/testing';
import { HomePage } from './home';

describe('home-page', () => {
  it('should build', () => {
    expect(new HomePage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLHomePageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [HomePage],
        html: '<home-page></home-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
