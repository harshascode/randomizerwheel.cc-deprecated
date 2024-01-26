import Script from 'next/script'

const page = () => {
    return (
        <div>
            <div id="app" />
            <Script src="/script/vendor-letter1.js"></Script>
            <Script src="/script/index-letter1.js"></Script>
        </div>
    )
}

export default page