'use client'

import Script from 'next/script'
import { ScrollAnimationWrapper } from '../misc/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { getScrollAnimation } from '../utils/getScrollAnimation';
import Head from 'next/head';


type Props = {
    addClass?: string,
    type?: string
}

export const CalendlyWidget: React.FC<Props> = ({ addClass, type }) => {

    const username: string = "nutricareweb"
    const showDetails: number = 1
    const showCookies: number = 0

    return (
        <>
            <Head>
                <script src="https://assets.calendly.com/assets/external/widget.js"></script>
            </Head>
            <div
                className={"calendly-inline-widget w-full h-96 bg-nutricare-100" + addClass}
                data-url={`https://calendly.com/${username}${type ? `/${type}` : ''}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}
            >
            </div>
            <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
        </>
    )
}