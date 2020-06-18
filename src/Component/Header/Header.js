import React,{Component} from 'react';
import './Header.css';

class Header extends Component{

    render(){
        return(
            <div className="main">
            <div className="container">
                <div className="links">
                <ul>
                <li><a href="http://projectf.in/blogs">Diaries</a></li>
                <li>|</li>
                <li><a href="http://projectf.in/">Project F</a></li>
                </ul>
                </div>
            </div>
            </div>
        )
    }
}

export default Header;