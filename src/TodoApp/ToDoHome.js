import { Component } from "react";
import InputForm from "./InputForm";
import ListItem from "./ListItem";

class TodoAppHome extends Component {

    state = {
        currentItem: "",
        todoItems: [],
    }
    
    handleChange = (event) => {
        console.log("input field event: ", event);
        this.setState({currentItem: event.target.value});
    }

    handleNewItemOnSubmit = (event) => {
        event.preventDefault();
        this.setState({todoItems : this.state.todoItems.concat(this.state.currentItem)});
        this.setState({currentItem: ""});
    }

    render() {
        return (
        <>
            <h1>ToDo List App</h1>
            {/* Input form for the todo list App */} 
            <InputForm currentItem={this.state.currentItem} handleChange={this.handleChange} handleNewItemOnSubmit={this.handleNewItemOnSubmit} todoItems={this.state.todoItems}/>

            {/* List view of the todo list items */}
            <ListItem todoItems = {this.state.todoItems}/>
        </>)
    }
}

export default TodoAppHome;
