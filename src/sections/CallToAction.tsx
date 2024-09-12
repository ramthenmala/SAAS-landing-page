'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowRight from '@/assets/arrow-right.svg';
import StarImage from '@/assets/star.png';
import SprintImage from '@/assets/spring.png';
import Image from 'next/image';

export const CallToAction = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={ctaRef} className="py-24  overflow-x-clip">
      <div className="container">
        <div className='max-w-[540px] mx-auto relative'>
          <div>
            <h2 className="section-title">Sign up for free today</h2>
            <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus, </p>
            <motion.img
              width={360}
              src={StarImage.src}
              alt='Star Image'
              className='absolute -left-[350px] -top-[137px]'
              style={{
                translateY: translateY
              }}
            />

            <motion.img
              width={360}
              src={SprintImage.src}
              alt='Sprint Image'
              className='absolute -right-[331px] -top-[19px]'
              style={{
                translateY: translateY
              }}
            />
          </div>
          <div className="flex justify-center mt-8 gap-8">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span >Learn More</span>
              <ArrowRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
