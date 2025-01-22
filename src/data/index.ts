type NavLink ={
    nameEn: string;
    nameAr: string;
    id:number,
    dropDown?:boolean,
    url?:string,

}

export const header_navlink :NavLink[]= [
{
    id:1,
    nameEn:"Explore Emiraaz",
    nameAr:"اكتشف اميراز",
    dropDown:true,
},
{
    id:2,
    nameEn:"Technology",
    nameAr:"تكنولوجيا",
    url:'/technology'
},
{
    id:3,
    nameEn:"Real Estate",
    nameAr:"العقارات",
    url:'/realestate'

},
{
    id:4,
    url:"/about-founder",
    nameAr:"مؤسس",
    nameEn:"Founder"
},
{
    id:5,
    nameEn:"Media",
    nameAr:"وسائط",
    dropDown:true

},
{
    id:6,
    url:"/contactus",
    nameAr:"اتصال",
    nameEn:"Contact"
}
]


type FooterLink = {
    nameEn: string;
    nameAr: string;
    id: number;
    url?: string;
    link?:string;
}

export const footer_navlink_about: FooterLink[] = [
    {
      id: 1,
      nameEn: 'Story',
      nameAr: 'القصة',
      link: '/',
    },
    {
      id: 2,
      nameEn: 'Leadership',
      link:'/',
      nameAr: 'القيادة',
    },
    {
      id: 3,
      nameEn: 'Inspire',
      link:'/',
      nameAr: 'إلهام',
    },
    {
      id: 4,
      nameEn: 'Culture & Values',
      link:'/',
      nameAr: 'الثقافة والقيم',
    },
    {
      id: 5,
      nameEn: 'Sustainability',
      link:'/',
      nameAr: 'الاستدامة',
    },
    {
      id: 6,
      nameEn: 'Procurement',
      link:'/',
      nameAr: 'المشتريات',
    },
    {
      id: 7,
      nameEn: 'Deep Sea',
      link:'/deepsea',
      nameAr: 'البحر العميق',
    },
  ];

  export const footer_navlink_business: FooterLink[] = [
    {
      link:'/our/partners',
      id: 1,
      nameEn: 'Partners',
      nameAr: 'الشركاء',
    },
    {
      link:'/sponsorship',
      id: 2,
      nameEn: 'Sponsorship',
      nameAr: 'الرعاية',
    },
    {
      link:'/investment',
      id: 3,
      nameEn: 'Investment',
      nameAr: 'الاستثمار',
    },
    {
      link:'/startup',
      id: 4,
      nameEn: 'Startup',
      nameAr: 'الشركات الناشئة',
    },
  ];
  
  export const footer_navlink_our_products: FooterLink[] = [
    {
      id: 1,
      nameEn: 'Explore our Products',
      nameAr: 'استكشف منتجاتنا',
    },
    {
      id: 2,
      nameEn: 'Product 1',
      nameAr: 'المنتج 1',
    },
    {
      id: 3,
      nameEn: 'Product 2',
      nameAr: 'المنتج 2',
    },
    {
      id: 4,
      nameEn: 'Product 4',
      nameAr: 'المنتج 4',
    },
  ];
