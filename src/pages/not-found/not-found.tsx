import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'not-found-page',
  styleUrl: 'not-found.scss'
})
export class NotFoundPage {
  @Prop() history: RouterHistory;
  target: HTMLElement;
  surprise;
  render() {
    return (
      <section class='hero is-light is-fullheight is-bold'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>
              We've Lost you :(
            </h1>
            <h2 class='subtitle'>
              You might want to go back
            </h2>
            <p class='buttons'>
              <button onClick={this.goHome.bind(this)} class='button is-primary is-outlined'>Go Home</button>
              <button onClick={this.surpriseMe.bind(this)} class='button is-warning is-outlined'>Surprise Me</button>
            </p>
            <div ref={(el) => this.target = el} id='game-container'></div>
          </div>
        </div>
      </section>
    );
  }

  goHome() {
    this.history.replace('/');
  }

  surpriseMe() {
    window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
}
