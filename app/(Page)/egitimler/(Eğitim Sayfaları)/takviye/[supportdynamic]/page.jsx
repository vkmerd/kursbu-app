export const supportsPageObj = {
    "okul-oncesi": {
        supportPageTitle: "Okul Öncesi",
        supportPageDescription: "Okul Öncesi detaylar buraya gelecek."
    },
    "okuma-yazma": {
        supportPageTitle: "Okuma Yazma",
        supportPageDescription: "Okuma Yazma hakkında detaylar buraya gelecek."
    },
    "ilkokul": {
        supportPageTitle: "İlkokul",
        supportPageDescription: "İlkokul hakkında detaylar buraya gelecek."
    },
    "lise": {
        supportPageTitle: "Lise",
        supportPageDescription: "Lise hakkında detaylar buraya gelecek."
    },
    "universite": {
        supportPageTitle: "Üniversite",
        supportPageDescription: "Üniversite hakkında detaylar buraya gelecek."
    },
};

export default function supportPage({ params }) {
    console.log(params);
    const { supportdynamic } = params;
    const pathSupportsContents = supportsPageObj[supportdynamic] || { supportPageTitle: "Konu Bulunamadı", supportPageDescription: "supportPageDescription" };
    console.log(pathSupportsContents);
    return (
        <>
            <h1>{pathSupportsContents.supportPageTitle}</h1>
            <p>{pathSupportsContents.supportPageDescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(supportsPageObj).map(supportsPageKeys => ({
        supportdynamic: supportsPageKeys
    }));
 }
