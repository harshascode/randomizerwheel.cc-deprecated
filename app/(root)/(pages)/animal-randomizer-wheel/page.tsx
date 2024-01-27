import Script from 'next/script'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Animal randomizer wheel - Random wheel of Animal Names",
    description:
        "The Animal Randomizer Wheel lets you choose your favorite animal from a selection, with a fun twist of randomness.",
};

const page = () => {
    return (
        <div>
            <div id="app" />
            <Script src="/script/vendor-letter1.js"></Script>
            <Script src="/script/index-animal-randomizer-wheel.js"></Script>
        </div>
    )
}

export default page