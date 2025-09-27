import React from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';


// Import your images
import Charlotte from '../assets/testimonials/Charlotte.jpg';
import Daniel from '../assets/testimonials/Daniel .jpg';
import Amelia from '../assets/testimonials/Amelia.jpg';
import Julian from '../assets/testimonials/Julian.jpg';
import Hannah from '../assets/testimonials/Hannah.jpg';
import Sofia from '../assets/testimonials/Sofia.jpg';


function Testimonials() {
  const testimonials = [
    {
      image: Charlotte, // Replace with actual image import
      country: "United Kingdom",
      role: "Beauty Studio Owner",
      name: "Charlotte Bennett",
      quote: "Aloura Media turned our quiet weekdays into our busiest days. Within 8 weeks, client volume grew by 52%."
    },
    {
      image: Daniel,
      country: "Portugal",
      role: "Barber Shop Founder",
      name: "Daniel Costa",
      quote: "I never believed online ads could work for a small barbershop. Aloura’s campaigns brought in steady new faces every week."
    },
    {
      image: Amelia,
      country: "Australia",
      role: "Spa Manager",
      name: "Amelia Johnson",
      quote: "Our bookings used to fall through the cracks. With Aloura’s booking system and reminders, no-shows dropped dramatically."
    },
    {
      image: Julian,
      country: "Austria",
      role: "Hair Salon Owner",
      name: "Julian Fischer",
      quote: "We struggled to keep clients coming back. Aloura’s loyalty funnels now bring 70% of customers back every month."
    },
    {
      image: Hannah,
      country: "United States",
      role: "Nail Studio Director",
      name: "Hannah Lopez",
      quote: "Instagram is finally working for us. Aloura’s content made us look premium, and we’re booked solid on weekends."
    },
    {
      image: Sofia,
      country: "Italy",
      role: "Hair Stylist",
      name: "Sofia Romano",
      quote: "Aloura Media gave me the confidence to raise my prices. My calendar is packed, and clients appreciate the professional branding."
    }
  ];
 
  return (


    <section className="testimonials-section">
    <h2 className="testimonials-heading">Salon Owners Who Love Aloura Media</h2>
    <p className="scroll-note">Swipe or scroll → to see more testimonials</p>
    <div className="testimonials-scroll">
      {testimonials.map((t, index) => (
        <motion.div
          className="testimonial-card"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          <img src={t.image} alt={t.name} className="testimonial-img" />
          <div className="testimonial-info">
            <h4 className="testimonial-name">{t.name}</h4>
            <p className="testimonial-role">{t.role} — {t.country}</p>
            <p className="testimonial-quote">“{t.quote}”</p>
          </div>
        </motion.div>
      ))}
    </div>
    <span className="scroll-hint">→</span>
    <p className="testimonial-note">
      Testimonials from salon owners across UK, Australia, Italy, Portugal and the USA.
    </p>
  </section>



  );
}

export default Testimonials;
