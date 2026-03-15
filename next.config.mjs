/** @type {import('next').NextConfig} */
const nextConfig = {
    // 'output: export' removed — static export does not support API routes.
    // Use 'npm run build && npm run start' for production, or deploy to Vercel/a Node host.
    images: {
        unoptimized: true,
        qualities: [75, 100],
    },
    serverExternalPackages: ['nodemailer'], // Prevent Turbopack from bundling nodemailer
};

export default nextConfig;
