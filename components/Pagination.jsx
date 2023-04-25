'use client'
import { useRouter } from "next/navigation";
import { LArrowSVG, RArrowSVG } from "@/assets/svg/icons";

export default function Pagination({ page, changePage, pageTotal }) {
    const router = useRouter();

    return (<div className="inline-flex items-center justify-center gap-3 mt-8 ">
        <button
            onClick={() => {
                changePage(page - 1);
                router.push("/#top");
            }}
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded disabled:hidden bg-gray-50 dark:bg-gray-950 dark:border-gray-800 dark:hover:bg-gray-800 rtl:rotate-180 hover:bg-gray-200 "
            disabled={page == 0}
        >
            <span className="sr-only">Next Page</span>
            <RArrowSVG />
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
            className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded rtl:rotate-180 bg-gray-50 hover:bg-gray-200 dark:bg-gray-950 dark:border-gray-800 dark:hover:bg-gray-800 disabled:hidden"
            disabled={page == pageTotal}
        >
            <span className="sr-only">Next Page</span>
            <LArrowSVG />
        </button>
    </div>
    )
}


