
// {"category": "sans-serif", "family": "ABeeZee", "files": {"regular": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN6tKukbcHCpE.ttf", "italic": "http://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCklZUCGpG-GQ.ttf"}, "kind": "webfonts#webfont", "lastModified": "2022-09-22", "menu": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tOklQ.ttf", "subsets": ["latin", "latin-ext"], "variants": ["regular", "italic"], "version": "v22"}

export default function Fonts({ fonts, options, stylesheet }) {
    return (<div className="flex flex-wrap gap-2">
        <link rel="stylesheet" href={stylesheet} />
        {fonts !== null ? fonts?.map(font => {
            return <FontCard family={font.family} category={font.category} options={options} />
        }) : null}
    </div>)
}

function FontCard({ family, category, options }) {

    const sampleText = options.sampleText == '' ? 'Spinx of black quartz hear my vow' : options.sampleText;

    return (<div
        key={family}
        className="flex-1 grid justify-between p-4 pt-2 border border-neutral-100 rounded shadow-md sm:p-6 sm:pt-4 basis-full sm:basis-5/12 md:basis-3/12 lg:basis-1/5 h-[220px]"
    >
        <div>
            <a href={`https://fonts.google.com/specimen/${family}`} target="_blank" className="font-semibold hover:underline font-lg marker:file:text-sm">
                {family}
            </a>
            <p className="text-sm italic border-b-1 border-black/80">
                {category}
            </p>
        </div>

        <div className="overflow-hidden">
            <h3 style={{ fontFamily: family + ', ' + category, fontSize: Math.max(Math.min(options.fontSize, 90), 12) }} className='p-1 overflow-scroll whitespace-nowrap'>
                {sampleText}
            </h3>
        </div>
    </div>
    )
}

