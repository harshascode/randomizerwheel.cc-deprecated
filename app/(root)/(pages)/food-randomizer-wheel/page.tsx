import Script from 'next/script'

const page = () => {
    return (
        <div>
            <div id="app" />
            <Script src="/script/vendor-food-wheel.js"></Script>
            <Script src="/script/index-food-wheel.js"></Script>
        </div>
    )
}

export default page