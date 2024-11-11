import {  FeatureBlocks } from '@/types/interfaces';
import Image from 'next/image';
import {FC} from 'react';
import Heading from '@/components/Heading';


interface FeatureBlockProps extends FeatureBlocks{

}
const FeatureBlock: FC<FeatureBlockProps> = ({title, imageURL, content , isReversed}) => {
    return (
        <article className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${isReversed && "lg:flex-row-reverse"}`}>
            <Image src={imageURL} alt='feature' width={370} height={370} className='basis-5/12 shadow-lg w-full'/>
            <div className='basis-6/12 flex flex-col md:text-center lg:text-start gap-4 '>
                <Heading title={title}/>
                <p className='lg:max-w-[40rem]'>{content}</p>
            </div>
        </article>
    )
}
export default FeatureBlock