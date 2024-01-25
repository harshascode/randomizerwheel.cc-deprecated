import Script from 'next/script'

const page = () => {
    return (
        <div>
            <Script src="/script/index-yes-or-no.js"></Script>
            <Script src="/script/vendor-yes-or-no.js"></Script>
            <div id="app" />
        </div>
    )
}

export default page