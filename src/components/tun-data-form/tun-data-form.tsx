import { Component, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'tun-data-form',
  styleUrl: 'tun-data-form.scss'
})
export class TunDataForm {
  @Prop() edit: boolean = false;

  @Event() submitDataForm: EventEmitter;
  @Event() resetDataForm: EventEmitter;

  @State() email: string;
  @State() phoneNumber: string;
  @State() password: string;

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} onReset={this.onReset.bind(this)}>
        <article class='columns is-multiline'>
          <section class='column is-half'>
            <section class='field'>
              <label class='label'>Email</label>
              <p class='control'>
                <input type='email' class='input' name='email'
                  onInput={this.onInput.bind(this)} readOnly={!this.edit} required />
              </p>
            </section>
          </section>
          <section class='column is-half'>
            <section class='field'>
              <label class='label'>Password</label>
              <p class='control'>
                <input type='password' class='input' name='password'
                  onInput={this.onInput.bind(this)} readOnly={!this.edit} required />
              </p>
            </section>
          </section>
          <section class='column is-two-thirds'>
            <section class='field'>
              <label class='label'>Phone Number</label>
              <p class='control'>
                <input type='tel' class='input' name='phoneNumber'
                  onInput={this.onInput.bind(this)}
                  readOnly={!this.edit} pattern='[+0-9]{3}[- ][0-9]{3}[- ][0-9]{3}[- ][0-9]{2}[- ][0-9]{2}' required />
              </p>
            </section>
          </section>
        </article>
        {this.edit ? <button class='button is-info is-outlined' type='submit'>Change</button> : <span></span>}
        {this.edit ? <button class='button is-primary is-outlined' type='reset'>Cancel</button> : <span></span>}
      </form>
    );
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitDataForm.emit({
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password
    });
  }

  onReset() {
    this.resetDataForm.emit();
  }

  onInput({ target }) {
    switch (target.getAttribute('name')) {
      case 'email':
        this.email = target.value;
        break;
      case 'password':
        this.password = target.value;
        break;
      case 'phoneNumber':
        const regex = new RegExp('^[+0-9]{3}[- ][0-9]{3}[- ][0-9]{3}[- ][0-9]{2}[- ][0-9]{2}$');
        if (!regex.test(target.value)) {
          target.classList.add('is-danger');
          target.classList.remove('is-success');
          target.setCustomValidity('Please try either +[code] 999 99 99 or +[code]-999-99-99');
          return;
        } else {
          target.setCustomValidity('');
        }
        this.phoneNumber = (target.value as string).replace(/ /, '-');
        break;

      default:
        console.warn('Name not Found');
        break;
    }

    if (target.checkValidity()) {
      target.classList.remove('is-danger');
      target.classList.add('is-success');
    } else {
      target.classList.add('is-danger');
      target.classList.remove('is-success');
    }

  }
}
