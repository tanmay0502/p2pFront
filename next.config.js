/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
    },    
    images: {
        domains: [process.env.URI],
    },
}

module.exports = nextConfig
