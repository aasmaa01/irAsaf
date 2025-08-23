import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex flex-col items-center max-w-6xl mx-auto px-6 py-12 space-y-10 min-h-screen bg-[#FDFDFC] dark:bg-[#0a0a0a] text-[#1b1b18] dark:text-[#EDEDEC]">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-500 dark:text-indigo-400 mb-4 sm:mb-0">
                        Welcome to IRASAF
                    </h1>
                    <div className="flex items-center gap-4">
                        <AppearanceToggleDropdown />
                        <nav className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </div>
                <div className="w-full bg-white/80 dark:bg-gray-900/70 p-8 sm:p-16 rounded-lg">
                    <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center sm:text-left">
                        IRASAF is a family-driven e-commerce brand bringing together unique handmade and curated products.
                        Our mission is to create a platform that showcases the creativity and craftsmanship of artisans
                        while providing customers with exceptional quality and service.
                    </p>
                </div>
            </div>
        </>
    );
}