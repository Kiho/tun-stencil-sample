import { TestWindow } from '@stencil/core/testing';
import { FormsPage } from './forms';

describe('forms-page', () => {
  it('should build', () => {
    expect(new FormsPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFormsPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FormsPage],
        html: '<forms-page></forms-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
