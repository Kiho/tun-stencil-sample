import { TestWindow } from '@stencil/core/testing';
import { TunNavbar } from './tun-navbar';

describe('tun-navbar', () => {
  it('should build', () => {
    expect(new TunNavbar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunNavbarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunNavbar],
        html: '<tun-navbar></tun-navbar>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
