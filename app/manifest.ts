import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'One Rupee Game',
        short_name: '1 Rupee',
        description: 'Win Big with Just One Rupee!',
        start_url: '/',
        display: 'standalone',
        background_color: '#FF6B35',
        theme_color: '#FF6B35',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
