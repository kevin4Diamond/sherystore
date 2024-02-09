import React, {useState} from 'react';
import { Form, Button, Container, Row, Jumbotron  } from 'react-bootstrap';
import axios from 'axios'

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  
    // Replace this URL with your API URL
    const apiUrl = 'https://formspree.io/f/meqpyrqa';
  
    try {
      const response = await axios.post(apiUrl, formData);
  
      // You can use the response data if needed
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormSubmitted(false); // Re-enable form if submission fails
    }
  };

  return (
    <>
    <Container id="contact" fluid="md" style={{marginTop:10, backgroundColor:"rgb(216, 216, 216)"}}>
    <div className="section-title">
    <h2 style={{textAlign:'center'}}>Get In Touch</h2>
    <h6 style={{textAlign:'center'}}>
            Please fill out the form below, send us your message, and we will get back to you as soon as apossible.  
            </h6>
      {!formSubmitted ? (
        <Form onSubmit={handleSubmit}>
          <Row>
          <Form.Group className="col-md-6">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name"
            type="text"
            name="name"
            value={formData.name} 
            onChange= {handleChange} />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>Email</Form.Label>
            <Form.Control
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange} required="required"/>
          </Form.Group>
          </Row>
          <Form.Group>
        
           <Form.Label>Message</Form.Label>
           <Form.Control as="textarea" rows="3"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          </Form.Group>
          <Button style={{marginTop:10}} variant="dark" type="submit"  >Submit</Button>
        </Form>
      ) : (
        <p>Thank you, your message was submitted.</p>
      )}
    </div>
    </Container>
    </>
  );
};

export default ContactForm;