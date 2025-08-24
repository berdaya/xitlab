'use client';

import { useState } from 'react';
import { addToWaitlist } from '@/app/actions';

interface FormState {
  message: string;
  status: string;
}

const initialState: FormState = {
  message: '',
  status: '',
};

export function WaitlistForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    setIsSubmitting(true);
    setState(initialState); // Clear previous messages
    
    try {
      const result = await addToWaitlist(null, formData);
      setState(result);
    } catch {
      setState({
        message: 'An unexpected error occurred. Please try again later.',
        status: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="waitlist-section">
      <h2>Join the Waitlist</h2>
      <p>Be the first to know about new experiments and get early access.</p>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="waitlist-input"
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="waitlist-button"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>
      {state.message && (
        <p className={`form-message ${state.status}`}>
          {state.message}
        </p>
      )}
    </section>
  );
}