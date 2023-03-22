import React, {useEffect} from 'react'; 
import '../Home/Home.css';
import Group516 from '../../images/Group 516.png';
import Group529 from '../../images/Group 529.png';
import Group523 from '../../images/Group 523.png';
import Logo from '../../images/logo.png';

export default function Industries() {
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
<p style={{color:'#EC1F26', fontSize:'21px', lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric' ,marginTop:'3%', marginBottom:'2px'}}>industries</p>

</div>
            <div className="col-md-12 p-4">
<div className="divContainer" >
    <div className="divShadow container p-3" style={{boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
    <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', marginTop:'10%', marginRight:'5%', marginLeft:'5%', width:'267px', height:'220px'}}>
    <img src={Group516} alt=""  style={{marginTop:'7%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'6%'}}>legal</p>
 
 </div>
 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', marginTop:'20%', marginRight:'5%', marginLeft:'5%', width:'267px', height:'220px'}}>
    <img src={Group529} alt=""  style={{marginTop:'7%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'6%'}}>medical   </p>
 
 </div>
 <div  style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)', marginTop:'20%', marginRight:'5%', marginLeft:'5%', marginBottom:'10%', width:'267px', height:'220px'}}>
    <img src={Group523} alt=""  style={{marginTop:'7%'}}/>
    <p style={{color:'#EC1F26', fontSize:'16px',lineHeight:'18px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'6%'}}>educational </p>
 
 </div>

    </div> 
    </div> 
    </div> 
              </div>  
                </div>  
</>
  )
}
