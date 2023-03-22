import React, {useEffect} from 'react'
import '../Home/Home.css';
import '../Contact/Contact.css';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<>
<div className="mainContainer ">
    <div className="container">
    <p style={{color:'#EC1F26', fontSize:'21px', lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric',marginTop:'3%', marginBottom:'0px'}}>Contact Us </p>

        <div className="row">
        <div className="col-md-12 ">
<div className="divContainer" style={{marginTop:'10%', marginBottom:'10%',    boxShadow: '1px 2px 2px 2px rgb(0 0 0 / 30%)'}}>
    <div className="divShadow container p-3">
    <p style={{color:'#EC1F26',fontSize:'18px',fontFamily:'a Atmospheric',marginTop:'4%',marginBottom:'0px'}}>Feel Free To Reach Out!
</p>
    <h3 style={{fontFamily:'Segoe UI Regular', fontSize:'24px', textAlign:'center', color:'#707070'}}> Get in touch for support, feedback or just to say hello. We're here to help you succeed.
 </h3>
 <div className='m-4' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
 <div  style={{display:'flex', justifyContent:'center'}}>
                            <div class="item-icon" style={{backgroundColor:'#EC1F26', fontSize:'28px', borderRadius:'50%', color:'#fff', padding:'.5em', width:'65px', height:'65px'}}>
                            <i class="fa-solid fa-location-dot" ></i>                            </div>
                           
                       
</div>
 
 {/* <i class="fa-solid fa-location-dot"></i> */}
    <p style={{color:'#EC1F26', fontSize:'21px',lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'4%',marginBottom:'0px'}}>Address:</p>
    <p style={{color:'#6F6F6F', fontSize:'17px',lineHeight:'20px', textAlign:'center'}}>45870 Torphy Wall Apt. 979</p>
 </div>
 <div className='m-4' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
 <div  style={{display:'flex', justifyContent:'center'}}>
                            <div class="item-icon" style={{backgroundColor:'#EC1F26', fontSize:'28px', borderRadius:'50%', color:'#fff', padding:'.5em', width:'65px', height:'65px'}}>
                            <i class="fa-solid fa-phone-volume"></i>
                         </div>
                           
                       
</div>
    <p style={{color:'#EC1F26', fontSize:'21px',lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'4%',marginBottom:'0px'}}>Give Us A Call</p>
    <p style={{color:'#6F6F6F', fontSize:'17px',lineHeight:'20px', textAlign:'center'}}>Mobile-no: +12093925529</p>
 </div>
 <div className='m-4' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}> 
 <div  style={{display:'flex', justifyContent:'center'}}>
                            <div class="item-icon" style={{backgroundColor:'#EC1F26', fontSize:'28px', borderRadius:'50%', color:'#fff', padding:'.5em', width:'65px', height:'65px'}}>
                            <i class="fa-solid fa-envelope-open-text"></i>

                         </div>
                           
                       
</div>
    <p style={{color:'#EC1F26', fontSize:'21px',lineHeight:'28px', textAlign:'center',fontFamily:'a Atmospheric', paddingTop:'4%',marginBottom:'0px'}}>Email Address: </p>
    <p style={{color:'#6F6F6F', fontSize:'17px',lineHeight:'20px', textAlign:'center'}}> Test@test.com</p>
 </div>

    </div>
   
</div>
            </div>
            <div className="col-md-12 ">
<div className="divContainer" style={{marginTop:'10%', marginBottom:'10%'}}>
    <div className="divShadow container p-3">
    <p style={{color:'#EC1F26',fontSize:'18px',fontFamily:'a Atmospheric'}}>Get in Touch With Us!

</p>
   
 <div className='m-3' style={{backgroundColor:'#fff', borderRadius:'15px', padding:'3%',    boxShadow: '3px 3px 6px 2px rgb(0 0 0 / 30%)'}}>
 <div class="contact-form">
                                {/* <h3 class="title">Get in Touch <span>With Us</span></h3> */}

                                <div class="form-wrapper">
                                    <form id="contact-form" >
                                        <div class="single-form">
                                            <input type="text" name="name" placeholder="Name"/>
                                        </div>
                                       
                                        <div class="single-form">
                                            <input type="email" name="email" placeholder="Email"/>
                                        </div>
                                       
                                        <div class="single-form">
                                            <input type="text" name="subject" placeholder="Subject"/>
                                        </div>
              
                                        <div class="single-form">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <p class="form-message"></p>
                                        <div class="single-form">
                                            <button class="btn btn-danger btn-hover-dark w-100">Send Message </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
 </div>


    </div>
   
</div>
            </div>
        </div>
    </div>
</div>
</>  )
}
