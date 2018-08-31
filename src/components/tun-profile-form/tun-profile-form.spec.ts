import { TestWindow } from '@stencil/core/testing';
import { TunProfileForm } from './tun-profile-form';

describe('tun-data-form', () => {
  it('should build', () => {
    expect(new TunProfileForm()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunProfileFormElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunProfileForm],
        html: '<tun-data-form></tun-data-form>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
