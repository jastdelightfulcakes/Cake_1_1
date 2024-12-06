import { useState } from 'react';
import { usePostQusetionMutation } from '../../../services/feedbackApi'


export const ContactFrom = () => {
    const [postQusetion] = usePostQusetionMutation();
    const [success, setSuccess] = useState(false)
    const [server_error, setServerError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission for testing React functionality
        setSuccess(true); // Set success to true
        e.target.submit(); // Proceed with the form's `action` submission
    };
    return (
        <>
            {/* <!-- BEGIN DISCOUNT --> */}
            <div className="wrapper" style={{
                background: "antiquewhite", "minWidth": "100%",
                "maxWidth": "100%", "display": "flex", "flexWrap": "nowrap",
                "flexDirection": "column-reverse", "alignItems": "center",
                "justify-content": "center", "paddingTop": "10%", "paddingBottom": "10%",
            }}>
                    <div className="discount-info">
                        <span className="main-text">leave a message</span>
                        <p>
                            Write to us if you have any questions, we will definitely contact
                            you and find a solution.
                            If you want to place an order, then mention entire order details including date and other requirements.
                            <br></br>
                            (NOTE: Do not forget to mention your phone number.)
                        </p>
                        <form action="https://formsubmit.co/jastdelightfulcakes@gmail.com" method="POST" onSubmit={handleSubmit}>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_next" value="http://localhost:3000/contact"></input>
                            <div className="box-field">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    name='userName'
                                    required
                                />
                                {server_error.name ? (
                                    <lable style={{ fontSize: 16, color: "red", paddingLeft: 10 }}>
                                        {server_error.name[0]} </lable>) : ("")}
                            </div>
                            <div className="box-field">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email" name='email'
                                    required
                                />
                                {server_error.email ? (
                                    <lable style={{ fontSize: 16, color: "red", paddingLeft: 10 }}>
                                        {server_error.email[0]} </lable>) : ("")}
                            </div>
                            <div className="box-field box-field__textarea">
                                <textarea
                                    className="form-control"
                                    placeholder="Enter your message"
                                    name='message'
                                ></textarea>
                                {server_error.message ? (
                                    <lable style={{ fontSize: 16, color: "red", paddingLeft: 10 }}>
                                        {server_error.message[0]} </lable>) : ("")}
                            </div>
                            <button type="submit" className="btn">
                                send
                            </button>
                        </form>
                        <div style={{ marginTop: "1.5rem" }}>
                            {success ? <label style={{ fontSize: 16, color: '#450920' }}> Thank You for your Message We will get back to you soon</label > : ''}
                        </div>

                    </div>
                </div>
            {/* <!-- DISCOUNT EOF   --> */}
        </>
    );
};
