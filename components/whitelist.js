import styles from '../styles/Whitelist.module.scss';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mayzwqan");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default function Signup() {
  return (
    <div
      className={styles.signup}
      data-aos='fade-in'
      data-aos-delay='50'
      data-aos-duration='2500'
      id='contact'
    >
      <h5>
        SignUp for <br />
        <span>Whitelist</span>
      </h5>
<ContactForm />
    </div>
  );
}