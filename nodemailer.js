const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
let transporter = nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587 ,
    secure:false ,
    auth:{
        user:'estatesbhalla@gmail.com',
        pass: 'pallu172' 
    }
});
let renderTemplate=(data,relativePath)=>{
    
    let mailHTML ;
    var file=   path.join(__dirname,'/views',relativePath)
    console.log(file);
    ejs.renderFile(
         path.join(__dirname,'/views',relativePath),
        data,
    
        function(err,template){
            if(err){
                return 
            }
          mailHTML=template
        }
    )
    return mailHTML ;
}
module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}