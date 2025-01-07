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
}

export const footer_navlink_about: FooterLink[] = [
    {
      id: 1,
      nameEn: 'Story',
      nameAr: 'القصة',
    },
    {
      id: 2,
      nameEn: 'Leadership',
      nameAr: 'القيادة',
    },
    {
      id: 3,
      nameEn: 'Inspire',
      nameAr: 'إلهام',
    },
    {
      id: 4,
      nameEn: 'Culture & Values',
      nameAr: 'الثقافة والقيم',
    },
    {
      id: 5,
      nameEn: 'Sustainability',
      nameAr: 'الاستدامة',
    },
    {
      id: 6,
      nameEn: 'Procurement',
      nameAr: 'المشتريات',
    },
    {
      id: 7,
      nameEn: 'Deep Sea',
      nameAr: 'البحر العميق',
    },
  ];

  export const footer_navlink_business: FooterLink[] = [
    {
      id: 1,
      nameEn: 'Partners',
      nameAr: 'الشركاء',
    },
    {
      id: 2,
      nameEn: 'Sponsorship',
      nameAr: 'الرعاية',
    },
    {
      id: 3,
      nameEn: 'Investment',
      nameAr: 'الاستثمار',
    },
    {
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
