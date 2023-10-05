'use client'

import Script from 'next/script'
import { ScrollAnimationWrapper } from '../misc/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { getScrollAnimation } from '../utils/getScrollAnimation';


type Props = {
    addClass?: string,
    type?: string
}

export const CalendlyWidget: React.FC<Props> = ({ addClass, type }) => {

    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
    const showDetails: number = process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "true" ? 1 : 0;
    const showCookies: number = process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;

    return (
        <>
            {/*<ScrollAnimationWrapper className="relative w-full mt-2 mb-8">
                    <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                    
                    </motion.div>
                </ScrollAnimationWrapper>*/}
            <div className={"calendly-inline-widget w-full h-96 bg-nutricare-100" + addClass} data-url={`https://calendly.com/nutricareweb${type ? `/${type}` : ''}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}></div>
            <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </>
    )
}