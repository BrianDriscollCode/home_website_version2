import React, { useState, useRef, useEffect } from "react";

const Contact = () => {

    const wrapperRef: any = useRef(null);

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const [inputType, setInputType] = useState("");

    const handleClickOutside = (e:any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
          setInputType("");
        }
    }; 

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, []); 

    return (

        <div id="contact_section">

            <div id="contact_wrapper"> 

                <h2> Contact </h2> 
                <h3> Get In Touch </h3>

                <p> 
                    Always open to hearing about what you need! Say hi, 
                    let's discuss your project, or if you have any questions, let me know!
                </p>

                <p>
                    Fill in your information in the form below, looking forward to hearing from you!
                </p> 

                    <form>
                        <div 
                            className="contact_input_container" 
                            id="name_div"
                            style={{

                                borderColor: inputType === "name" ? 'blue': 'red'

                            }}
                        >
                            <label> Name </label>
                            <input 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                                id="nameInput"
                                onClick={() => setInputType("name")}
                            />
                        </div>

                        <div 
                            className="contact_input_container" 
                            id="email_div"
                            style={{

                                borderColor: inputType === "email" ? 'blue': 'red'

                            }}
                        >
                            <label> Email </label>
                            <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                id="emailInput"
                                onClick={() => setInputType("email")}
                            />
                        </div>

                        <div 
                            className="contact_input_container" 
                            id="message_div"
                            style={{

                                borderColor: inputType === "message" ? 'blue': 'red'

                            }}
                        >
                            <label> Message </label>
                            <textarea 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                id="messageInput"
                                onClick={() => setInputType("message")}
                            >
                            </textarea>
                        </div>

                        <button id="form_submit_button"> Submit </button>
                    </form>

            </div>
            
        </div>

    )


}

export default Contact;