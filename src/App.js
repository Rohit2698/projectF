import React from 'react';
import Header from './Component/Header/Header.js';
import Footer from './Component/Footer/Footer.js';
import Blog from './Component/Blog/Blog.js';
import Motivational from './Component/Motivational/Motivational.js';
const App= props=>{
    return(
     <div>
        <Header/>
        <Blog/>
        <Footer/>
     </div>   
    )
}

export default App;