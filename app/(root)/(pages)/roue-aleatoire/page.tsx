import Script from 'next/script'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "roue aleatoire - Roue De La Chance",
    description:
        "Le sélecteur de nom aléatoire est un outil gratuit et facile à utiliser. Il suffit de saisir la liste des noms ou des éléments que vous souhaitez choisir, puis de cliquer sur le bouton Sélectionner. La roue se mettra en rotation et s'arrêtera sur un résultat aléatoire.",
};

const page = () => {
    return (
        <div>
            <div id="app" />
            <Script src="/script/vendor-letter1.js"></Script>
            <Script src="/script/index-roue-aleatoire.js"></Script>
        </div>
    )
}

export default page