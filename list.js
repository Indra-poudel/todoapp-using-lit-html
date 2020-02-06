import {html,render} from 'lit-html';

class list extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
          
    }

    static get observedAttributes()
    {
      return['iscompleted'];
    }

    connectedCallback() {
        this.update();
      }

      attributesChangedCallback(name, oldV, newV)
      {
        console.log(name, oldV, newV);
        this.update();
      }
    update() {
        render(this.template(), this.shadowRoot, {eventContext: this});
       
      }


  

    template() {
      console.log("fjadsk");
      console.log(this.todotask);
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
        ${this.tasks.map((item,index) => {
           return html` <todo-list iscompleted=${item.completed} .todotask=${item.title}  .id=${item.id} .toggle=${this.checkboxhandler} ></todo-list>
        `})}
    
      </ul>
        `;

     
      }

}
customElements.define('todo-list', list);