import React,{useEffect} from 'react';
import ifz from '../../images/ifz.png';
import canon from '../../images/Canon_logo_vector.png';
import dot from '../../images/Group 549.png';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export default function Canon5() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="container ">
        <div className="row">
        {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>  */}
            <div className="col-md-12">
            <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>

              <Link to='/subCanon3' style={{textDecoration:'none'}}>
            
<div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={ifz} alt="" />
</div>
<div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C578ifz</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 50 ppm (BW/color) </p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Scan up to 200 ipm (300 dpi) 
(BW/color, duplex)</p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>2,300-sheet maximum paper capacity</p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color</p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Compact</p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 8-1/2" × 14"</p>

 </div> 
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New</p>

 </div> 
 
 </div>   </Link> </div>
 </div>
            </div>
            </div> 
  </>
  )
}
