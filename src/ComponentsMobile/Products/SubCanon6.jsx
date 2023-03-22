import React, {useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Image10 from '../../images/Image 10.png';
import Image11 from '../../images/Image 11.png';
export default function SubCanon6() {
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
<img src={Image10} alt="" style={{width:'100%'}} />

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image11} alt="" style={{width:'100%'}}/>

               </div>
              
              
</>   )
}
