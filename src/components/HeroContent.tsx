'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { GiSparkles } from 'react-icons/gi'

export default function HeroContent() {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex items-center justify-center m-auto px-20 mt-40 w-full z-[20]'
    >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <GiSparkles className='text-[#b49bff] mr-[10px] w-5 h-5'/>
                <h1 className='Welcome-text text-[15px]'>FullStack Devloper Protfolio</h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            ><span>
                 Providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
                > the best </span>
                  project exprience
                </span>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-500 my-5 max-w-[600px]'
            >
                I&apos;m a Full Stack Webdevloper with Exprience in Website Devlopment,
                Check Out my Project and Skills. 
            </motion.p>

            <motion.a
            variants={slideInFromRight(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-md max-w-[200px] '
            >
            Learn more!
            </motion.a>
        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className='w-full h-full flex items-center justify-center'
        >
            <Image 
            src={'/mainIconsdark.svg'}
            alt='work icon'
            height={650}
            width={650}
            />
        </motion.div>
    </motion.div>
  )
}
