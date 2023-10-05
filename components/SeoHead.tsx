'use client'

import Head from "next/head";
import { usePathname } from "next/navigation";
import { favicons, defaultMeta } from './utils/seoAux'

/*interface favicon {
    rel: string,
    sizes: string,
    href: string,
}*/

export const SeoHead = (props: any) => {
    const pathname = usePathname();
    const meta = {
        ...defaultMeta,
        ...props
    };

    // Use siteName if there is templateTitle
    // but show full title if there is none
    meta.title = props.templateTitle
        ? `${props.templateTitle} | ${meta.siteName}`
        : meta.title;

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='robots' content={meta.robots} />
            <meta content={meta.description} name='description' />
            <meta property='og:url' content={`${meta.url}${pathname}`} />
            <link rel='canonical' href={`${meta.url}${pathname}`} />
            {/* Open Graph */}
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content={meta.siteName} />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta name='image' property='og:image' content={meta.image} />
            {/* Twitter */}
            {
                /**<meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:site' content='@xusername' />
                <meta name='twitter:title' content={meta.title} />
                <meta name='twitter:description' content={meta.description} />
                <meta name='twitter:image' content={meta.image} />
                */
            }
            {meta.date && (
                <>
                    <meta property='article:published_time' content={meta.date} />
                    <meta
                        name='publish_date'
                        property='og:publish_date'
                        content={meta.date}
                    />
                    <meta
                        name='author'
                        property='article:author'
                        content={meta.author}
                    />
                </>
            )}
            {/* Favicons */}
            {favicons.map((linkProps: any) => (
                <link key={linkProps.href} {...linkProps} />
            ))}
            {/* Windows 8 app icon */}
            <meta name='msapplication-TileColor' content='#1F2E41' />
            <meta
                name='msapplication-TileImage'
                content='/favicon/ms-icon-144x144.png'
            />
            {/* Accent color on supported browser */}
            <meta name='theme-color' content='#1F2E41' />
        </Head>
    );
};

