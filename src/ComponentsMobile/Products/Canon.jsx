import React, {useEffect} from 'react';
import Logo from '../../images/logo.png';
import '../Home/Home.css';
import i70 from '../../images/70 i.png';
import canon from '../../images/Canon_logo_vector.png';
import dot from '../../images/Group 549.png';
import { Link } from 'react-router-dom';

export default function Canon() {
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
<div className="col-md-12">
    <Link to='/subCanon' style={{textDecoration:'none'}}>
    <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
        <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center', fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5870i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 70 ppm (BW/color) </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Scan up to 270 ipm (300 dpi) 
(BW/color, duplex)
 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div></div>
</Link>
 <Link to='/subCanon' style={{textDecoration:'none'}}>
 <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5860i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 60 ppm (BW/color) </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Scan up to 270 ipm (300 dpi) 
(BW/color, duplex)
 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div> </div></Link>
 <Link to='/subCanon' style={{textDecoration:'none'}}>
 <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5850i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 50 ppm (BW/color) </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Scan up to 270 ipm (300 dpi) 
(BW/color, duplex)

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div></div></Link>
 <Link to='/subCanon' style={{textDecoration:'none'}}>
 <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5840i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 40 ppm (BW/color)
 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Scan up to 270 ipm (300 dpi) 
(BW/color, duplex) </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div></div></Link>
 <Link to='/subCanon' style={{textDecoration:'none'}}>
 <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5835i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 35 ppm (BW/color)
 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>
Scan up to 270 ipm (300 dpi) 
(BW/color, duplex)
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div></div></Link>
 <Link to='/subCanon' style={{textDecoration:'none'}}>
 <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>  
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5830i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 30 ppm (BW/color)
 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>
Scan up to 270 ipm (300 dpi) 
(BW/color, duplex)
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div></div></Link> 
 <Link to='/subCanon' style={{textDecoration:'none'}}>
 <div style={{display:'flex', justifyContent:'center' , marginTop:'5%'}}>
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%', width:'326px', height:'715px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>  
                <div className="imageContainer" style={{padding:'0'}}>    <img src={i70} alt="" />
</div>
<div className="imageContainer" style={{padding:'0'}}> 
    <img src={canon} alt="" /></div>


    <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center',fontFamily:'Segoe UI Regular',marginBottom:'13%'}}>imageRUNNER ADVANCE DX C5825i</p>
    <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 25 ppm (BW/color)
 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>
Scan up to 270 ipm (300 dpi) 
(BW/color, duplex)
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>6,350-sheet maximum paper capacity

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Color

 </p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Mid-volume</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Multifunction</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Print up to 12" × 18"
</p>

 </div>
 <div className="divo" style={{display:'flex', alignItems:'center',paddingBottom:'15px',paddingLeft:'8px'}}>
 <img src={dot} style={{marginRight:'12px'}} alt="" /> <p style={{color:'#707070',fontFamily:'Segoe UI Regular', fontSize:'16px', lineHeight:'15px', textAlign:'left',marginBottom:'0'}}>Merchandise type New
</p>

 </div>
 </div></div></Link> 
</div>

            </div>  
            </div>  
  </>
  )
}
