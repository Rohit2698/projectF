import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component{

    render(){
        return(
            <div className="containerFooter"> 
                <div style={{width:'auto'}}>
                <center><span>
                    <ul className="header">
                        <li><a href="#" className="fa fa-facebook"></a></li>
                        <li><a href="#" className="fa fa-linkedin"></a></li>
                        <li><a href="#" className="fa fa-twitter"></a></li>
                        <li><a href="#" className="fa fa-instagram"></a></li>
                    </ul>
                </span>
                <span>Copyright 2020 ProjectF</span>
                <span>All Right Reserved</span><br/>
                
                <span>Designed & Developed By Rohit Thakur</span>
                </center>
                </div>
            </div>
        )
    }
}

export default Footer;