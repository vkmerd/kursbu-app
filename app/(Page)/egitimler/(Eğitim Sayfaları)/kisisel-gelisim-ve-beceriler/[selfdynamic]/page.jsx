export const selfImprovement = {
    "zaman-yonetimi": {
        selftitle: "Zaman Yönetimi",
        selfdescription: "Zaman Yönetimi hakkında detaylar buraya gelecek."
    },
    "etkili-iletisim": {
        selftitle: "Etkili İletişim",
        selfdescription: "Etkili İletişim hakkında detaylar buraya gelecek."
    },
    "liderlik-ve-yonetim": {
        selftitle: "Liderlik ve Yönetim",
        selfdescription: "Liderlik ve Yönetim hakkında detaylar buraya gelecek."
    },
    "problem-cozme-becerileri": {
        selftitle: "Problem Çözme Becerileri",
        selfdescription: "Problem Çözme Becerileri hakkında detaylar buraya gelecek."
    }
};

export default function selfPage({ params }) {
    console.log(params);
    const { selfdynamic } = params;
    const pathSelfcontents = selfImprovement[selfdynamic] || { selftitle: "Konu Bulunamadı", selfdescription: "Bu konu hakkında bilgi bulunamadı." };
    console.log(pathSelfcontents);
    return (
        <>
            <h1>{pathSelfcontents.selftitle}</h1>
            <p>{pathSelfcontents.selfdescription}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(selfImprovement).map(selfkeys => ({
        selfdynamic: selfkeys
    }));
 }
