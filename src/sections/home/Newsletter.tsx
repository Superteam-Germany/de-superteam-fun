'use client';
import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInDiv from '@/components/fade-in-div';
import axios from 'axios';
import { Button } from '../../components/button';
import Spinner from '../../components/spinner';

const Newsletter = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState('');

  const create = async (event: React.FormEvent) => {
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
    <div className='relative overflow-hidden'>
      <motion.div
        style={{ y, x, backgroundSize: 'cover' }}
        className="bg-[url('/images/backgrounds/line-wave-3-primary.svg')] w-full absolute opacity-20 xl:opacity-100 h-[80vh] bg-no-repeat bg-right-bottom -z-50 bg-fixed "></motion.div>
      <section className='container  w-full  min-h-96 py-24  z-10 justify-center sm:flex-row sm:justify-between items-center'>
        <FadeInDiv>
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-secondary/70 backdrop-blur-md via-secondary/50 to-background/30 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight  sm:text-5xl">
            There is a lot happening, but no worries, we will keep you updated.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
            Subscribe to our newsletter to get notified about upcoming events and community perks.
          </p>
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
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
};

export default Newsletter;
