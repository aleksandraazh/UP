let adList = new AdList([
    {
    id: '1',
        description: 'A versatile model for spring and early fall. With a raised silhouette and anatomical last, they provide the ultimate in comfort.',
    createdAt: new Date('2021-01-01T23:00:00'),
    link: 'https://marselshoes.by',
    vendor: 'Marsel',
    photoLink: 'https://drive.google.com/file/d/1c0qDMjCXkfUeIgrG4hlFbw15lJzfiVPf/view?usp=sharing',
    validUntil: new Date('2021-04-21T23:00:00'),
    discount: '10%',
    hashTags: ['shoes', 'fashion', 'beautiful', 'shoesoftheday', 'shoelover', 'marsel', 'woman'],
    rating: 4,
    reviews: [
    {
        name: 'Alexey',
        surname: 'Frolov',
        photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
        textOfReview: 'The quality is good, thanks!',
        evaluationOfProduct: 3
    },
    {
        name: 'Anna',
        surname: 'Belova',
        photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
        textOfReview: 'Very convenient!',
        evaluationOfProduct: 5
    }
]
},
{
    id: '2',
        description: 'The model of autumn boots made of eco-leather is complemented with bright red laces. Visually reduces the foot.',
    createdAt: new Date('2021-02-15T23:00:00'),
    link: 'https://studio27.com.ua',
    vendor: 'Studio 27',
    photoLink: 'https://drive.google.com/file/d/1DdLsCsafPKUABXC_qXey5_hp7_Xw2t0Q/view?usp=sharing',
    validUntil: new Date('2021-03-13T23:00:00'),
    discount: '5%',
    hashTags: ['autumnshoes', 'fashion', 'eco', 'leather', 'shoesoftheday', 'studio27', 'woman'],
    rating: 3,
    reviews: [
    {
        name: 'Alexey',
        surname: 'Frolov',
        photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
        textOfReview: 'The quality is good, thanks!',
        evaluationOfProduct: 2
    },
    {
        name: 'Anna',
        surname: 'Belova',
        photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
        textOfReview: 'Very convenient!',
        evaluationOfProduct: 4
    }
]
},
{
    id: '3',
        description: 'High-quality suede shoes of an unusual color will accentuate any look.',
    createdAt: new Date('2021-01-20T23:00:00'),
    link: 'https://www.instagram.com/modesco.shoes',
    vendor: 'MODESCO',
    photoLink: 'https://drive.google.com/file/d/1ml5fDCIWjxIS5xCFhBJ_jcVQOZoLgadB/view?usp=sharing',
    validUntil: new Date('2021-05-01T23:00:00'),
    discount: '15%',
    hashTags: ['women', 'autumn', 'suede', 'shoesoftheday', 'shoelover', 'grey'],
    rating: 3,
    reviews: [
    {
        name: 'Alexey',
        surname: 'Frolov',
        photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
        textOfReview: 'The quality is good, thanks!',
        evaluationOfProduct: 3
    },
    {
        name: 'Anna',
        surname: 'Belova',
        photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
        textOfReview: 'Very convenient!',
        evaluationOfProduct: 3
    }
    ]
}]);

let page = new AdsPage();
page.root = 'offers';
page.nameUser = 'Maria';
page.adList = adList;
page.showHeader();
page.showAds();
page.showSelectVendor();

