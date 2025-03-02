import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Message sent successfully' }),
  })
);

// Helper function to fill out the form
const fillOutForm = () => {
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'john.doe@example.com' },
  });
  fireEvent.change(screen.getByLabelText(/subject/i), {
    target: { value: 'Test Subject' },
  });
  fireEvent.change(screen.getByLabelText(/message/i), {
    target: { value: 'This is a test message.' },
  });
};

// Test suite for ContactForm
describe('ContactForm', () => {
  it('renders the form fields correctly', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('validates the form fields', async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/send message/i));
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/valid email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/subject is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/please enter a message/i)).toBeInTheDocument();
  });

  it('submits the form successfully', async () => {
    render(<ContactForm />);
    fillOutForm();
    fireEvent.click(screen.getByText(/send message/i));
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument();
    expect(await screen.findByText(/your message has been sent successfully/i)).toBeInTheDocument();
  });

  it('displays an error message on submission failure', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Error sending message' }),
      })
    );
    render(<ContactForm />);
    fillOutForm();
    fireEvent.click(screen.getByText(/send message/i));
    expect(await screen.findByText(/there was a problem submitting your message/i)).toBeInTheDocument();
  });
});
