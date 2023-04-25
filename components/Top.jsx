'use client'
import { useRouter } from "next/navigation";
import { UpArrowSVG } from "@/assets/svg/icons";

export default function Top() {
    const router = useRouter();

    return (
        <button onClick={() => router.push("/#top")} className='fixed flex items-center justify-center p-4 rounded-full shadow-sm bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 bottom-8 right-8'>
            <UpArrowSVG />
        </button>
    )
}