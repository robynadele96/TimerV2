import { Component } from "react";

class ListItem extends Component {
    render () {
        return (
            <>
                <ol>
                    {this.props.todoItems.map((todoItem) => <li>{todoItem}</li>)}
                </ol>
            </>
        ); 
    };
};

export default ListItem;

