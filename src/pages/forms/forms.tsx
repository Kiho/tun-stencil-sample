import { Component, Prop, State, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'forms-page',
  styleUrl: 'forms.scss'
})
export class FormsPage {
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
              onClick={this.onEnableEdit.bind(this)} data-name='data'>Edit Data</span>
          </section>
        </header>
        <main class='card-content'>
          <section>
            <h1>Profile Form</h1>
            <tun-profile-form edit={this.editProfile}></tun-profile-form>
          </section>
          <hr />
          <section>
            <h1>Data Form</h1>
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
  public onSubmitDataForm({ detail: { email, password, phoneNumber }, }: CustomEvent) {
    console.log(email, password, phoneNumber);
  }

  @Listen('resetDataForm')
  public onResetDataForm() {
    this.editData = false;
  }

  @Listen('submitTunProfile')
  public onSubmitTunProfile({ detail }: CustomEvent) {
    console.log(detail);
  }

  @Listen('resetTunProfile')
  public onResetTunProfile() {
    this.editProfile = false;
  }
}
