import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'tun-profile-form',
  styleUrl: 'tun-profile-form.scss'
})
export class TunProfileForm {
  @Prop({ reflectToAttr: true }) public edit: boolean = false;
}
