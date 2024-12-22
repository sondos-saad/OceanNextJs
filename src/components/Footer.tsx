import React from 'react'
import Logo from './Logo';
import { Facebook, Github, Instagram, Twitter, Youtube } from 'lucide-react';



const Footer = () => {
    return (
        <footer className='pb-4 pt-20'>
            <div className='container mb-12 flex flex-col lg:flex-row'>
                <div className='basis-1/3 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6'>
                    <Logo/>
                    <p className='text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, doloremque est corrupti omnis quo molestiae adipisci pariatur ea repellat animi neque tempora officia. Consectetur harum dicta perspiciatis sapiente magnam inventore.
                    </p>
                    <ul className='flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8'>
                        <li className='cursor-pointer'>
                            <Facebook className='w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 hover:text-sky-600 hover:-translate-y-1 transition-all'/>
                        </li>
                        <li className='cursor-pointer'>
                            <Instagram className='w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 hover:text-sky-600 hover:-translate-y-1 transition-all'/>
                        </li>
                        <li className='cursor-pointer'>
                            <Twitter className='w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 hover:text-sky-600 hover:-translate-y-1 transition-all'/>
                        </li>
                        <li className='cursor-pointer'>
                            <Github className='w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 hover:text-sky-600 hover:-translate-y-1 transition-all'/>
                        </li>
                        <li className='cursor-pointer'>
                            <Youtube className='w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 hover:text-sky-600 hover:-translate-y-1 transition-all'/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
  };
  
  export default Footer;