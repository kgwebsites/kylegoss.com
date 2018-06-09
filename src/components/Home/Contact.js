import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.section`
    padding: 4rem 0;
`;

const Text = styled.input`
    display: block;
    width: 20rem;
    max-width: 100%;
    margin: auto;
    padding: .5rem;
    margin-bottom: .5rem;
    border: 0;
    border-bottom: 1px solid #ccc;
`;

const Textarea = styled.textarea`
    display: block;
    width: 20rem;
    max-width: 100%;
    margin: auto;
    padding: .5rem;
    margin-bottom: .5rem;
    border: 0;
    border-bottom: 1px solid #ccc;
`;

const Submit = styled.button`
    display: block;
    width: 21rem;
    max-width: 100%;
    margin: auto;
    margin-bottom: .5rem;
    padding: .5rem;
    background-color: white;
    border: 1px solid #27ae5f;
    color: #27ae5f;
    transition: all .25s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #27ae5f;
        color: white;
    }
`;

const Success = styled.div`
    text-align: center;
    color: #27ae5f;
`;

const Error = styled.div`
    text-align: center;
    color: firebrick;
`;

class Contact extends Component {
    state = {
        text: '',
        email: '',
        errors: [],
        success: false,
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <Form>
                <h2 className="text-center">Send me a message!</h2>
                {!this.state.success &&
                    <form id="contact-form" name="Contact Form" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <Text
                            name="email"
                            placeholder="Email Address"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            required
                        />
                        <Textarea name="message" placeholder="Message" value={this.state.text} onChange={this.handleTextChange} required />
                        <Submit type="submit">Submit</Submit>
                    </form>
                }
                {this.state.success &&
                    <Success>Your message was sent!</Success>
                }
                {this.state.errors.length > 0 &&
                    this.state.errors.map((error, index) => <Error key={index} className="danger">{error}</Error>) // eslint-disable-line react/no-array-index-key
                }
            </Form>
        );
    }
}

export default Contact;
