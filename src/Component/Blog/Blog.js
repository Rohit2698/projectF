import React,{Component} from 'react';
import './Blog.css';
import img1 from '../../image/1.JPG';
import img2 from '../../image/2.JPG';
import img3 from '../../image/3.JPG';
import img4 from '../../image/4.JPG';
import Motivational from '../Motivational/Motivational';
class Blog extends Component{
    constructor(props){
        super(props);
        this.state=(
            {img:[img1,img2,img3,img4]}
        )
    };

    render(){
        const img=this.state.img;
        return(
            <div className="containerBlog">
                <span className="title">Anti-fit and sustainable fashion wear infused with stories, love and creativity</span>
                <span>Author/s: Bhavya and Sobia</span>
                <Motivational/>
                <div className="BlogDescription">
                <div className="image">
                {img.map((img)=>(<img src={img} alt="img1"/>))}
                </div>
                <p>Inspiration for our apparels - A collection for desi Dora, jodhpur. We wanted to design a collection that gave comfort to the wearer demand at any moment. The idea of anti-fit clothing is at its peak as it represents the society that talks about freedom and breaking barrier and also makes the wearer stronger. The silhouettes are mostly relaxed and oversized, designed to keep in mind the overall aesthetic of the brand ( a door to the modern and cultural style of India). We kept the fabrics very light woven and tunics designed with pockets. The leftover fabric scraps were converted into small potlis to make sure that no fabric is wasted.</p>
                <center><iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/XqZsoesa55w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                <p>Our clay jewellery - Two individuals with a passion for creativity -- creativity makes us happy. Started with a dream to embrace things that are made by hand in small quantities. A range of handcrafted clay earrings where each piece is one-of-a-kind and handmade from start to finish and infused with love, energy and handwork into each piece of work. Each earring has a unique story to tell. The bold shapes and colours are used to make you feel even stronger. We aim to keep Indian craftsmanship alive and also help artisans especially women artisans earn their livelihood. The earrings are developed using clay, which makes it lightweight and it doesn’t break.</p>
                </div>
            </div>
        );
    }
}
export default Blog;