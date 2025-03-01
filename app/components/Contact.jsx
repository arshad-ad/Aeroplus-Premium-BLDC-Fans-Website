'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', form);
//     // Add form handling logic here (e.g., API call)
//   };

  return (
    <section className=' text-white py-16 px-4 md:px-10' id='contact'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
        {/* Contact Info */}
        <div>
          <h2 className='text-4xl font-bold mb-6 text-white'>Get in Touch</h2>
          <p className='text-gray-400 mb-6'>We d love to hear from you! Reach out with any inquiries or feedback.</p>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <Phone className='text-blue-400' />
              <span className='text-lg'>+91 90617 21515</span>
            </div>
            <div className='flex items-center gap-3'>
              <Mail className='text-blue-400' />
              <span className='text-lg'>contact@airoplus.com</span>
            </div>
            <div className='flex items-center gap-3'>
              <MapPin className='text-blue-400' />
              <span className='text-lg'>123 AiroPlus Street, City, Country</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='bg-gray-800 p-6 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-semibold mb-4 text-white'>Send us a Message</h3>
          <form  className='space-y-4' action="https://formsubmit.co/muhammedarshadad@gmail.com" method="POST">
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='w-full p-3 rounded-lg bg-gray-700 text-white outline-none'
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='w-full p-3 rounded-lg bg-gray-700 text-white outline-none'
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              rows='4'
              placeholder='Your Message'
              className='w-full p-3 rounded-lg bg-gray-700 text-white outline-none'
              onChange={handleChange}
              required
            ></textarea>
            <button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg text-white font-semibold transition-all'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className='mt-16'>
        <iframe
          className='w-full h-80 rounded-xl shadow-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.8296406725344!2d76.0983240708917!3d11.126062464832577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6376ff819400d%3A0xcff3e2a96ff18c02!2sAEROPLUS%20SERVICES%2C%20BLDC%20Fan%20Sales%20%26%20Service!5e0!3m2!1sen!2sin!4v1740647783304!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </section>
  );
}
