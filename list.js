import {html,render} from 'lit-html';

class list extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
          
    }
    static get observedAttributes() { return ['toggle']; }

    attributeChangedCallback(name, oldValue, newValue) {
    
      this.update();
    }
    connectedCallback() {
        this.update();
      }

    update() {
      
        render(this.template(), this.shadowRoot, {eventContext: this});
       
      }


  

    template() {
      console.log("inside list",this.iscompleted);
        return html`
        <style>
        .completed{
          text-decoration: line-through;
        }
        .uncompleted{
          text-decoration:none;
        }
        ul{
         list-style-type: none;
         padding:0px;
         margin:0px;
        }

          span{
            padding:5px;
            font-size:15px;
            
          }
          li{
            padding:15px;
          }
        li:nth-child(even){background-color: #f2f2f2;}
        li:hover {background-color: #ddd;}
        </style>
        <ul> 
    <li>
    <input @change=${this.toggle} id=${this.id} type="checkbox" name="select" ?checked=${this.iscompleted}>
        <span class=${this.iscompleted?'completed':'uncompleted'} >
          ${this.todotask}
        </span>
        </li> 
      </ul>
        `;

     
      }

}
customElements.define('todo-list', list);