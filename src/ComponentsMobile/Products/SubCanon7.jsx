import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Image13 from '../../images/Image 13.png';
import Image12 from '../../images/Image 12.png';
export default function SubCanon7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<div className="container">
           <div className="row">
           {/* <div className="col-md-12">
                   <div className="imageContainer" >
                       <img src={Logo} alt="" />
                   </div>
               </div>  
                */}
               </div> 
               </div> 
               <div className="imageContainer" style={{paddingTop:'7%'}}>
<img src={Image13} alt="" style={{width:'100%'}} />

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image12} alt="" style={{width:'100%'}}/>

               </div>
              
              
</>   )
}
