import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'login-page',
  styleUrl: 'login.scss'
})
export class LoginPage {
  @Prop() public history: RouterHistory;
  @State() public email: string;
  @State() public password: string;

  public render() {
    return (
      <form class='card login-form' onSubmit={this.onSubmit.bind(this)}>
        <header class='card-header'>
          <p class='card-header-title'>
            So... You found your way here...
          </p>
        </header>
        <section class='card-content'>
          <div class='field'>
            <label htmlFor='email' class='label'>Email</label>
            <div class='control'>
              <input class='input' type='email' value={this.email} id='email' name='email'
                onInput={this.onInputChange.bind(this)} required />
            </div>
          </div>
          <div class='field'>
            <label htmlFor='password' class='label'>Password</label>
            <div class='control'>
              <input class='input' type='password' value={this.password} id='password' name='password'
                onInput={this.onInputChange.bind(this)} required />
            </div>
          </div>
        </section>
        <footer class='card-footer'>
          <button type='submit' class='card-footer-item button'>Login</button>
          <button type='reset' class='card-footer-item button'>Clear</button>
        </footer>
      </form>
    );
  }

  public async onSubmit(e: Event) {
    e.preventDefault();
    let res;
    try {
      res = await fetch('', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        })
      })
        .then((response) => response.json());
    } catch (error) {
      return console.warn({ error });
    }
    const firstPart = res.user.email.split('@').shift();
    this.history.replace(`/profile/${encodeURI(`@${firstPart}`)}`);
  }

  public onInputChange({ target }) {
    switch (target.getAttribute('name')) {
      case 'email':
        this.email = target.value;
        break;
      case 'password':
        this.password = target.value;
        break;

      default:
        console.warn('Name not Found');
        break;
    }

    if (target.validity.typeMismatch) {
      target.classList.add('is-danger');
      target.classList.remove('is-success');
    } else {
      target.classList.remove('is-danger');
      target.classList.add('is-success');
    }

  }
}
