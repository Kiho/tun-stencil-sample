import { Component } from '@stencil/core';

@Component({
  tag: 'tun-navbar',
  styleUrl: 'tun-navbar.scss'
})
export class TunNavbar {

  public buttonRef: HTMLButtonElement;
  public menuRef: HTMLMenuElement;
  public isActive = false;

  public render() {
    return (
      <nav class='navbar is-primary is-fixed-bottom' role='navigation' aria-label='main navbar'>
        <section class='navbar-brand'>
          <stencil-route-link url='/' class='navbar-item'>Stencil Example App</stencil-route-link>
          <a role='button' class='navbar-burger' aria-label='menu' aria-expanded='false'
            onClick={this.toggleActive.bind(this)} ref={(el: HTMLButtonElement) => this.buttonRef = el}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </section>
        <menu class='navbar-menu' ref={(el: HTMLMenuElement) => this.menuRef = el}>
          <section class='navbar-start'>
            <stencil-route-link url='/' class='navbar-item'>Projects</stencil-route-link>
            <stencil-route-link url='/' class='navbar-item'>Blog</stencil-route-link>
          </section>
          <menu class='navbar-end'>
            <section class='navbar-item has-dropdown is-hoverable has-dropdown-up'>
              <div class='navbar-link'>
                Random Stuff
              </div>
              <div class='navbar-dropdown'>
                <stencil-route-link url='/' class='navbar-item'>Resume</stencil-route-link>
                <stencil-route-link url='/' class='navbar-item'>Random Stuff</stencil-route-link>
                <a href='https://blog.tunaxor.me' target='_blank' class='navbar-item'>Old Blog</a>
              </div>
            </section>
            <section class='navbar-item has-dropdown is-hoverable is-right has-dropdown-up'>
              <div class='navbar-link'>
                <span class='comic'>Serious</span>&nbsp;Stuff
              </div>
              <div class='navbar-dropdown'>
                <a href='https://www.linkedin.com/in/angeldmunoz' target='_blank' class='navbar-item'>LinkedIn</a>
                <a href='https://twitter.com/@daniel_tuna' target='_blank' class='navbar-item'>Twitter</a>
                <a href='https://dev.to/tunaxor' target='_blank' class='navbar-item'>Dev.to</a>
                <a href='https://github.com/AngelMunoz' target='_blank' class='navbar-item'>Github</a>
                <a href='https://gitlab.com/AngelMunoz' target='_blank' class='navbar-item'>Gitlab</a>
              </div>
            </section>
          </menu>
        </menu>
      </nav>
    );
  }

  public toggleActive() {
    this.buttonRef.classList.toggle('is-active');
    this.menuRef.classList.toggle('is-active');
  }
}
