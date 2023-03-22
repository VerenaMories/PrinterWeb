import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Image4 from '../../images/Image 4.png';
import Image5 from '../../images/Image 5.png';
import Image6 from '../../images/Image 6.png';
export default function SubCanon2() {
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
<img src={Image4} alt="" style={{width:'100%'}} />

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image5} alt="" style={{width:'100%'}}/>

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image6} alt="" style={{width:'100%'}}/>

               </div>
              
</>   )
}
