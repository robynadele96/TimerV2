import { Component } from "react";

class InputForm extends Component{

    render() {
        
        return (
        <>
        <form onSubmit ={this.props.handleNewItemOnSubmit}>
            <label>New Task </label>
            <input type ="text" placeholder="Add you next task here" value={this.props.currentItem} onChange= {this.props.handleChange}/>
            <br/>
            <button onClick={this.props.handleNewItemOnSubmit}>Add Item numbers: {this.props.todoItems.length +1}</button>
        </form>
        </>
        )
    }
}

export default InputForm;