'use client'
import { useRouter } from "next/navigation";

export default function Pagination({ page, changePage, pageTotal }) {
    const router = useRouter()

    return (<div className="inline-flex items-center justify-center gap-3 mt-8">
        <button
            onClick={() => {
                changePage(page - 1);
                router.push("/#top");
            }}
            className="inline-flex items-center justify-center w-8 h-8 border border-neutral-100 rounded rtl:rotate-180 bg-neutral-50 hover:bg-neutral-200"
            disabled={page == 0}
        >
            <span className="sr-only">Next Page</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>

        <p className="text-lg font-medium">
            {page}
            <span className="mx-0.25">/</span>
            {pageTotal}
        </p>

        <button
            onClick={() => {
                changePage(page + 1)
                router.push("/#top");
            }}
            className="inline-flex items-center justify-center w-8 h-8 border border-neutral-100 rounded rtl:rotate-180 bg-neutral-50 hover:bg-neutral-200"
            disabled={page == pageTotal}
        >
            <span className="sr-only">Next Page</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
    )
}