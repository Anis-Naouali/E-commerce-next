import nodemailer from "nodemailer"

export default async function ContactAPI(req:any,res:any){
    const {name,email,phone,message} = req.body
    const user=process.env.user

    const data={
        name,
        email,
        phone,
        message, 
    }
     const transporter=nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: user ,
          pass: process.env.pass,
        },
      }); 
      try{
        const mail=await transporter.sendMail({
            from :user ,
            to:"mohamed930trabelsi930@gmail.com",
            replyTo:email,
            subject:`contact form submission from ${name}`,
            html:`
            <div>
            <p><strong>${name}</strong></p>
            <ul>
            <li>Email:${email}</li>
            <li>Phone Number:${phone}</li>
            </ul>
            <hr/>
            <p>${message}</p>
            </div>
            `,
        })
        console.log("mail sent:", mail.messageId)

        return res.status(200).json({message:"success"})
      }
      catch(error){
        console.log(error)
        res.status(500).json({
            message:"couldn't send email"
        })
      }
    

}