import {html,render} from 'lit-html';

class header extends HTMLElement{

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
        p{
            text-align:center;
            color:white;
            background-color:black;
            font-size:25px;
            font-family: Arial, Helvetica, sans-serif;
            margin:0px;
            padding:25px;
        }
        </style>
        <div>
        <p>
        Todo-App using lit-html
        </p>

        </div>
        `;

     
      }

}
customElements.define('todo-header', header);