import { Component, Prop, Event, EventEmitter, State } from '@stencil/core';

function delay(value = [], miliseconds = 3000): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve(value), miliseconds));
}
@Component({
  tag: 'tun-profile-form',
  styleUrl: 'tun-profile-form.scss'
})
export class TunProfileForm {
  @Prop() edit: boolean = false;

  @State() tagList: Array<{ value: string; label: string }> = [];
  @State() selectedTags: string[] = [];
  @State() looksLikeFramework: boolean = false;

  @Event() submitTunProfile: EventEmitter;
  @Event() resetTunProfile: EventEmitter;

  public render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} onReset={this.onReset.bind(this)}>
        <article class='columns is-multiline'>
          <section class='column is-half'>
            <section class='field'>
              <label class='label'>Favorite Languages</label>
              {this.tagList.length > 0 ?
                <div class='select is-multiple'>
                  <select multiple size={4} onChange={this.onFavLangChange.bind(this)} disabled={!this.edit}>
                    {this.tagList.map((tag) => (<option value={tag.value}>{tag.label}</option>))}
                  </select>
                </div> :
                <progress class='progress is-small' max='100'></progress>
              }
            </section>
          </section>
          <section class='column is-half'>
            <section class='field'>
              <label class='label'>Does this look like I'm using some sort of framework?</label>
              <div class='control'>
                <label class='radio'>
                  <input type='radio' name='answer' value='true'
                    onChange={() => this.looksLikeFramework = true} disabled={!this.edit} />
                  Yes
                </label>
                <label class='radio'>
                  <input type='radio' name='answer' value='false'
                    onChange={() => this.looksLikeFramework = false} disabled={!this.edit} />
                  No
                </label>
              </div>
            </section>
          </section>
          {this.edit ? <button class='button is-info is-outlined' type='submit'>Change</button> : <span></span>}
          {this.edit ? <button class='button is-primary is-outlined' type='reset'>Cancel</button> : <span></span>}
        </article>
      </form>
    );
  }

  async componentDidLoad() {
    this.tagList = await delay([
      { value: 'javascript', label: 'Javascript' },
      { value: 'csharp', label: 'C#' },
      { value: 'rust', label: 'Rust' },
      { value: 'go', label: 'Go' },
      { value: 'python', label: 'Python' },
      { value: 'php', label: 'PHP' },
    ]);
    return;
  }

  onFavLangChange({ target }) {
    this.selectedTags = [...target.options]
      .filter(option => option.selected)
      .map(option => option.value);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitTunProfile.emit({
      favoriteLangs: this.selectedTags,
      looksLikeFramework: this.looksLikeFramework,
    });
  }

  onReset() {
    this.resetTunProfile.emit();
  }
}
