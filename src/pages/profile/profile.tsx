import { Component, Prop, State, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile.scss'
})
export class ProfilePage {
  @Prop() public match: MatchResults;

  @State() public editData: boolean = false;
  @State() public editProfile: boolean = false;

  public render() {
    return (
      <article class='profile-page card'>
        <header class='card-header'>
          <section class='buttons has-addons'>
            <span class='button is-outlined'
              onClick={this.onEnableEdit.bind(this)} data-name='profile'>Edit Profile</span>
            <span class='button is-outlined'
              onClick={this.onEnableEdit.bind(this)} data-name='data'>Edit Personal Data</span>
          </section>
        </header>
        <main class='card-content'>
          <section class=''>
            <tun-profile-form edit={this.editData}></tun-profile-form>
          </section>
          <section>
            <tun-data-form edit={this.editData}></tun-data-form>
          </section>
        </main>
      </article>
    );
  }

  public onEnableEdit({ target }) {
    switch (target.getAttribute('data-name')) {
      case 'profile':
        target.classList.toggle('is-selected');
        target.classList.toggle('is-info');
        this.editProfile = !this.editProfile;
        break;
      case 'data':
        target.classList.toggle('is-selected');
        target.classList.toggle('is-info');
        this.editData = !this.editData;
        break;
    }
  }

  @Listen('submitDataForm')
  public onDataForm({ detail: { email, password, phoneNumber }, }: CustomEvent) {
    console.log(email, password, phoneNumber);
  }

  @Listen('submitProfileForm')
  public onProfileForm({ detail }: CustomEvent) {
    console.log(detail);
  }
}
