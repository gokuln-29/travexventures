/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export — generates /out folder for traditional hosting (cPanel etc.)
    // NOTE: API routes (/api/contact) do NOT work in static export mode.
    // Remove this line when deploying to Vercel or any Node.js host.
    output: 'export',
    images: {
        unoptimized: true,
        qualities: [75, 100],
    },
    serverExternalPackages: ['nodemailer'], // Prevent Turbopack from bundling nodemailer
};

export default nextConfig;
