'use client'
import React,{useState} from 'react'

function page() {
    
    
    const[count,setCount]=useState<number>(0)
   
 
      
  return (
  
<div style={{width:"0px"}}>
    <div
    className="frame"
    style={{ marginLeft:"150px",marginTop:"150px", position: "relative", width: "170px", height: "138px",backgroundColor: "white",borderRadius: "9px",}}
  >
     <img className="image" style={{width: "150px", height: "140px",}} src="pd.png" />
     <img className="image" style={{width: "150px", height: "140px",}} src="pd.png" />
     <img className="image" style={{width: "150px", height: "140px",}} src="pd.png" />

  </div>
  <div style={{
    position: 'relative',
    width: '500px',
    height: '500px',
    backgroundColor: 'FFFAF9',
    borderRadius: '9px',
    overflow: 'hidden',
    marginLeft:"400px",
    marginTop:"-150px"
  }}>
    <img className="image" src="11.png" style={{
      position: 'absolute',
      width: '446px',
      height: '315px',
      top: '104px',
      left: '27px',
    }} />
  </div> 
 
  <div className="text-wrapper" style={{
    position: 'relative',
    top: "-537px",
    left: "1046px",
    fontFamily: "Open Sans, sans-serif",
    color: 'red',
    fontSize: '40px',
    letterSpacing: 'var(--heading-24px-semibold-letter-spacing)',
    lineHeight: 'var(--heading-24px-semibold-line-height)',
    whiteSpace: 'nowrap',
    fontStyle: 'var(--heading-24px-semibold-font-style)',
    marginLeft:"50px"
  }}>
    Havic HV G-92 Gamepad
  </div>
  <div className="four-star" style={{position:"relative", top:"-530px",marginLeft:"1100px",display: "inline-flex", alignItems: "flex-start", position: "relative" }}>
  <img className="vector" src="star.png" style={{color:"darkorange", position: "relative", width: "14.5px", height: "14.3px" }} />
  <img className="vector" src="img/vector.png" style={{ position: "relative", width: "14.5px", height: "14.3px" }} />
  <img className="vector" src="star.png" style={{ position: "relative", width: "14.5px", height: "14.3px" }} />
  <img className="vector" src="star.png" style={{ position: "relative", width: "14.5px", height: "14.3px" }} />
  <img className="vector" src="star.png" style={{ position: "relative", width: "14.5px", height: "14.3px" }} />
  <img className="vector" src="dstar.png" style={{ position: "relative", width: "14.5px", height: "14.3px" }} />
  <div className="label">
  <div className="text-wrapper" style={{
    position: 'relative',
    top: '-5px',
    left: '13px',
    opacity: '0.5',
    color: 'red',
    fontSize: 'var(--title-14px-regular-font-size)',
    letterSpacing: 'var(--title-14px-regular-letter-spacing)',
    lineHeight: 'var(--title-14px-regular-line-height)',
    whiteSpace: 'nowrap',
    fontStyle: 'var(--title-14px-regular-font-style)'
  }}>(150 Reviews)</div>
</div>
<div className="label">
  <div className="text-wrapper" style={{
    position: 'relative',
    marginTop: '20px',
    marginLeft: '-186px',
    fontFamily: 'var(--heading-24px-regular-font-family)',
    fontWeight: 'var(--heading-24px-regular-font-weight)',
    color: 'var(--text-2)',
    fontSize: '40px',
    letterSpacing: 'var(--heading-24px-regular-letter-spacing)',
    lineHeight: 'var(--heading-24px-regular-line-height)',
    whiteSpace: 'nowrap',
    fontStyle: 'var(--heading-24px-regular-font-style)'
  }}>$192.00</div>
</div>

</div>   
<div className="label" style={{ width: '373px', height: '63px' }}>
  <p className="playstation" style={{ position: 'relative', width: '373px', top: '-524px', left: '1088px', fontFamily: 'var(--title-14px-regular-font-family)', fontWeight: 'var(--title-14px-regular-font-weight)', color: '#000000', fontSize: 'var(--title-14px-regular-font-size)', letterSpacing: 'var(--title-14px-regular-letter-spacing)', lineHeight: 'var(--title-14px-regular-line-height)', fontStyle: 'var(--title-14px-regular-font-style)' }}>
    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
  </p>
</div>
<div className="frame" style={{ marginLeft:"1089px",marginTop:"-501px", borderRadius:"14rem", backgroundColor:"white",display: 'flex', width: '159px', height: '44px', alignItems: 'flex-start', position: 'relative' }}>
  <div className="icon-minus-wrapper" style={{ width: '40px', backgroundColor: 'lightgray', borderRadius: '7px 0px 2px 7px', overflow: 'hidden', border: '1px solid', borderColor: '#00000080', position: 'relative', height: '44px' }}>
  <button onClick={()=>setCount(count-1)}><img className="icon-plus" src="minus.png" style={{ left: '9px', position: 'absolute', width: '24px', height: '24px', top: '10px' }} /></button>  </div>
  <div className="div-wrapper" style={{ width: '80px', marginLeft: '-1px', borderTopWidth: '1px', borderTopStyle: 'solid', borderBottomWidth: '1px', borderBottomStyle: 'solid', borderColor: '#00000080', position: 'relative', height: '44px' }}>
    <div className="text-wrapper" style={{ position: 'absolute', top: '7px', left: '31px', fontFamily: 'var(--title-20px-medium-font-family)', fontWeight: 'var(--title-20px-medium-font-weight)', color: 'black', fontSize: '20px', letterSpacing: 'var(--title-20px-medium-letter-spacing)', lineHeight: 'var(--title-20px-medium-line-height)', whiteSpace: 'nowrap', fontStyle: 'var(--title-20px-medium-font-style)' }}>
      {count}
    </div>
  </div>
  <div className="icon-plus-wrapper" style={{ width: '40px', backgroundColor: 'lightgray', borderRadius: '2px 7px 7px 2px', overflow: 'hidden', border: '1px solid', borderColor: '#00000080', position: 'relative', height: '44px' }}>
    <button onClick={()=>setCount(count+1)}><img className="icon-plus" src="add.png" style={{ left: '7px', position: 'absolute', width: '24px', height: '24px', top: '9px' }} /></button>
  </div>
</div>
<button  type="button" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '16px 48px',
          position: 'relative',
          flex: '0 0 auto',
          backgroundColor: 'green',
          borderRadius: '41px',
          marginLeft:"1094px",
          marginTop:"23px",
          boxSizing: 'border-box',
          color:'white',
          height:"50px"
        }}>buy 
          
        </button>
        <div className="frame" style={{marginTop:"19px" , marginLeft:"1086px",position: 'relative', width: '399px', height: '180px', borderRadius: '4px', overflow: 'hidden', border: '2px solid', borderColor: '#00000080' }}>  
  <div className="div" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', position: 'absolute', top: '24px', left: '16px' }}>
    <img className="img" src="1delivery.png" style={{ position: 'relative', width: '40px', height: '40px' }} />
    <div className="div-2" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', position: 'relative', flex: '0 0 auto' }}>
      <div className="text-wrapper" style={{ position: 'relative', width: 'fit-content', marginTop: '-1px', fontFamily: 'var(--title-16px-medium-font-family)', fontWeight: 'var(--title-16px-medium-font-weight)', color: '#000000', fontSize: 'var(--title-16px-medium-font-size)', letterSpacing: 'var(--title-16px-medium-letter-spacing)', lineHeight: 'var(--title-16px-medium-line-height)', whiteSpace: 'nowrap', fontStyle: 'var(--title-16px-medium-font-style)' }}>
        Free Delivery
      </div>
      <p className="p" style={{ position: 'relative', width: 'fit-content', fontFamily: 'Poppins-Medium, Helvetica', fontWeight: '800', color: '#000000', fontSize: '12px', letterSpacing: '0', lineHeight: '18px', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
        Enter your postal code for Delivery Availability
      </p>
    </div>
  </div>
  <div className="div-3" style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', position: 'absolute', top: '106px', left: '16px' }}>
    <img className="img" src="return.png" style={{ position: 'relative', width: '40px', height: '40px' }} />
    <div className="div-2" style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', position: 'relative', flex: '0 0 auto' }}>
      <div className="text-wrapper" style={{ position: 'relative', width: 'fit-content', fontFamily: 'var(--title-16px-medium-font-family)', fontWeight: 'var(--title-16px-medium-font-weight)', color: '#000000', fontSize: 'var(--title-16px-medium-font-size)', letterSpacing: 'var(--title-16px-medium-letter-spacing)', lineHeight: 'var(--title-16px-medium-line-height)', whiteSpace: 'nowrap', fontStyle: 'var(--title-16px-medium-font-style)' }}>
        Return Delivery
      </div>
      <p className="free-days" style={{ position: 'relative', width: 'fit-content', fontFamily: 'Poppins-Medium, Helvetica', fontWeight: '500', color: '#000000', fontSize: '12px', letterSpacing: '0', lineHeight: '18px', whiteSpace: 'nowrap' }}>
        <span className="span" style={{ fontFamily: 'Poppins-Medium, Helvetica', fontWeight: '800px', color: '#000000', fontSize: '12px', letterSpacing: 'var(--title-12px-medium-letter-spacing)', lineHeight: 'var(--title-12px-medium-line-height)', fontStyle: 'var(--title-12px-medium-font-style)' }}>
          Free 30 Days Delivery Returns.
        </span>
        <span className="text-wrapper-2" style={{ textDecoration: 'underline' }}>
          Details
        </span>
      </p>
    </div>
  </div>
  

  
</div>

 














 <br />


</div>  
    

  )
}

export default page