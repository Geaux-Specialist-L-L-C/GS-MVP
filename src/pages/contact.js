import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
  return (
    <Layout title="Contact Us" description="Get in touch with Geaux Specialist LLC">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please fill out the form below and we will get back to you as soon as possible.</p>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
