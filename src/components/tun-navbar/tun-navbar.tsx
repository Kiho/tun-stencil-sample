import { Component, State } from '@stencil/core';

@Component({
  tag: 'tun-navbar',
  styleUrl: 'tun-navbar.scss'
})
export class TunNavbar {

  anchorRef: HTMLAnchorElement;
  menuRef: HTMLMenuElement;
  @State() isActive = false;

  render() {
    return (
      <nav class='navbar is-primary is-fixed-bottom' role='navigation' aria-label='main navbar'>
        <section class='navbar-brand'>
          <stencil-route-link url='/' class='navbar-item'>Stencil Example App</stencil-route-link>
          <a role='button' class='navbar-burger' aria-label='menu' aria-expanded='false'
            onClick={this.toggleActive.bind(this)} ref={(el: HTMLAnchorElement) => this.anchorRef = el}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </section>
        <menu class='navbar-menu' ref={(el: HTMLMenuElement) => this.menuRef = el}>
          <section class='navbar-start'>
            <stencil-route-link url='/forms' class='navbar-item'>Forms</stencil-route-link>
            <stencil-route-link url='/login' class='navbar-item'>Log In</stencil-route-link>
          </section>
          <menu class='navbar-end'>
            <section class='navbar-item has-dropdown is-hoverable is-right has-dropdown-up'>
              <div class='navbar-link'>
                <span class='comic'>Serious</span>&nbsp;Stuff
              </div>
              <div class='navbar-dropdown'>
                <a href='https://dev.to/tunaxor' target='_blank' class='navbar-item'>Dev.to</a>
                <a href='https://twitter.com/@daniel_tuna' target='_blank' class='navbar-item'>Twitter</a>
                <a href='https://gitlab.com/AngelMunoz' target='_blank' class='navbar-item'>Gitlab</a>
                <a href='https://github.com/AngelMunoz' target='_blank' class='navbar-item'>Github</a>
              </div>
            </section>
          </menu>
        </menu>
      </nav>
    );
  }

  toggleActive() {
    this.anchorRef.classList.toggle('is-active');
    this.menuRef.classList.toggle('is-active');
  }
}
