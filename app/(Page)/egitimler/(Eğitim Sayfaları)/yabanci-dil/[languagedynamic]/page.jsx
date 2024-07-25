export const languagePageObj = {
    "ingilizce": {
        languagePageTitle: "İngilizce",
        languagePageDescription: "İngilizce detaylar buraya gelecek."
    },
    "almanca": {
        languagePageTitle: "Almanca",
        languagePageDescription: "Almanca hakkında detaylar buraya gelecek."
    },
    "fransızca": {
        languagePageTitle: "Fransızca",
        languagePageDescription: "İlkokul hakkında detaylar buraya gelecek."
    },
    "italyanca": {
        languagePageTitle: "İtalyanca",
        languagePageDescription: "İtalyanca hakkında detaylar buraya gelecek."
    },
    "ispanyolca": {
        languagePageTitle: "İspanyolca",
        languagePageDescription: "İspanyolca hakkında detaylar buraya gelecek."
    },

    "cince": {
        languagePageTitle: "Çince",
        languagePageDescription: "Çince detaylar buraya gelecek."
    },
    "japonca": {
        languagePageTitle: "Japonca",
        languagePageDescription: "Japonca hakkında detaylar buraya gelecek."
    },

    "rusca": {
        languagePageTitle: "Rusça",
        languagePageDescription: "Rusça hakkında detaylar buraya gelecek."
    },
    "arapca": {
        languagePageTitle: "Arapça",
        languagePageDescription: "Arapça hakkında detaylar buraya gelecek."
    },
    "portekizce": {
        languagePageTitle: "Portekizce",
        languagePageDescription: "Portekizce hakkında detaylar buraya gelecek."
    },

    "korece": {
        languagePageTitle: "Korece",
        languagePageDescription: "Korece hakkında detaylar buraya gelecek."
    },
    "türkce": {
        languagePageTitle: "Türkçe",
        languagePageDescription: "Arapça hakkında detaylar buraya gelecek."
    },
    "diger-yabanci-diller": {
        languagePageTitle: "Diğer Yabancı Diller",
        languagePageDescription: "Portekizce hakkında detaylar buraya gelecek."
    },
};

export default function LanguagePage({ params }) {
    console.log(params);
    const { languagedynamic } = params;
    const pathLanguageContents = languagePageObj[languagedynamic] || { languagePageTitle: "Konu Bulunamadı", languagePageDescription: "supportPageDescription" };
    console.log(pathLanguageContents);
    return (
        <>
            <h1>{pathLanguageContents.languagePageTitle}</h1>
            <p>{pathLanguageContents.languagePageDescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(languagePageObj).map(languagePageKeys => ({
        languagedynamic: languagePageKeys
    }));
 }
