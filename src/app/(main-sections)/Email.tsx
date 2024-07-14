'use client';
import React from 'react';
import { Button } from '../../components/ui/button';
import Spinner from './../../components/ui/Spinner'

const Email = () => {
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState('');

  const create = async (event: React.FormEvent) => {
    event.preventDefault(); 
    setLoading(true);
    const email = input;
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      if (res.status === 200) {
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
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }

    setInput('');
    setLoading(false);
    setError('');
  };

  return (
    <section className='flex py-24 flex-col lg:flex-row  justify-between container gap-4'>
      <h2 className='uppercase mb-14 lg:mb-0 shrink-0'>
        Stay up <br />
        to date
      </h2>
      <div className='p-10 rounded-2xl max-w-3xl bg-black/10 shadow-2xl backdrop-blur-xl'>
        <form onSubmit={create} className='flex flex-col gap-8'>
          <h3 className='max-w-2/3 leading-tight'>
            Be the first to know about the next Superteam Germany events.
          </h3>
          <div>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className='outline-2 outline-offset-2 focus:outline-secondary bg-white/5 rounded-lg p-2 block w-full mb-2'
              type='text'
              name='email'
              placeholder='Email'
            />
            <span>{error}</span>
          </div>
          <Button type='submit' disabled={loading}  className='ml-auto'>
            {loading ? <Spinner /> : 'Subscribe'}
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Email;
