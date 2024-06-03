/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        EMAILJS_ACCOUNT_ID: process.env.EMAILJS_ACCOUNT_ID,
        EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    },
};

export default nextConfig;
