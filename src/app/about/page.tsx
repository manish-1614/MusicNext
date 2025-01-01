'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page with footer section hash
        router.push('/#footer');
    }, []);

    // Optional loading state while redirect happens
    return (
        <div className="w-full h-full mt-40 flex items-center justify-center">
            <h1>Redirecting...</h1>
        </div>
    );
}