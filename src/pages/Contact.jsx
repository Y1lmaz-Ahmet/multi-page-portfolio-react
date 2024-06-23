import { useRef } from "react";
import "../components/styles/Contact.css"; // Importeer de CSS-stijlen voor het formulier
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PK_ID,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.user_name.value = "";
    form.current.user_email.value = "";
    form.current.message.value = "";
  };

  return (
    <div className='contact-form-container'>
      <h1>Contacteer mij</h1>
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <div className='form-group'>
          <label>Naam</label>
          <input type='text' name='user_name' />
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input type='email' name='user_email' />
        </div>

        <div className='form-group'>
          <label>Bericht</label>
          <textarea name='message' />
        </div>

        <button type='submit' className='submit-button'>
          Verstuur
        </button>
      </form>
    </div>
  );
};

export default Contact;
