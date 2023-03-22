import React,{useEffect} from 'react'; 
import Logo from '../../images/logo.png';
// import '../Home/Home.css';
import p8705i from '../../images/8705i.png';
import { Link } from 'react-router-dom';



import canon from '../../images/Canon_logo_vector.png';
export default function SubProduct2() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className="container p-5" >
           <div className="row">
           {/* <div className="col-md-12">
                   <div className="imageContainer" >
                       <img src={Logo} alt="" />
                   </div>
               </div>      */}
     <div className="col p-2"><Link to='/subProduct3' style={{textDecoration:'none'}}> 
          <div style={{display:'flex', justifyContent:'center',marginTop:'5%'}}>
          <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'1%',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                   <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={p8705i} alt="" style={{marginTop:'21%'}} />
   </div>
   <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
       <img src={canon} alt="" /></div>
   
   
       <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center'}}>imageRUNNER ADVANCE DX 8705i</p>
    
    </div>
          </div>
        
    </Link>  </div>      
<div className="col p-2"> <Link to='/subProduct4' style={{textDecoration:'none'}}>
    <div style={{display:'flex', justifyContent:'center',marginTop:'5%'}}>
    <div style={{backgroundColor:'#fff', borderRadius:'15px', padding:'1%',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                   <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={p8705i} alt="" style={{marginTop:'21%'}} />
   </div>
   <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
       <img src={canon} alt="" /></div>
   
   
       <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center'}}>imageRUNNER ADVANCE DX 8795i</p>
    
    </div></div>
    </Link></div>
   <div className="col p-2"> <Link to='/subProduct6' style={{textDecoration:'none'}}>
    <div style={{display:'flex', justifyContent:'center',marginTop:'5%'}}>
    <div style={{backgroundColor:'#fff', borderRadius:'15px', padding:'1%',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
                   <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={p8705i} alt=""  style={{marginTop:'21%'}}/>
   </div>
   <div className="imageContainer" style={{display:'flex', justifyContent:'center', alignItems:'center'}}> 
       <img src={canon} alt="" /></div>
   
   
       <p style={{color:'#707070', fontSize:'17px',lineHeight:'22px', textAlign:'center'}}>imageRUNNER ADVANCE DX 8786i</p>
    
    </div>    </div>   </Link></div>
   

   
   
                  
                </div>  
               </div>  
   
    </> )
}
