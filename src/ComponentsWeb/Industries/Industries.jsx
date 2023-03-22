import React, {useEffect} from 'react'
import Group516 from '../../images/Group 516.png';
import Group529 from '../../images/Group 529.png';
import Group523 from '../../images/Group 523.png';
export default function Industries() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
<>
<section style={{height:'100vh'}}>
<div className="container">
        <div className="row">
        {/* <div className="col-md-12">
                <div className="imageContainer" >
                    <img src={Logo} alt="" />
                </div>
            </div>   */}
<div className="col-md-12">
<p  style={{color:'#EC1F26', fontSize:'46px', lineHeight:'40px',  textAlign:'center',fontFamily:'a Atmospheric',marginTop:'3%'}}>industries</p>

</div>
            <div className="col-md-12" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div style={{backgroundColor:'rgba(109, 107, 107, 0.33)',borderRadius:'74px',width:'1721px', height:'355px',boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',   width:'267px', height:'220px'}}>
   <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={Group516} alt="" />
</div>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'6%'}}>legal</p>
 
 </div>
 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',  marginLeft:'5%', width:'267px', height:'220px'}}>
 <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={Group529} alt="" />
</div>

    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'6%'}}>medical   </p>
 
 </div>
 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)',marginLeft:'5%',width:'267px', height:'220px'}}>
 <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>    <img src={Group523} alt="" />
</div>

    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'6%'}}>educational </p>
 
 </div>

    </div> 

    </div> 
              </div>  
                </div>  
</section>

</>  )
}
