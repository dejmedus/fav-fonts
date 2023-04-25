'use client'
import { useRouter } from "next/navigation";


export default function Top() {
    const router = useRouter();

    return (
        <button onClick={() => router.push("/#top")} className='fixed flex items-center justify-center p-4 rounded-full shadow-sm bg-gray-50 hover:bg-gray-100 bottom-8 right-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
        </button>
    )
}
