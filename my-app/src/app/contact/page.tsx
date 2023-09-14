import React from 'react'

const page = () => {
  return (
    <div>
    <div className="frame" style={{
      width: '340px',
      height: '457px',
      backgroundColor: 'var(--primary)',
      borderRadius: '4px',
      overflow: 'hidden',
      marginLeft:"250px",
      marginTop:"250px",
      boxShadow: '0 4px 6px rgba(0, 0, , 0.1) ',

    }}>

      <div className="div" style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '32px',
        top: '40px',
        left: '35px',
        display: 'inline-flex',
        position: 'relative',
      }}>
        <div className="div-2" style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          flex: '0 0 auto',
          display: 'inline-flex',
          position: 'relative',
        }}>
          <div className="div-3" style={{
            alignItems: 'center',
            gap: '16px',
            flex: '0 0 auto',
            display: 'inline-flex',
            position: 'relative',
          }}>
            <img className="img" style={{
              position: 'relative',
              width: '40px',
              height: '40px',
            }} src="https://c.animaapp.com/SOPTQci4/img/icons-phone.svg" alt="Phone Icon" />
            <div className="text-wrapper" style={{
              position: 'relative',
              width: 'fit-content',
              fontFamily: 'var(--title-16px-medium-font-family)',
              fontWeight: 'var(--title-16px-medium-font-weight)',
              color: '#000000',
              fontSize: 'var(--title-16px-medium-font-size)',
              letterSpacing: 'var(--title-16px-medium-letter-spacing)',
              lineHeight: 'var(--title-16px-medium-line-height)',
              whiteSpace: 'nowrap',
              fontStyle: 'var(--title-16px-medium-font-style)',
            }}>Call To Us</div>
          </div>
          <div className="div-4" style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            flex: '0 0 auto',
            display: 'inline-flex',
            position: 'relative',
          }}>
            <p className="p" style={{
              position: 'relative',
              width: '262px',
              marginTop: '-1px',
              fontFamily: 'var(--title-14px-regular-font-family)',
              fontWeight: 'var(--title-14px-regular-font-weight)',
              color: 'var(--text-2)',
              fontSize: 'var(--title-14px-regular-font-size)',
              letterSpacing: 'var(--title-14px-regular-letter-spacing)',
              lineHeight: 'var(--title-14px-regular-line-height)',
              fontStyle: 'var(--title-14px-regular-font-style)',
            }}>We are available 24/7, 7 days a week.</p>
            <div className="text-wrapper-2" style={{
              position: 'relative',
              width: 'fit-content',
              fontFamily: 'var(--title-14px-regular-font-family)',
              fontWeight: 'var(--title-14px-regular-font-weight)',
              color: 'var(--text-2)',
              fontSize: 'var(--title-14px-regular-font-size)',
              letterSpacing: 'var(--title-14px-regular-letter-spacing)',
              lineHeight: 'var(--title-14px-regular-line-height)',
              whiteSpace: 'nowrap',
              fontStyle: 'var(--title-14px-regular-font-style)',
            }}>Phone: +8801611112222</div>
          </div>
        </div>
        <div className="under-line" style={{
          position: 'relative',
          width: '270px',
          height: '1px',
          opacity: '0.5',
          backgroundImage: 'url(https://c.animaapp.com/SOPTQci4/img/line-1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}></div>
        <div className="div-2" style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          flex: '0 0 auto',
          display: 'inline-flex',
          position: 'relative',
        }}>
          <div className="div-3" style={{
            alignItems: 'center',
            gap: '16px',
            flex: '0 0 auto',
            display: 'inline-flex',
            position: 'relative',
          }}>
            <img className="img" style={{
              position: 'relative',
              width: '40px',
              height: '40px',
            }} src="https://c.animaapp.com/SOPTQci4/img/mail-hover.svg" alt="Mail Icon" />
            <div className="text-wrapper" style={{
              position: 'relative',
              width: 'fit-content',
              fontFamily: 'var(--title-16px-medium-font-family)',
              fontWeight: 'var(--title-16px-medium-font-weight)',
              color: '#000000',
              fontSize: 'var(--title-16px-medium-font-size)',
              letterSpacing: 'var(--title-16px-medium-letter-spacing)',
              lineHeight: 'var(--title-16px-medium-line-height)',
              whiteSpace: 'nowrap',
              fontStyle: 'var(--title-16px-medium-font-style)',
            }}>Write To Us</div>
          </div>
          <div className="div-4" style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            flex: '0 0 auto',
            display: 'inline-flex',
            position: 'relative',
          }}>
            <p className="text-wrapper-3" style={{
              position: 'relative',
              width: '250px',
              marginTop: '-1px',
              fontFamily: 'var(--title-14px-regular-font-family)',
              fontWeight: 'var(--title-14px-regular-font-weight)',
              color: 'var(--text-2)',
              fontSize: 'var(--title-14px-regular-font-size)',
              letterSpacing: 'var(--title-14px-regular-letter-spacing)',
              lineHeight: 'var(--title-14px-regular-line-height)',
              fontStyle: 'var(--title-14px-regular-font-style)',
            }}>Fill out our form and we will contact you within 24 hours.</p>
            <div className="text-wrapper-2" style={{
              position: 'relative',
              width: 'fit-content',
              fontFamily: 'var(--title-14px-regular-font-family)',
              fontWeight: 'var(--title-14px-regular-font-weight)',
              color: 'var(--text-2)',
              fontSize: 'var(--title-14px-regular-font-size)',
              letterSpacing: 'var(--title-14px-regular-letter-spacing)',
              lineHeight: 'var(--title-14px-regular-line-height)',
              whiteSpace: 'nowrap',
              fontStyle: 'var(--title-14px-regular-font-style)',
            }}>Emails: customer@exclusive.com</div>
            <div className="text-wrapper-2" style={{
              position: 'relative',
              width: 'fit-content',
              fontFamily: 'var(--title-14px-regular-font-family)',
              fontWeight: 'var(--title-14px-regular-font-weight)',
              color: 'var(--text-2)',
              fontSize: 'var(--title-14px-regular-font-size)',
              letterSpacing: 'var(--title-14px-regular-letter-spacing)',
              lineHeight: 'var(--title-14px-regular-line-height)',
              whiteSpace: 'nowrap',
              fontStyle: 'var(--title-14px-regular-font-style)',
            }}>Emails: support@exclusive.com</div>
          </div>
        </div>
      </div>
    </div>

    <div className="frame" style={{
      width: "800px",
      height: "457px",
      backgroundColor: "var(--primary)",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,
      marginLeft : "900px" ,
      marginTop: "-458px",
      position: "absolute"
    }}>
      <div className="div" style={{
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '32px',
        top: '40px',
        left: '31px',
        display: 'inline-flex',
        position: 'relative',
        
      }}>
        <div className="div-2" style={{
          alignItems: 'flex-start',
          gap: '16px',
          flex: '0 0 auto',
          display: 'inline-flex',
          position: 'relative',
        }}>
         <input
              type="text"
              placeholder="Your Name"
              
              className="text-input"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '16px',
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,

              }}
            />
         <input
              type="text"
              placeholder="Your Email"
              
              className="text-input"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '16px',
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,

              }}
            />
          <input
              type="text"
              placeholder="Your Phone"
             
              className="text-input"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                outline: 'none',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '16px',
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,

              }}
            />
        </div>
        <div className="md-wrapper" style={{
          position: 'relative',
          width: '737px',
          height: '207px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
        }}>
           <textarea
            placeholder="Your Message"
            
            className="textarea"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              outline: 'none',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'none',
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,

            }}
          />
        </div>
        <button  type="button" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '16px 48px',
          position: 'relative',
          flex: '0 0 auto',
          backgroundColor: 'red',
          borderRadius: '4px',
          
          boxSizing: 'border-box',
          color:'white'
        }}>send message
          
        </button>
      </div>
    </div>
    <br />
    <br /><br />
    <br />
    <br />


</div>
  )
}

export default page