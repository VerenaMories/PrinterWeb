import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Image14 from '../../images/Image 14.png';
import Image16 from '../../images/Image 16.png';
import Image15 from '../../images/Image 15.png';

export default function SubCanon8() {
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
               </div>   */}
               
               </div> 
               </div> 
               <div className="imageContainer" style={{paddingTop:'7%'}}>
<img src={Image14} alt="" style={{width:'100%'}} />

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image16} alt="" style={{width:'100%'}}/>

               </div>
               <div className="imageContainer"  style={{padding:'0'}}>
<img src={Image15} alt="" style={{width:'100%'}} />

               </div>
              
              
</>   )
}
