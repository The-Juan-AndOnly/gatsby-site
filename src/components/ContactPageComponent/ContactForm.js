import React from 'react'
import { Section, SectionButton, Title } from '../../utils'
import styled from 'styled-components'

const ContactForm = () => {
  return (
    <Section>
      <Title message="Bookings and other questions?" title="Contact Us" />
      <FormWrapper>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          id="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Enter Message"
            />
          </div>
          <SectionButton type="submit">Send</SectionButton>
        </form>
      </FormWrapper>
    </Section>
  )
}

const FormWrapper = styled.div`
  #contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-group {
    margin: 0.5rem 0;
    width: 50%;
    max-width: 768px;
    label {
      display: block;
      margin: 0.5rem 0;
    }
    input,
    textarea {
      width: 100%;
      padding: 0.5rem;
      background-color: #ccc;
      border: none;
      border-radius: 5px;
      height: 40px;
      font-size: 0.9rem;
    }
    textarea {
      min-height: 150px;
    }
  }
`

export default ContactForm
