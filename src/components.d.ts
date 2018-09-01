/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface TunDataForm {
    'edit': boolean;
  }
  interface TunDataFormAttributes extends StencilHTMLAttributes {
    'edit'?: boolean;
    'onResetDataForm'?: (event: CustomEvent) => void;
    'onSubmitDataForm'?: (event: CustomEvent) => void;
  }

  interface TunNavbar {}
  interface TunNavbarAttributes extends StencilHTMLAttributes {}

  interface TunProfileForm {
    'edit': boolean;
  }
  interface TunProfileFormAttributes extends StencilHTMLAttributes {
    'edit'?: boolean;
    'onResetTunProfile'?: (event: CustomEvent) => void;
    'onSubmitTunProfile'?: (event: CustomEvent) => void;
  }

  interface FormsPage {
    'match': MatchResults;
  }
  interface FormsPageAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface HomePage {}
  interface HomePageAttributes extends StencilHTMLAttributes {}

  interface LoginPage {
    'history': RouterHistory;
  }
  interface LoginPageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface NotFoundPage {
    'history': RouterHistory;
  }
  interface NotFoundPageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'TunDataForm': Components.TunDataForm;
    'TunNavbar': Components.TunNavbar;
    'TunProfileForm': Components.TunProfileForm;
    'FormsPage': Components.FormsPage;
    'HomePage': Components.HomePage;
    'LoginPage': Components.LoginPage;
    'NotFoundPage': Components.NotFoundPage;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'tun-data-form': Components.TunDataFormAttributes;
    'tun-navbar': Components.TunNavbarAttributes;
    'tun-profile-form': Components.TunProfileFormAttributes;
    'forms-page': Components.FormsPageAttributes;
    'home-page': Components.HomePageAttributes;
    'login-page': Components.LoginPageAttributes;
    'not-found-page': Components.NotFoundPageAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLTunDataFormElement extends Components.TunDataForm, HTMLStencilElement {}
  var HTMLTunDataFormElement: {
    prototype: HTMLTunDataFormElement;
    new (): HTMLTunDataFormElement;
  };

  interface HTMLTunNavbarElement extends Components.TunNavbar, HTMLStencilElement {}
  var HTMLTunNavbarElement: {
    prototype: HTMLTunNavbarElement;
    new (): HTMLTunNavbarElement;
  };

  interface HTMLTunProfileFormElement extends Components.TunProfileForm, HTMLStencilElement {}
  var HTMLTunProfileFormElement: {
    prototype: HTMLTunProfileFormElement;
    new (): HTMLTunProfileFormElement;
  };

  interface HTMLFormsPageElement extends Components.FormsPage, HTMLStencilElement {}
  var HTMLFormsPageElement: {
    prototype: HTMLFormsPageElement;
    new (): HTMLFormsPageElement;
  };

  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {}
  var HTMLLoginPageElement: {
    prototype: HTMLLoginPageElement;
    new (): HTMLLoginPageElement;
  };

  interface HTMLNotFoundPageElement extends Components.NotFoundPage, HTMLStencilElement {}
  var HTMLNotFoundPageElement: {
    prototype: HTMLNotFoundPageElement;
    new (): HTMLNotFoundPageElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'tun-data-form': HTMLTunDataFormElement
    'tun-navbar': HTMLTunNavbarElement
    'tun-profile-form': HTMLTunProfileFormElement
    'forms-page': HTMLFormsPageElement
    'home-page': HTMLHomePageElement
    'login-page': HTMLLoginPageElement
    'not-found-page': HTMLNotFoundPageElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'tun-data-form': HTMLTunDataFormElement;
    'tun-navbar': HTMLTunNavbarElement;
    'tun-profile-form': HTMLTunProfileFormElement;
    'forms-page': HTMLFormsPageElement;
    'home-page': HTMLHomePageElement;
    'login-page': HTMLLoginPageElement;
    'not-found-page': HTMLNotFoundPageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
