import { Pricing } from '@/types/interfaces';
import { FC } from 'react';

interface PricingCardProps extends Pricing{}

const PricingCards: FC<PricingCardProps> = ({title, description, monthlyPrice, annuallyPrice , features, isMostPopular, glowPosition}) => {
    return(
    <article className={`relative w-full py-6 px-4 flex flex-col space-y-4 lg:space-y-6 ${isMostPopular ? "border-2 border-sky-700 bg-slate-800":"border border-slate-700"} rounded-lg overflow-hidden`}> 
        <figure className={`absolute w-72 h-60 bg-sky-600 -z-10 rounded-full blur-3xl opacity-20 -top-12 ${glowPosition === "left"? "-left-8": "-right-8"}`} />
        <div className='flex justify-between'>
            <h1 className='text-slate-100 font-bold text-base capitalize '>{title}</h1>
            {isMostPopular && <p className='absolute top-5 right-6 bg-sky-600 text-white text-xs font-semibold capitalize py-2 px-3 rounded-3xl'>most popular</p>}
        </div>
    </article>
       
    
)}
export default PricingCards