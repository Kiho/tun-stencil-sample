import { Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home.scss'
})
export class HomePage {

  public render() {
    return (
      <section class='hero is-dark is-fullheight is-bold'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>
              Primary title
            </h1>
            <h2 class='subtitle'>
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
