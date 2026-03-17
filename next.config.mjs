/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export — generates /out folder for traditional hosting (cPanel etc.)
    // NOTE: API routes (/api/contact) do NOT work in static export mode.
    // Remove this line when deploying to Vercel or any Node.js host.
    output: 'export',
    images: {
        unoptimized: true, // Required for static export
        qualities: [75, 85, 90, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'travexventures.vercel.app',
            },
            {
                protocol: 'https',
                hostname: '**.travexventures.com',
            },
        ],
    },
    serverExternalPackages: ['nodemailer'], // Prevent Turbopack from bundling nodemailer
};

export default nextConfig;
