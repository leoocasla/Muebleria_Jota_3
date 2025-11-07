import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "El nombre es obligatorio.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "El formato del email no es válido.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "El mensaje no puede estar vacío.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Datos del formulario (validados):', formData);
      setIsSubmitted(true);
    } else {
      console.log("El formulario tiene errores");
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-container">
        <p className="success-message">¡Gracias por tu mensaje! Te contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <div className="contact-form-container">
      <h3 className="form-title">¿Tienes alguna consulta?</h3>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        
        <input type="text" name="name" placeholder="Tu Nombre" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error-text">{errors.name}</p>}
        
        <input type="email" name="email" placeholder="Tu Email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error-text">{errors.email}</p>}
        
        <textarea name="message" placeholder="Tu Mensaje" rows="5" value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <p className="error-text">{errors.message}</p>}
        
        <button type="submit" className="cta-button">Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default ContactForm;