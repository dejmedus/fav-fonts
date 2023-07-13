
export default function About() {

    return (
        <main className="flex flex-col min-h-screen p-2 sm:p-6 md:p-18 lg:p-24">
            <h2 className="self-center mb-8">About</h2>
            <div className="self-center w-1/2">
                <p>Find Google Fonts by theme.</p>
                <p>Built with Nextjs, JavaScript, Google Fonts API, and TailwindCSS</p>
                <p>
                    View the <a className="underline hover:text-gray-800" href="https://github.com/dejmedus/fav-fonts">source code</a>
                </p>
                <p>
                    <a className="underline hover:text-gray-800" href="https://www.juliab.dev">Say hi</a>
                </p>
            </div>
        </main>
    )
}
