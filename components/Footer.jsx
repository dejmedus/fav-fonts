
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='flex items-center justify-center py-4 text-sm text-gray-400'>
            <p><a className="hover:text-blue-400" href="https://github.com/dejmedus/fav-fonts">source code</a> | {year} | Chingu Pre-work Project</p>
        </footer>
    )
}
