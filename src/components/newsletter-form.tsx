'use client';
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { Button } from '@/components/button';
import Spinner from '@/components/spinner';

// newsletter form
export default function NewsletterForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const create = async (event: FormEvent) => {
    event.preventDefault(); 
    setLoading(true);
    const email = input;

    try {
      const res = await axios.post('/api/newsletter', { email });

      if (res.status === 201) {
        setError('Thank you for subscribing!');
        setLoading(false);
        setInput('');
        return;
      }

      if (res.status === 400) {
        setError('Please enter a valid email address.');
        setLoading(false);
        setInput('');
        return;
      }
    } catch (error: any) {
      if (error.response && error.response.status === 422) {
        setError('The email must be a valid email address.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }

    setInput('');
    setLoading(false);
    setError('');
  };

  return (
    <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={create}>
        <label htmlFor="email-address" className="sr-only">
            Email address
        </label>
        <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            autoComplete="email"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6"
        />
        <Button type='submit' disabled={loading} className='ml-auto'>
            {loading ? <Spinner /> : 'Subscribe'}
        </Button>
    </form>
  )
}
