import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoututbe from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] tesxt-sm py-10 text-center">
      <div className="container">
        <div className="text-center flex justify-center mb-10">
          <Image
            alt="saas logo"
            src={logo}
            height={40}
          /></div>

        <nav className="flex justify-center gap-3 flex-col md:flex-row mb-5">
          <Link href='#' className="hover:text-white transition-all delay-100">About</Link>
          <Link href='#' className="hover:text-white transition-all delay-100">Features</Link>
          <Link href='#' className="hover:text-white transition-all delay-100">Customers</Link>
          <Link href='#' className="hover:text-white transition-all delay-100">Pricing</Link>
          <Link href='#' className="hover:text-white transition-all delay-100">Help</Link>
          <Link href='#' className="hover:text-white transition-all delay-100">Contact Us</Link>
        </nav>

        <div className="flex justify-center items-center gap-3 flex-row">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoututbe />
        </div>
        <p className="mt-5">&copy; 2024 Your Company reserved </p>
      </div>
    </footer>
  );
};
