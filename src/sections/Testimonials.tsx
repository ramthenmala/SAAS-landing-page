'use client';

import React from 'react';
import { motion } from 'framer-motion';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];


export const Testimonials = () => {

  const firstTestimonialCol = testimonials.slice(0, 3);
  const secTestimonialCol = testimonials.slice(4, 6);
  const thirdTestimonialCol = testimonials.slice(7, 9);

  const TestimonialColumn = (props: { testimonial: typeof testimonials, className?: string, duration?: number }) => {
    const { testimonial, className, duration } = props;
    return (
      <div className={className}>
        <motion.div
          animate={{
            translateY: '-30%'
          }}
          transition={{
            duration: duration || 10,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}
          className="flex flex-col gap-6"
        >
          {[...new Array(2)].fill(0).map((_, i) => (
            <React.Fragment key={i}>
              {testimonial.map((testimonial, i) => (
                <div className="card" key={i}>
                  <div className="">{testimonial.text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                    />

                    <div className="flex flex-col gap-1">
                      <div className="font-medium tracking-tight leading-5">{testimonial.name}</div>
                      <div className="tracking-tight leading-5 text-gray-500">{testimonial.username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    )
  }

  return (
    <section className="bg-white">
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title">What our users says</h2>
          <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus, </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden" >
          <TestimonialColumn testimonial={firstTestimonialCol} />
          <TestimonialColumn testimonial={secTestimonialCol} className="hidden md:block" duration={19} />
          <TestimonialColumn testimonial={thirdTestimonialCol} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
