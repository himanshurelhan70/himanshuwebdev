const mongoose = require("mongoose");
const nodemailer = require("../config/nodemailer");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
    }
});


// post middleware
userSchema.post("save", async function(doc) {
    try {
        console.log("DOC", doc)

        // connecting to nodemailer
        const transporter = nodemailer.connect();

        //send mail 
        let mailThem = await transporter.sendMail({
            from: 'himanshurelhan70@gmail.com',
            to: doc.email,
            subject: "Thanks for visiting my portfolio website",
            html: `<h2>Hello ${doc.name} </h2> 
            <p>Your record has been successfully registered with me</p>
            <p>I will contact you as soon as possible</p>
            <br/>
            <br/>
            <p>Thanks and Regards</p>
            <p>Himanshu</p>
            `,
        });

        console.log("INFO of mail sent to user", mailThem);

        let mailMe = await transporter.sendMail({
            from: 'himanshurelhan70@gmail.com',
            to: 'himanshurelhan70@gmail.com',
            subject: "A user filled the contact form",
            html: `
                <p>Name - ${doc.name} </p>
                <p>Email - ${doc.email} </p>
                <p>Phone - ${doc.phone} </p>
                <p>Message - ${doc.message} </p>
            `,
        });

        console.log("INFO of mail to your another mail", mailMe);


    }
    catch (error) {
        console.error(error);
    }
})


module.exports = mongoose.model("User", userSchema);