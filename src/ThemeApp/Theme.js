import { Component } from "react";
import './Theme.scss';

class Theme extends Component {

    state= {
        theme: "white"
    }

    handleSwitchTheme = () => {
        if (this.state.theme === 'white'){
            this.setState({theme : "black"});
            document.querySelectorAll('body')[0].classList.remove("themeapp__button--whitetheme")
            document.querySelectorAll('body')[0].classList.add("themeapp__button--blacktheme")
        }
        else {
            this.setState({theme: "white"});
            document.querySelectorAll('body')[0].classList.remove("themeapp__button--blacktheme")
            document.querySelectorAll('body')[0].classList.add("themeapp__button--whitetheme")
        }
    }

    render () {
        return (
            <>
                <h1>Theme App</h1>
                <button onClick={this.handleSwitchTheme}>Switch Theme</button>
            </>
        );  
    }
}

export default Theme;
