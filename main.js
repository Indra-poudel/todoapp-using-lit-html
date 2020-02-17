import{ html, render} from 'lit-html';
import './header';
import  './inputfield';
import './list';

class todoApp extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        this.inputhandler=this.inputhandler.bind(this);
        this.checkboxhandler=this.checkboxhandler.bind(this);
        this.tasks= [
        
          
            {
              id:1,
              title:'Go To Gym',
              completed :false
            },
            {
              id:2,
              title:'Go To Mall',
              completed:false
            },
            {
              id:3,
              title:'Go To Relatives',
              completed:false
            },
            {
              id:4,
              title:'Go To Hospital',
              completed:true
            }
          ]
        
       
    }

    completeToggle(id) {
    
    }

    connectedCallback() {
        this.update();
      }

    update() {
    
        render(this.template(), this.shadowRoot, {eventContext: this});
        
    }



    template() {
      
        return html`
        <todo-header @click=${this.clickHandler}></todo-header>
        <todo-input .changeHandler=${this.inputhandler} ></todo-input>
        ${this.tasks.map((item,index) => {
           return html` <todo-list toggle=${item.completed} .iscompleted=${item.completed} .todotask=${item.title}  .id=${item.id} .toggle=${this.checkboxhandler} ></todo-list>
        `})}
        `;
      }
    clickHandler(e) {
    
    }
    
    checkboxhandler(e)
    {
      
    const completed = !this.tasks[e.target.id-1].completed;
      const item = { ...this.tasks[e.target.id - 1], completed};
    const todos=this.tasks;
    todos[e.target.id-1]=item;
    this.tasks=[...todos];
    this.tasks=[...this.tasks];
      console.log("checkbox",this.tasks[e.target.id-1].completed);
      this.update();
    }

    inputhandler(e)
    { 
      if(e.code=="Enter" && e.target.value !='' )
      {
       
         const newtask= {
            id:this.tasks.length+1,
            title: e.target.value,
            completed:false
          }
        
        this.tasks= [...this.tasks,newtask];

       this.update();
      }
    }
}
customElements.define('todo-app', todoApp);