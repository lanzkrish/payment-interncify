'use client'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/header.module.css'


export default function Header() {



    return (
        <div className={styles.nav}>
            <header className="">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Interncify</span>
                            <Image
                                className="dark:invert"
                                src="/logo-interncify.png"
                                alt="Next.js logo"
                                width={180}
                                height={38}
                                priority
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="https://interncify.com" className="text-sm font-semibold leading-6 text-gray-900">Home <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </nav>


            </header>

        </div>
    )
}
