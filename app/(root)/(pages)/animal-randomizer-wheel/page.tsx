import Script from 'next/script'

const page = () => {
    return (
        <div>
            <Script src="/script/vendor-animal-randomizer-wheel.js"></Script>
            <Script src="/script/index-animal-randomizer-wheel.js"></Script>
            <div id="app" />
        </div>
    )
}

export default page