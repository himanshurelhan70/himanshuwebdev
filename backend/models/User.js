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
    purpose: {
        type: String,
    },
    message: {
        type: String,
        required: true
    }
});


// post middleware
userSchema.post("save", async function(doc) {
    try {
        console.log("DOC", doc)

        // connecting to nodemailer
        const transporter = nodemailer.connect();

        //send mail 
        let info = await transporter.sendMail({
            from: `himanshurelhan70@gmail.com`,
            to: doc.email,
            subject: "Thanks for visiting my portfolio website",
            html: `<h2>Hello ${doc.name} </h2> 
            <p>Your record has been successfully registered with me</p>
            <p>I will contact you as soon as possible</p>
            `,
        });

        console.log("INFO of mail", info);


    }
    catch (error) {
        console.error(error);
    }
})


module.exports = mongoose.model("User", userSchema);