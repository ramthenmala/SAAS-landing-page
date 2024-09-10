import ArrowRight from '@/assets/arrow-right.svg';
import MenuIcon from '@/assets/menu.svg';
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get started Free</p>
          <ArrowRight className='h-4 w-4 inline-flex justify-center items-center' />
        </div>
      </div>
      <div className='py-5  '>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image
              src={Logo}
              height={40}
              width={40}
              alt='Logo'
            />
            <MenuIcon className='h-5 w-5 md:hidden' />

            <nav className='hidden md:flex text-black/60 gap-6 items-center'>
              <Link href='/'>Home</Link>
              <Link href='/features'>Features</Link>
              <Link href='/customers'>Customers</Link>
              <Link href='/updates'>Updates</Link>
              <Link href='/help'>Help</Link>
              <button className='bg-black text-white px-4 py-2 rounded-full font-medium inline-flex align-items justify-center tracking-tight'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
