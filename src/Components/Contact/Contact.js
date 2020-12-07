import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

            emailjs.sendForm('gmail', 'template_cgk4q2o', e.target, 'user_mxO22RYzrcd7Abrc6BAqv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
      });
      e.target.reset()
    }

    return (
        <div>
            <section>
            <a class="logo navbar-brand text-danger desi" href="/home">Follio</a>
                <div className="container">

                <form onSubmit={sendEmail}>
                    <h1 className="cnt">Contact me</h1>
                    <h6 className="cnt">CONTACT ME, Ready to keep in touch with me for amazing things?.</h6>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" placeholder="Your Message" name="message" id="" cols="30" rows="8"></textarea>
                        </div>

                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"/>
                        </div>
                    </div>
                </form>

                </div>
            </section>
        </div>
    );
};

export default Contact;