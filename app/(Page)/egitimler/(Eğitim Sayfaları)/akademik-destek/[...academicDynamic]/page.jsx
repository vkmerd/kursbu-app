const lessonContent = {
    matematik: {
        title: "Matematik",
        description: "Matematik hakkında detaylar buraya gelecek."
    },
    fizik: {
        title: "Fizik",
        description: "Fizik hakkında detaylar buraya gelecek."
    },
    kimya: {
        title: "Kimya",
        description: "Kimya hakkında detaylar buraya gelecek."
    },
    biyoloji: {
        title: "Biyoloji",
        description: "Biyoloji hakkında detaylar buraya gelecek."
    },
    tarih: {
        title: "Tarih",
        description: "Tarih hakkında detaylar buraya gelecek."
    },
    coğrafya: {
        title: "Coğrafya",
        description: "Coğrafya hakkında detaylar buraya gelecek."
    },
    felsefe: {
        title: "Felsefe",
        description: "Felsefe hakkında detaylar buraya gelecek."
    }
};

export default function AcademicLesson({ params }) {
    const { academicDynamic } = params;
    const lesson = lessonContent[academicDynamic] || { title: "Ders Bulunamadı", description: "Bu ders hakkında bilgi bulunamadı." };

    return (
        <>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
        </>
    );
}

export async function generateStaticParams() {
    return Object.keys(lessonContent).map(key => ({
        academicDynamic: key
    }));
}