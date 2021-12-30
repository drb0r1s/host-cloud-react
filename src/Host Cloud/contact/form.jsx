import React, { useState, useRef } from "react";
import { contactFormData } from "../data";

const Form = () => {
    const defaultObject = { name: "", email: "", subject: "", message: "" };
    
    const [formValues, setFormValues] = useState(defaultObject);

    const [value, setValue] = useState({});

    const [warning, setWarning] = useState("");

    const [modal, setModal] = useState(false);
    
    const { name, email, subject, message } = formValues;

    const modalRef = useRef(null);
    
    function changeInput(event) {
        const inputName = event.target.name;
        const value = event.target.value;

        setFormValues({...formValues, [inputName]: value});
    }

    function submitForm(event) {
        event.preventDefault();
        let flag = false;

        Object.values(formValues).forEach((obj) => {
            if(obj.length === 0) flag = true;
        });

        if(flag) {
            setWarning("Fill all fields correctly!");

            setTimeout(() => {
                setWarning("");
            }, 3000);
        }

        else {
            setValue(formValues);
            setFormValues(defaultObject);
            setModal(true);

            modalRef.current.style.top = "30%";
            modalRef.current.style.opacity = "0";

            setTimeout(() => {
                modalRef.current.style.top = "50%";
                modalRef.current.style.opacity = "1";
            }, 500);
        }
    }

    function cancelModal() {
        modalRef.current.style.top = "30%";
        modalRef.current.style.opacity = "0";

        setTimeout(() => {
            setModal(false);
        }, 500);
    }
    
    return(
        <div className="form">
            {modal && <Modal
                {...value}
                cancelModal={cancelModal}
                setRef={modalRef}
            />}
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {warning && <p className="form-warning">{warning}</p>}

                        <form onSubmit={submitForm}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="your name"
                                maxLength="16"
                                value={name}
                                onChange={changeInput}
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your email"
                                maxLength="32"
                                value={email}
                                onChange={changeInput}
                            />

                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="subject"
                                maxLength="16"
                                value={subject}
                                onChange={changeInput}
                            />

                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="your message"
                                maxLength="100"
                                value={message}
                                onChange={changeInput}
                            ></textarea>

                            <button>send message</button>
                        </form>
                    </div>

                    <div className="col-md-6 form-holder">
                        <p id="subtitle-p">contact us</p>
                        <h2>let's keep in touch</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro recusandae, illum error nam aliquid, fugit minima blanditiis id sit explicabo, similique adipisci corrupti. Iure culpa consectetur eius, aut nemo facilis.</p>
                    
                        <div className="contact-holder">
                            {contactFormData.map((data) => {
                                return(
                                    <div key={data.id} className="data-holder">
                                        <div className="img-holder">
                                            <img src={data.image} alt="" />
                                        </div>

                                        <p>{data.title}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Modal = (props) => {
    const { name, email, subject, message, cancelModal, setRef } = props;
    
    return(
        <div className="form-modal" ref={setRef}>
            <button onClick={cancelModal}>X</button>

            <strong>{name}</strong>
            <p className="email-p">{email}</p>

            <h3>{subject}</h3>
            <p className="message-p">{message}</p>
        </div>
    );
}

export default Form;