import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app.scss'
})
export class AppRoot {

  public render() {
    return (
      <article>
        <header>
          <tun-navbar></tun-navbar>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='home-page' exact={true} />
              <stencil-route url='/login' component='login-page' exact={true} />
              <stencil-route url='/profile/:username' component='profile-page' />
              <stencil-route component='not-found-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </article>
    );
  }
}
