/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_CALENDLY_USERNAME: 'nutricareweb',
        NEXT_PUBLIC_CALENDLY_SHOW_DETAILS: 'true',
        NEXT_PUBLIC_CALENDLY_SHOW_COOKIES: 'true',
    },
}

module.exports = nextConfig
