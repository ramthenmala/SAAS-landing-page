'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import PyramidImage from '@/assets/pyramid.png';
import ProductImage from '@/assets/product-image.png';
import TubeImage from '@/assets/tube.png';
import { useRef } from 'react';

export const ProductShowcase = () => {

  const productSection = useRef(null)

  const { scrollYProgress } = useScroll({
    target: productSection,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={productSection} className='bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className='section-title mt-5'>A more effective way to fetch progress</h2>
          <p className='section-description mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero tenetur in quo voluptatem laboriosam atque provident.</p>
        </div>
        <div className='relative'>
          <Image
            src={ProductImage}
            alt='Product Showcase'
            className='mt-10'
          />
          <motion.img
            src={PyramidImage.src}
            alt='Pyramid'
            className='hidden md:block absolute -right-36 -top-32'
            height={262}
            width={262}
            style={{
              translateY,
            }}
          />
          <motion.img
            src={TubeImage.src}
            alt='TubeImage'
            className='hidden md:block absolute bottom-24 -left-36'
            height={248}
            width={248}
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
