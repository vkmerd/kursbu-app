export const categoryTabReducer = (state, action) => {
    switch(action.type){
      case 'SELECT_TAB':
        return { ...state, selectedTab: action.payload };
      default:
        return state;
    }
  }
  
  export const initialTabState = {
    selectedTab: 'Tab1',
  };
  

  export const tabs = [
    { id: 'Tab1', head:"Akademik Destek", label: [
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]
},
    

{ id: 'Tab2', head:"Takviye", label: [
    {   
        img:'/ayse.jpg',
        title: "Matematik Öğretmeni",
        desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
        name:"Ayşe D.",
        location:"İzmir / Bayraklı",
        comments:"6 yorum",
        price:"600 TL / Saat",
        link:"/egitim-danismanlari/ayse-has"
    },
    {
        img:'/omer.jpg',
        title: "Eğitimci Mühendis",
        desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
        name:"Buğra H.",
        location:"Ankara / Mamak",
        comments:"34 yorum",
        price:"660 TL / Saat",
        link:"/egitim-danismanlari/omer-handan"
    },
    {   
        img:'/ayse.jpg',
        title: "Matematik Öğretmeni",
        desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
        name:"Ayşe D.",
        location:"İzmir / Bayraklı",
        comments:"6 yorum",
        price:"600 TL / Saat",
        link:"/egitim-danismanlari/ayse-has"
    },
    {
        img:'/omer.jpg',
        title: "Eğitimci Mühendis",
        desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
        name:"Buğra H.",
        location:"Ankara / Mamak",
        comments:"34 yorum",
        price:"660 TL / Saat",
        link:"/egitim-danismanlari/omer-handan"
    },
    {   
        img:'/ayse.jpg',
        title: "Matematik Öğretmeni",
        desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
        name:"Ayşe D.",
        location:"İzmir / Bayraklı",
        comments:"6 yorum",
        price:"600 TL / Saat",
        link:"/egitim-danismanlari/ayse-has"
    },
    {
        img:'/omer.jpg',
        title: "Eğitimci Mühendis",
        desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
        name:"Buğra H.",
        location:"Ankara / Mamak",
        comments:"34 yorum",
        price:"660 TL / Saat",
        link:"/egitim-danismanlari/omer-handan"
    },
]
},

    { id: 'Tab3', head:"Sanat ve Yaratıcılık",  label: [
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]},

    { id: 'Tab4', head:"Yabancı Dil", label: [
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]

},
    { id: 'Tab5',head:"Sınav Hazırlık Kursları", label:[
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]
},
    { id: 'Tab6', head:"Spor ve Fiziksel Aktivite", label:[
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]
},
    { id: 'Tab7',  head:"Sağlık ve Psikolojik Destek", label: [
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]
},
    { id: 'Tab8',  head:"Kişisel Gelişim ve Beceriler",  label: [
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]},
    { id: 'Tab9', head:"Kariyer ve Gelecek Planlama", label: [
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
        {   
            img:'/ayse.jpg',
            title: "Matematik Öğretmeni",
            desc: "10 yıldır matematik öğretmeni olarak görev yapmaktayım",
            name:"Ayşe D.",
            location:"İzmir / Bayraklı",
            comments:"6 yorum",
            price:"600 TL / Saat",
            link:"/egitim-danismanlari/ayse-has"
        },
        {
            img:'/omer.jpg',
            title: "Eğitimci Mühendis",
            desc: "Deneyimli eğitimci bir mühendisim, dershane geçmişim ve eği...",
            name:"Buğra H.",
            location:"Ankara / Mamak",
            comments:"34 yorum",
            price:"660 TL / Saat",
            link:"/egitim-danismanlari/omer-handan"
        },
    ]
},
  ];