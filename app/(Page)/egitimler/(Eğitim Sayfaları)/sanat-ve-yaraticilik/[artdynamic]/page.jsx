export const artPageObj = {
    "muzik": {
        artPageTitle: "Müzik",
        artPageDescription: "Müzik hakkında detaylar buraya gelecek."
    },
    "gitar": {
        artPageTitle: "Gitar",
        artPageDescription: "Gitar hakkında detaylar buraya gelecek."
    },
    "piyano": {
        artPageTitle: "Piyano",
        artPageDescription: "Piyano hakkında detaylar buraya gelecek."
    },
    "keman": {
        artPageTitle: "Keman",
        artPageDescription: "Keman hakkında detaylar buraya gelecek."
    },
    "baglama": {
        artPageTitle: "Bağlama",
        artPageDescription: "Bağlama hakkında detaylar buraya gelecek."
    },
    "resim": {
        artPageTitle: "Resim",
        artPageDescription: "Resim hakkında detaylar buraya gelecek."
    },
    "tiyatro": {
        artPageTitle: "Tiyatro",
        artPageDescription: "Tiyatro hakkında detaylar buraya gelecek."
    }
};

export default function selfPage({ params }) {
    console.log(params);
    const { artdynamic } = params;
    const pathArtContents = artPageObj[artdynamic] || { artPageTitle: "Konu Bulunamadı", artPageDescription: "Bu konu hakkında bilgi bulunamadı." };
    console.log(pathArtContents);
    return (
        <>
            <h1>{pathArtContents.artPageTitle}</h1>
            <p>{pathArtContents.artPageDescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(artPageObj).map(arthpagekeys => ({
        artdynamic: arthpagekeys
    }));
 }
