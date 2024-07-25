export const healthPageObj = {
    "psikolojik-danismanlik": {
        healthPageTitle: "Psikolojik Danışmanlık",
        healthPageDescription: "Zaman Yönetimi hakkında detaylar buraya gelecek."
    },
    "saglikli-beslenme": {
        healthPageTitle: "Sağlıklı Beslenme",
        healthPageDescription: "Etkili İletişim hakkında detaylar buraya gelecek."
    },
    "fiziksel-saglik": {
        healthPageTitle: "Fiziksel Sağlık",
        healthPageDescription: "Fiziksel Sağlık hakkında detaylar buraya gelecek."
    }
};

export default function selfPage({ params }) {
    console.log(params);
    const { healthdynamic } = params;
    const pathHealthcontents = healthPageObj[healthdynamic] || { healthPageTitle: "Konu Bulunamadı", healthPageDescription: "Bu konu hakkında bilgi bulunamadı." };
    console.log(pathHealthcontents);
    return (
        <>
            <h1>{pathHealthcontents.healthPageTitle}</h1>
            <p>{pathHealthcontents.healthPageDescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(healthPageObj).map(healthpagekeys => ({
        healthdynamic: healthpagekeys
    }));
}
