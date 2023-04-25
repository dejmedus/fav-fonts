
// {"category": "sans-serif", "family": "ABeeZee", "files": {"regular": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN6tKukbcHCpE.ttf", "italic": "http://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCklZUCGpG-GQ.ttf"}, "kind": "webfonts#webfont", "lastModified": "2022-09-22", "menu": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tOklQ.ttf", "subsets": ["latin", "latin-ext"], "variants": ["regular", "italic"], "version": "v22"}

export default function Fonts({ fonts, options, stylesheet }) {
    return (<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        <link rel="stylesheet" href={stylesheet} />
        {fonts !== null ? fonts?.map(font => {
            return <FontCard key={font.family} family={font.family} category={font.category} options={options} />
        }) : null}
    </div>)
}

function FontCard({ family, category, options }) {

    const sampleText = options.sampleText == '' ? 'Spinx of black quartz hear my vow' : options.sampleText;

    return (<div
        key={family}
        className="grid justify-between flex-1 p-4 pt-2 border border-gray-100 rounded shadow-md dark:border-gray-900 sm:p-6 sm:pt-4 min-h-[240px]"
    >
        <div>
            <a href={`https://fonts.google.com/specimen/${family}`} target="_blank" className="font-semibold hover:underline font-lg marker:file:text-sm">
                {family}
            </a>
            <p className="text-sm italic dark:text-white/60 text-black/60">
                {category}
            </p>
        </div>

        <div className="overflow-scroll">
            <h3 style={{ fontFamily: family + ', ' + category, fontSize: Math.max(Math.min(options.fontSize, 90), 12) }} className='p-1'>
                {sampleText}
            </h3>
        </div>
    </div>
    )
}

