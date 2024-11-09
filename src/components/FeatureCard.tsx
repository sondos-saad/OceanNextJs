import { Feature } from '@/types/interfaces'
import React from 'react'

interface FeatureCardProps extends Feature {
    
}

const FeatureCard: React.FC<FeatureCardProps> = ({imageURL, title , content}) => {
  return (
   <article className='w-full md:max-w-[30rem] lg:max-w-[36rem] border-2 border-transparent rounded-lg py-4 px-8 hover:bg-slate-800 hover:border-sky-600 cursor-pointer'>

   </article>
  )
}

export default FeatureCard
