import { Socials } from '@/constants';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

 export default function Navbar() {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  backdrop-blur-md z-50 px-10' >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
            <a href="#about-me" className='w-auto h-[65px] flex flex-row items-center justify-between '>
                <Image
                src={'/Profile3.png'}
                alt='logo'
                width={40}
                height={40}
                className='cursor-pointer '
                />
                <span className='font-bold text-xl ml-[10px]  text-cyan-300'>Fullstack WebDevloper</span>

            </a>
            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="https://contact-form-henna.vercel.app/" className="cursor-pointer">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.herf}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={25}
              height={25}
            />
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};
