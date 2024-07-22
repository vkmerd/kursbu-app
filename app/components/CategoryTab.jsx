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
  

  export   const tabs = [
    { id: 'Tab1', head:"Akademik Destek", label: [
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]
},
    

{ id: 'Tab2', head:"Takviye", label: [
    {
        img:'/ogretmens.jpg',
        title: "Öğretmenler 1",
        desc: "Öğretmenlerimize ulaşmak için tıklayınız"
    },
    {
        img:'/ogretmens.jpg',
        title: "Öğretmenler 2 ",
        desc: "Öğretmenlerimize ulaşmak için tıklayınız"
    },
    {
        img:'/ogretmens.jpg',
        title: "Öğretmenler 3",
        desc: "Öğretmenlerimize ulaşmak için tıklayınız"
    },
    {
        img:'/ogretmens.jpg',
        title: "Öğretmenler 4",
        desc: "Öğretmenlerimize ulaşmak için tıklayınız"
    },
    {
        img:'/ogretmens.jpg',
        title: "Öğretmenler 5",
        desc: "Öğretmenlerimize ulaşmak için tıklayınız"
    },
]
},

    { id: 'Tab3', head:"Sanat ve Yaratıcılık",  label: [
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]},

    { id: 'Tab4', head:"Yabancı Dil", label: [
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]

},
    { id: 'Tab5',head:"Sınav Hazırlık Kursları", label:[
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]
},
    { id: 'Tab6', head:"Spor ve Fiziksel Aktivite", label:[
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]
},
    { id: 'Tab7',  head:"Sağlık ve Psikolojik Destek", label: [
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]
},
    { id: 'Tab8',  head:"Kişisel Gelişim ve Beceriler",  label: [
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]},
    { id: 'Tab9', head:"Kariyer ve Gelecek Planlama", label: [
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 1",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 2 ",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 3",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 4",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
        {
            img:'/ogretmens.jpg',
            title: "Öğretmenler 5",
            desc: "Öğretmenlerimize ulaşmak için tıklayınız"
        },
    ]
},
  ];