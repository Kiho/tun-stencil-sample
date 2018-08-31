import { TestWindow } from '@stencil/core/testing';
import { ProfilePage } from './profile';

describe('profile-page', () => {
  it('should build', () => {
    expect(new ProfilePage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLProfilePageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ProfilePage],
        html: '<profile-page></profile-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
