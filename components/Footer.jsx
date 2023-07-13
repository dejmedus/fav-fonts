
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='flex items-center justify-center py-4 text-sm text-gray-400'>
            <p><a className="hover:text-blue-400" href="https://github.com/dejmedus/fav-fonts">View Source Code</a> | <a className="hover:text-blue-400" href="https://www.juliab.dev">Julia B</a></p>
        </footer>
    )
}
