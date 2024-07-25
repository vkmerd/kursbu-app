export const sportsPageObj = {
    "futbol": {
        sportPageTitle: "Futbol",
        sportPageDescription: "Futbol hakkında detaylar buraya gelecek."
    },
    "basketbol": {
        sportPageTitle: "Basketbol",
        sportPageDescription: "Basketbol hakkında detaylar buraya gelecek."
    },
    "tenis": {
        sportPageTitle: "Tenis",
        sportPageDescription: "Tenis hakkında detaylar buraya gelecek."
    },
    "yuzme": {
        sportPageTitle: "Yüzme",
        sportPageDescription: "Yüzme hakkında detaylar buraya gelecek."
    },
    "pilates": {
        sportPageTitle: "Pilates",
        sportPageDescription: "Pilates hakkında detaylar buraya gelecek."
    },
    "boks": {
        sportPageTitle: "Boks",
        sportPageDescription: "Boks hakkında detaylar buraya gelecek."
    },
    "karate": {
        sportPageTitle: "Karate",
        sportPageDescription: "Karate detaylar buraya gelecek."
    },
    "judo": {
        sportPageTitle: "Judo",
        sportPageDescription: "Judo hakkında detaylar buraya gelecek."
    },
    "taekwondo": {
        sportPageTitle: "Taekwondo",
        sportPageDescription: "Taekwondo hakkında detaylar buraya gelecek."
    },
    "muay-thai": {
        sportPageTitle: "Muay Thai",
        sportPageDescription: "Muay Thai  detaylar buraya gelecek."
    },
    "kick-boks": {
        sportPageTitle: "Kick Boks",
        sportPageDescription: "Kick Boks hakkında detaylar buraya gelecek."
    }
};

export default function selfPage({ params }) {
    console.log(params);
    const { sportsdynamic } = params;
    const pathSportsContents = sportsPageObj[sportsdynamic] || { sportPageTitle: "Konu Bulunamadı", sportPageDescription: "Bu konu hakkında bilgi bulunamadı." };
    console.log(pathSportsContents);
    return (
        <>
            <h1>{pathSportsContents.sportPageTitle}</h1>
            <p>{pathSportsContents.sportPageDescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(sportsPageObj).map(sportsPageKeys => ({
        sportsdynamic: sportsPageKeys
    }));
 }
