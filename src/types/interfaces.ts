
export interface Client{
    imageURL: string,
    alt: string,
}

export interface Feature{
    imageURL: string,
    title: string,
    content: string
}

export interface FeatureBlocks extends Feature{
    isReversed?:boolean
}

export interface Pricing {
    title : string,
    description: string,
    monthlyPrice: number,
    annuallyPrice: number,
    features: string[],
    isMostPopular?: boolean,
    glowPosition?: 'right' | 'left'
}

export interface Testimonial{
    imageUrl : string;
    name: string;
    role: string;
    review: string;
}

export type PricingMode = 'monthly' | 'annually';