
export default function LoadingFonts() {
    return <div className="flex flex-wrap gap-2">
        {[...Array(50).keys()].map(card => {
            return <div
                key={card}
                className="flex-1 p-4 pt-2 border border-neutral-100 bg-neutral-100 rounded shadow-md sm:p-6 sm:pt-4 basis-full sm:basis-5/12 md:basis-3/12 lg:basis-1/5 h-[220px]"
            ></div>
        })}
    </div>
}