export const examPageObj = {
    "yks": {
        examPageTitle: "YKS",
        examPageDescription: "YKS hakkında detaylar buraya gelecek."
    },
    "ales": {
        examPageTitle: "ALES",
        examPageDescription: "ALES hakkında detaylar buraya gelecek."
    },
    "kpss": {
        examPageTitle: "KPSS",
        examPageDescription: "KPSS hakkında detaylar buraya gelecek."
    },
    "lys": {
        examPageTitle: "LYS",
        examPageDescription: "LYS hakkında detaylar buraya gelecek."
    },
    "toefl": {
        examPageTitle: "TOEFL",
        examPageDescription: "TOEFL hakkında detaylar buraya gelecek."
    },
    "ielts": {
        examPageTitle: "IELTS",
        examPageDescription: "IELTS hakkında detaylar buraya gelecek."
    },
    "cambridge-sinavlari": {
        examPageTitle: "Cambridge Sınavları",
        examPageDescription: "Cambridge Sınavları detaylar buraya gelecek."
    },
    "yds": {
        examPageTitle: "YDS",
        examPageDescription: "TOEFL hakkında detaylar buraya gelecek."
    },
    "diger": {
        examPageTitle: "Diğer",
        examPageDescription: "IELTS hakkında detaylar buraya gelecek."
    }
};

export default function selfPage({ params }) {
    console.log(params);
    const { examdynamic } = params;
    const pathExamContents = examPageObj[examdynamic] || { examPageTitle: "Konu Bulunamadı", examPageDescription: "Bu konu hakkında bilgi bulunamadı." };
    console.log(pathExamContents);
    return (
        <>
            <h1>{pathExamContents.examPageTitle}</h1>
            <p>{pathExamContents.examPageDescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(examPageObj).map(exampagekeys => ({
        examdynamic: exampagekeys
    }));
 }
