import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import Image7 from '../../images/Image 7.png';
import Image8 from '../../images/Image 8.png';
import Image9 from '../../images/Image 9.png';
export default function SubCanon3() {
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
<img src={Image7} alt="" style={{width:'100%'}} />

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image8} alt="" style={{width:'100%'}}/>

               </div>
               <div className="imageContainer" style={{padding:'0'}}>
<img src={Image9} alt="" style={{width:'100%'}}/>

               </div>
              
</>   )
}
