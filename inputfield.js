import {html,render} from 'lit-html';

class input extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
          
    }

    
    connectedCallback() {
        this.update();
      }

    update() {
        render(this.template(), this.shadowRoot, {eventContext: this});
      }

    template() {
        return html`
        <style>
        input[type=text], select {
          width: 100%;
          padding: 12px 20px;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          border: 2px solid black;
          border-radius: 4px;
        }
        </style>
        <input @keyup=${this.changeHandler} type="text" name="inputfield" value="" placeholder="Enter a task">
        `;
      }

    

}
customElements.define('todo-input', input);