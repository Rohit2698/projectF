import React,{Component} from 'react';
import './Motivational.css';
class Motivational extends Component{
    constructor(props){
        super(props)
        this.state={
            claps:623,
            likes:300
        }
    }
    incrementClap=()=>{
        this.setState(
            {claps: this.state.claps + 1},
        );
    }
    incrementLike=()=>{
        this.setState(
            {likes: this.state.likes + 1},
        );
    }
    renderClap=(clap)=>{
        return(
            <div>
                <span className="info">{clap} Claps</span>
            </div>
            
        )
        
    }
    renderLike=(like)=>{
        return(
            <div>
                <span className="info">{like} Likes</span>
            </div>
            
        )
        
    }
    render(){
        
        
        return(
            <div className="moti">
                <ul class="motiva">
                    <li>
                        <div>
                            <button className="clap" onClick={this.incrementClap}><span>&#129330;</span></button>
                            <h1>{this.renderClap(this.state.claps)}</h1>
                        </div>
                    </li>
                    <li>
                        <div>
                            <button className="clap" onClick={this.incrementLike}><span> &#128077;</span></button>
                            <h1>{this.renderLike(this.state.likes)}</h1>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Motivational; 