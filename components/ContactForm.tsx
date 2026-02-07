'use client';
import { useState, FormEvent } from 'react';
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {}
      <div>
        <label htmlFor="name" className="label">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="John Doe"
        />
      </div>
      {}
      <div>
        <label htmlFor="email" className="label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="john@example.com"
        />
      </div>
      {}
      <div>
        <label htmlFor="phone" className="label">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          placeholder="(214) 555-0100"
        />
      </div>
      {}
      <div>
        <label htmlFor="message" className="label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="input-field resize-none"
          placeholder="Tell us about your apartment search or investment needs..."
        />
      </div>
      {}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
          <p className="font-semibold">Thank you for contacting us!</p>
          <p className="text-sm">We'll get back to you within 24 hours.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
          <p className="font-semibold">Error sending message</p>
          <p className="text-sm">{errorMessage || 'Please try again later.'}</p>
        </div>
      )}
      {}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      <p className="text-sm text-neutral-500 text-center">
        By submitting this form, you agree to be contacted about your inquiry.
      </p>
    </form>
  );
}
