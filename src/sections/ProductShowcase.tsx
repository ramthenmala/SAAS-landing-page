import Image from 'next/image';
import PyramidImage from '@/assets/pyramid.png';
import ProductImage from '@/assets/product-image.png';
import TubeImage from '@/assets/tube.png';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24 overflow-x-clip'>
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
          <Image
            src={PyramidImage}
            alt='Pyramid'
            className='hidden md:block absolute -right-36 -top-32'
            height={262}
            width={262}
          />
          <Image
            src={TubeImage}
            alt='TubeImage'
            className='hidden md:block absolute bottom-24 -left-36'
            height={248}
          />
        </div>
      </div>
    </section>
  );
};
