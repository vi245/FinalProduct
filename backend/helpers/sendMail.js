const nodemailer =require('nodemailer');
var { EMAIL_FROM,EMAIL_PASSWORD,EMAIL_SERVICE,EMAIL_USERNAME} =require( '../properties');
const sendEmail=(options)=>{
    const transporter=nodemailer.createTransport({
        service:EMAIL_SERVICE,
        auth:{
            user:EMAIL_USERNAME,
            pass:EMAIL_PASSWORD
        }
    })
    const mailDetails={
        from:EMAIL_FROM,
        to:options.to,
        subject:options.subject,
        html:options.text

    }
    transporter.sendMail(mailDetails,function(err,data){
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(data);
        }
    })
}
 module.exports=sendEmail;