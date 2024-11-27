import { Pricing } from "@/types/interfaces";

export const pricingItems:Pricing[] = [
    {
        title: 'freelance',
        description: 'The essentials to provide your best work for your clients.',
        monthlyPrice: 15,
        annuallyPrice: 144,
        features:[
            '5 products',
            'Up to 1,000 subscribers',
            'Basic analytics',
            '48-hour support response time'
        ],
        glowPosition: 'right'
    },
    {
        title: 'Startup',
        description: 'The essentials to provide your best work for your clients.',
        monthlyPrice: 30,
        annuallyPrice: 288,
        features:[
            '25 products',
            'Up to 10,000 subscribers',
            'Advanced analytics',
            '24-hour support response time',
            'Marketing automations'
        ],
        isMostPopular:true
    },
    {
        title: 'enterprise',
        description: 'The essentials to provide your best work for your clients.',
        monthlyPrice: 48,
        annuallyPrice: 576,
        features:[
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            '48-hour support response time',
            'Custom reporting tools',
            'Marketing automations'
        ],
        glowPosition: 'left'
    },
]