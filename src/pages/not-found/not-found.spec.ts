import { TestWindow } from '@stencil/core/testing';
import { NotFoundPage } from './not-found';

describe('app', () => {
  it('should build', () => {
    expect(new NotFoundPage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLNotFoundPageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [NotFoundPage],
        html: '<not-found-page></not-found-page>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
