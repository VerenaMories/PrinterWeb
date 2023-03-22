import React,{useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import p8705i from '../../images/8705i.png';
import { Link } from 'react-router-dom';
import canon from '../../images/Canon_logo_vector.png';
import dot from '../../images/Group 549.png';
 
export default function SubProduct6() {
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
               </div>      */}
               <div className="col-md-12"><div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}> 
          <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                   <div className="imageContainer" style={{padding:'0'}}>    <img src={p8705i} alt="" />
   </div>
   <div className="imageContainer" style={{padding:'0'}}> 
       <img src={canon} alt="" /></div>
   
   
       <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX 8786i</p>
        
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 86 ppm (BW/color) </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Scan up to 270/270 ipm (300 dpi) 
(BW/color, duplex) </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>8,020-sheet maximum paper capacity </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Black-and-White
 </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>High-volume </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 13" × 19" </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
 </p>

 </div> 
    </div>
    </div>
  
   
   
                   </div>    
                </div>  
               </div> 
</>   )
}
