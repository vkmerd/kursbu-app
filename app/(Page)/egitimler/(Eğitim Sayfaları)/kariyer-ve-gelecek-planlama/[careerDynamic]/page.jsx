export const topicContent = {
    "universite-ve-bolum-secimi": {
        carreertitle: "Üniversite ve Bölüm Seçimi",
        carreerdescription: "Üniversite ve bölüm seçimi hakkında detaylar buraya gelecek."
    },
    "kariyer-danismanligi": {
        carreertitle: "Kariyer Danışmanlığı",
        carreerdescription: "Kariyer danışmanlığı hakkında detaylar buraya gelecek."
    },
    "staj-ve-is-basvurusu-rehberligi": {
        carreertitle: "Staj ve İş Başvurusu Rehberliği",
        carreerdescription: "Staj ve iş başvurusu rehberliği hakkında detaylar buraya gelecek."
    },
    "cv-hazirlama-ve-mulakat-teknikleri": {
        carreertitle: "CV Hazırlama ve Mülakat Teknikleri",
        carreerdescription: "CV hazırlama ve mülakat teknikleri hakkında detaylar buraya gelecek."
    }
};

export default function TopicPage({ params }) {
    console.log(params);
    const { careerDynamic } = params;
    const pathTopiccontents = topicContent[careerDynamic] || { carreertitle: "Konu Bulunamadı", carreerdescription: "Bu konu hakkında bilgi bulunamadı." };
    console.log(pathTopiccontents);
    return (
        <>
            <h1>{pathTopiccontents.carreertitle}</h1>
            <p>{pathTopiccontents.carreerdescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(topicContent).map(topickeys => ({
        careerDynamic: topickeys
    }));
 }
