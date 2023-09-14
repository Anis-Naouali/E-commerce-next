"use client";
export default function ContactForm() {
    async function handleSubmit(event:any){
        event.preventDefault()
    
        const data={
          name:String(event.target.name.value),
          email:String(event.target.email.value),
          phone:Number(event.target.phone.value),
          message:String(event.target.message.value),
    
        }
        console.log(data)
        const response= await fetch('/contact',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
            })
            if (response.ok){
                alert('Thank you for your message')
                }
            if(!response.ok){
                    alert("error sending message")
                }
             
      }
  return (
    <div >
        <div className=" ml-72 m-12 bg-red-500 max-w-[300px] rounded-xl hover:bg-red-500 hover:scale-110 duration-700 p-5">
  <figure className="w-10 h-10 p-2 bg-white rounded-md">
    
  </figure>
  <h4 className="py-2 text-white font-bold">Jesus Echeverria</h4>
  <p className="text-base leading-7 text-white font-semibold space-y-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <p className=" text-sm leading-7 text-slate-300 space-y-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?</p>
  <div className="pt-5 pb-2 flex justify-center">
    <button className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Button</button>
  </div>
</div>

        



    <form onSubmit={handleSubmit} className="frame" style={{
      width: "800px",
      height: "457px",
      backgroundColor: "var(--primary)",
      borderRadius: "4px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" ,
      marginLeft : "900px" ,
      marginTop: "-464px",
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
         <input id="name" type="text"placeholder="Your Name"required minLength={5} maxLength={100} className="text-input"
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
         <input id="email" type="email" placeholder="Your Email" required  minLength={5} maxLength={150} className="text-input"
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
          <input id="phone" type="text" placeholder="Your Phone" className="text-input"
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
           <textarea id="message"placeholder="Your Message" required className="textarea"
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
        <button  type="submit" style={{
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
    </form>
    <br />
    
    </div>
  )
}
