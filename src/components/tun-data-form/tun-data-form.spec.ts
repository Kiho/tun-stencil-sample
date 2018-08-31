import { TestWindow } from '@stencil/core/testing';
import { TunDataForm } from './tun-data-form';

describe('tun-data-form', () => {
  it('should build', () => {
    expect(new TunDataForm()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTunDataFormElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TunDataForm],
        html: '<tun-data-form></tun-data-form>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
