import React from "react";
import ReactDOM from "react-dom";

class TodoApp extends React.Component { // Class Component
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ['item1', 'item2', 'item3']
        }
    }

    componentDidMount(){
        console.log("Component oluşturuldu.");
        
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        if(items){
            this.setState({
                items: items
            });
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component güncellendi.");

        if(prevState.items.length !== this.state.items.length){
            const json = JSON.stringify(this.state.items);
            localStorage.setItem('items', json);
            
        }
    }

    componentWillUnmount(){
        console.log("Component silindi");
    }

    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i;
            })
            return {
                items: arr
            }
        })
    }

    clearItems() {
        this.setState({
            items: []
        });
    }

    addItem(item) {

        if(!item){
            return 'Eklemek istediğiniz elamanı giriniz'
        }else if(this.state.items.indexOf(item) > -1){
            return 'Aynı elamanı ekleyemezsiniz.'
        }

        this.setState((prevState) => {
            return {items: prevState.items.concat(item)}
        });
    }

    render() {
        const app = {
            title: "Todo Application",
            description: "Lorem ipsum dolor sit."
        }

        return(
            <div>
                <Header title={app.title} description={app.description} />
                <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems} />
                <Action addItem={this.addItem}/>   
            </div>
        );
    }
}

// class Header extends React.Component { // Class Component
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <div>{this.props.description}</div>
//             </div>
//         );
//     }
// }

const Header = (props) => {  // Stateless Functional Component
    return (
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
        </div>
    );
}

// class TodoList extends React.Component { // Class Component
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         this.props.items.map((item, index) => 
//                             <TodoItem deleteItem={this.props.deleteItem} key={index} item={item} />
//                         )
//                     }
//                 </ul>
//                 <p>
//                 <button onClick={this.props.clearItems}>Clear Items</button>
//                 </p>
//             </div>
//         );
//     }
// }

const TodoList = (props) => { // Stateless Functional Component
    return (
        <div>
            <ul>
                {
                    props.items.map((item, index) => 
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item} />
                    )
                }
            </ul>
            <p>
            <button onClick={props.clearItems}>Clear Items</button>
            </p>
        </div>
    );
}

// class TodoItem extends React.Component { // Class Component

//     constructor(props){
//         super(props);
//         this.deleteItem = this.deleteItem.bind(this);
//     }
    
//     deleteItem(){
//         this.props.deleteItem(this.props.item);
//     }

//     render() {
//         return (
//             <li>
//                 {this.props.item}
//                 <button onClick={this.deleteItem}>x</button>
//             </li>
//         );
//     }
// }

const TodoItem = (props) => { // Stateless Functional Component
    return (
        <li>
            {props.item}
            <button onClick={()=>{props.deleteItem(props.item)}}>x</button>
        </li>
    );
}

class Action extends React.Component { // Class Component
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }

    onFormSubmit(event){
        event.preventDefault();

        const item = event.target.elements.txtItem.value.trim();
        const error = this.props.addItem(item);
        this.setState({
            error: error
        })

        event.target.elements.txtItem.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}

// Stateless Functional Component + React Hook => Class Component (State)

ReactDOM.render(<TodoApp />, document.getElementById('root'));