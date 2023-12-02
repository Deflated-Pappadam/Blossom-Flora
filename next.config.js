/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"images.pexels.com" ,
            }
        ],
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'firebasestorage.googleapis.com',   
            }
        ]
    }
}

module.exports = nextConfig
