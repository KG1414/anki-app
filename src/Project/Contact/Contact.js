import { useState } from 'react';
import onlineWorld from '../../images/online-world.png';
import Footer from '../../common/components/Footer/Footer';
import FormNavBar from '../../common/components/NavBar/NavBar';
import './Contact.css';

const formToken = process.env.REACT_APP_FORM_TOKEN;

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const [altContact, setAltContact] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = event.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        await fetch(`https://getform.io/f/${formToken}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        })
            .then(response => {
                if (response.ok) {
                    details = {
                        name: "",
                        email: "",
                        message: ""
                    }
                    console.log(response);
                    alert("Form successfully submitted.");
                    setStatus("Success!");
                } else {
                    throw new Error("Something went wrong.");
                }
            })
            .catch(error => {
                console.error(error);
                alert("Unsuccessful!");
                setStatus("Unsuccessful");
                setAltContact(true);
            });

        if (status === "Unsuccessful") {
            setStatus("Please contact via LinkedIn");
        };

        setTimeout(() => {
            setStatus("Submit");
        }, 3000);
    };

    return (
        <>
            <FormNavBar />
            <section id="contact-form-section" className="form-section">
                <img className="main-img-form mb-4" src={onlineWorld} alt="connect" width="400"></img>

                <div className="form-signin">
                    <form onSubmit={handleSubmit} autoComplete="chrome-off">

                        <h2 className="contact-header">Contact Me</h2>

                        <div className="form-floating">
                            <input type="text" name="name" className="form-control top" id="floatingInput" autoComplete="off chrome-off" required></input>
                            <label htmlFor="floatingInput">Name</label>
                        </div>

                        <div className="form-floating">
                            <input type="email" name="email" className="form-control middle" id="floatingInput" autoComplete="off chrome-off" required></input>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div>
                            <textarea type="message" name="message" rows="3" className="form-control bottom" placeholder="Message" autoComplete="off chrome-off" required></textarea>
                        </div>

                        <br />

                        <button className="w-100 btn btn-lg btn-primary contact-btn" type="submit">{status}</button>

                        {altContact && <p class="form-error-text">Form Error. Please contact me via LinkedIn instead.
                            <span><a href="https://www.linkedin.com/in/kylegallard/" target="_blank" rel='noreferrer'> here</a></span>.</p>}
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
};

export default ContactForm;
