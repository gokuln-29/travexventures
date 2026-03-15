/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Generates the static /out directory
    images: {
        unoptimized: true, // Required for static export with Next.js Image component
    },
};

export default nextConfig;
