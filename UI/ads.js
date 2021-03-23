(function (){
    let adList = [
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
        },
        {
            id: '4',
            description: 'Chelsea boots are perfect for any autumn look, the boots stretch well on the shins.',
            createdAt: new Date('2021-02-20T23:00:00'),
            link: 'https://kari.com',
            vendor: 'Kari',
            photoLink: 'https://drive.google.com/file/d/1y0i-DU1sJGNy-4GQFkGl-XGOFDzRc2ud/view?usp=sharing',
            validUntil: new Date('2021-04-10T23:00:00'),
            discount: '20%',
            hashTags: ['shoes', 'mexx', 'beauty', 'chelsea-shoes', 'chelsea', 'genuine'],
            rating: 5,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 5
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
            id: '5',
            description: 'A feminine and sophisticated pair of genuine leather ankle boots that will add style to any outfit.',
            createdAt: new Date('2021-03-02T23:00:00'),
            link: 'https://respect-shoes.ru',
            vendor: 'Respect',
            photoLink: 'https://drive.google.com/file/d/1UfSmBS-Qq_f65jyxyEeYedsiAcvz1Gk4/view?usp=sharing',
            validUntil: new Date('2021-05-31T23:00:00'),
            discount: '10%',
            hashTags: ['shoes', 'ankle', 'ankleboots', 'shoesoftheday', 'brulloff', 'woman'],
            rating: 3,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 3
                }
            ]
        },
        {
            id: '6',
            description: 'Unusual design with front zip and interesting details. Natural fur will make any winter warm.',
            createdAt: new Date('2021-01-01T23:00:00'),
            link: 'https://ecco.ru',
            vendor: 'ECCO',
            photoLink: 'https://drive.google.com/file/d/12ILOLLBaTWUaRQZNKs9jBbkVTJDQdja-/view?usp=sharing',
            validUntil: new Date('2021-03-25T23:00:00'),
            discount: '12%',
            hashTags: ['newcollection', 'orderno', 'shoestyle', 'forwoman', 'berg', 'sail']
        },
        {
            id: '7',
            description: 'High tractor outsole and leather belt look stylish. Faux leather inserts are created for a variety of shoe models.',
            createdAt: new Date('2021-03-01T23:00:00'),
            link: 'https://marselshoes.by',
            vendor: 'Marsel',
            photoLink: 'https://drive.google.com/file/d/1LU39YLcL9T0BrSTDVQC_m2MA2I84Z_z1/view?usp=sharing',
            validUntil: new Date('2021-05-10T23:00:00'),
            discount: '5%',
            hashTags: ['onlineshopping', 'newshoes', 'autumn', 'winter', 'marsel'],
            rating: 3.7,
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
                    evaluationOfProduct: 4
                },
                {
                    name: 'Maksim',
                    surname: 'Dubrov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'Cool shoes',
                    evaluationOfProduct: 4
                }
            ]
        },
        {
            id: '8',
            description: 'The all-brown, gradient-fitting model is a good choice for winter.',
            createdAt: new Date('2021-02-10T23:00:00'),
            link: 'https://ecco.ru',
            vendor: 'ECCO',
            photoLink: 'https://drive.google.com/file/d/1R8Y6SDnKGYxS9BBJE1Wwpx0-21sFlyJX/view?usp=sharing',
            validUntil: new Date('2021-04-04T23:00:00'),
            discount: '15%',
            hashTags: ['women', 'brown', 'winter', 'berg', 'onlineshopping', 'shoes', 'ordernow'],
            rating: 5,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 5
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
            id: '9',
            description: 'Lightweight casual sneakers with genuine and suede leather inserts. Provides comfort in movement.',
            createdAt: new Date('2021-01-25T23:00:00'),
            link: 'https://www.asics.com',
            vendor: 'ASICS',
            photoLink: 'https://drive.google.com/file/d/1Ld65KCJT5h2XxiDRJbAUjord5qy9rT8n/view?usp=sharing',
            validUntil: new Date('2021-03-20T23:00:00'),
            discount: '30%',
            hashTags: ['newcollectionforsport', 'sport', 'sneakers', 'asics'],
            rating: 4,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 4
                }
            ]
        },
        {
            id: '10',
            description: 'A versatile model for spring and early fall. With a raised silhouette and anatomical last, they provide the ultimate in comfort.',
            createdAt: new Date('2021-02-10T23:00:00'),
            link: 'https://studio27.com.ua',
            vendor: 'Studio 27',
            photoLink: 'https://drive.google.com/file/d/12FgCgOi1WrpNKnlsYAPhvUT8f0eRB34v/view?usp=sharing',
            validUntil: new Date('2021-03-22T23:00:00'),
            discount: '65%',
            hashTags: ['suede', 'studio27']
        },
        {
            id: '11',
            description: 'A versatile model for spring and early fall. With a raised silhouette and anatomical last, they provide the ultimate in comfort.',
            createdAt: new Date('2021-02-01T23:00:00'),
            link: 'https://marselshoes.by',
            vendor: 'Marsel',
            photoLink: 'https://drive.google.com/file/d/1c0qDMjCXkfUeIgrG4hlFbw15lJzfiVPf/view?usp=sharing',
            validUntil: new Date('2021-04-16T23:00:00'),
            discount: '18%',
            hashTags: ['shoes', 'beautiful', 'shoesoftheday', 'marsel'],
            rating: 3,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 3
                }
            ]
        },
        {
            id: '12',
            description: 'The model of autumn boots made of eco-leather is complemented with bright red laces. Visually reduces the foot.',
            createdAt: new Date('2021-03-01T23:00:00'),
            link: 'https://studio27.com.ua',
            vendor: 'Studio 27',
            photoLink: 'https://drive.google.com/file/d/1DdLsCsafPKUABXC_qXey5_hp7_Xw2t0Q/view?usp=sharing',
            validUntil: new Date('2021-03-23T23:00:00'),
            discount: '25%',
            hashTags: ['eco', 'leather', 'studio27'],
            rating: 4.5,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 4
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
            id: '13',
            description: 'High-quality suede shoes of an unusual color will accentuate any look.',
            createdAt: new Date('2021-01-12T23:00:00'),
            link: 'https://www.instagram.com/modesco.shoes',
            vendor: 'MODESCO',
            photoLink: 'https://drive.google.com/file/d/1ml5fDCIWjxIS5xCFhBJ_jcVQOZoLgadB/view?usp=sharing',
            validUntil: new Date('2021-04-27T23:00:00'),
            discount: '12%',
            hashTags: ['women', 'autumn', 'suede', 'shoesoftheday', 'shoelover', 'grey'],
            rating: 3.5,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 4
                },
                {
                    name: 'Anna',
                    surname: 'Belova',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'Very convenient!',
                    evaluationOfProduct: 3
                }
            ]
        },
        {
            id: '14',
            description: 'Chelsea boots are perfect for any autumn look, the boots stretch well on the shins.',
            createdAt: new Date('2021-02-17T23:00:00'),
            link: 'https://kari.com',
            vendor: 'Kari',
            photoLink: 'https://drive.google.com/file/d/1y0i-DU1sJGNy-4GQFkGl-XGOFDzRc2ud/view?usp=sharing',
            validUntil: new Date('2021-03-10T23:00:00'),
            discount: '29%',
            hashTags: ['mexx', 'genuine'],
            rating: 5,
            reviews: [
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
            id: '15',
            description: 'A feminine and sophisticated pair of genuine leather ankle boots that will add style to any outfit.',
            createdAt: new Date('2021-01-25T23:00:00'),
            link: 'https://respect-shoes.ru',
            vendor: 'Respect',
            photoLink: 'https://drive.google.com/file/d/1UfSmBS-Qq_f65jyxyEeYedsiAcvz1Gk4/view?usp=sharing',
            validUntil: new Date('2021-04-20T23:00:00'),
            discount: '5%',
            hashTags: ['shoes', 'ankle', 'ankleboots', 'shoesoftheday', 'brulloff', 'woman'],
            rating: 4,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 4
                }
            ]
        },
        {
            id: '16',
            description: 'Unusual design with front zip and interesting details. Natural fur will make any winter warm.',
            createdAt: new Date('2021-03-01T23:00:00'),
            link: 'https://ecco.ru',
            vendor: 'ECCO',
            photoLink: 'https://drive.google.com/file/d/12ILOLLBaTWUaRQZNKs9jBbkVTJDQdja-/view?usp=sharing',
            validUntil: new Date('2021-04-25T23:00:00'),
            discount: '32%',
            hashTags: ['newcollection', 'ecco', 'sail']
        },
        {
            id: '17',
            description: 'High tractor outsole and leather belt look stylish. Faux leather inserts are created for a variety of shoe models.',
            createdAt: new Date('2021-03-05T23:00:00'),
            link: 'https://marselshoes.by',
            vendor: 'Marsel',
            photoLink: 'https://drive.google.com/file/d/1LU39YLcL9T0BrSTDVQC_m2MA2I84Z_z1/view?usp=sharing',
            validUntil: new Date('2021-04-20T23:00:00'),
            discount: '45%',
            hashTags: ['winter', 'marsel'],
            rating: 4.7,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 4
                },
                {
                    name: 'Anna',
                    surname: 'Belova',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'Very convenient!',
                    evaluationOfProduct: 5
                },
                {
                    name: 'Maksim',
                    surname: 'Dubrov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'Cool shoes',
                    evaluationOfProduct: 5
                }
            ]
        },
        {
            id: '18',
            description: 'The all-brown, gradient-fitting model is a good choice for winter.',
            createdAt: new Date('2021-02-17T23:00:00'),
            link: 'https://ecco.ru',
            vendor: 'ECCO',
            photoLink: 'https://drive.google.com/file/d/1R8Y6SDnKGYxS9BBJE1Wwpx0-21sFlyJX/view?usp=sharing',
            validUntil: new Date('2021-04-08T23:00:00'),
            discount: '55%',
            hashTags: ['women', 'ecco', 'ordernow'],
            rating: 4,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 5
                },
                {
                    name: 'Anna',
                    surname: 'Belova',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'Very convenient!',
                    evaluationOfProduct: 3
                }
            ]
        },
        {
            id: '19',
            description: 'Lightweight casual sneakers with genuine and suede leather inserts. Provides comfort in movement.',
            createdAt: new Date('2021-02-20T23:00:00'),
            link: 'https://www.asics.com',
            vendor: 'ASICS',
            photoLink: 'https://drive.google.com/file/d/1Ld65KCJT5h2XxiDRJbAUjord5qy9rT8n/view?usp=sharing',
            validUntil: new Date('2021-04-20T23:00:00'),
            discount: '37%',
            hashTags: ['sport', 'sneakers', 'asics'],
            rating: 5,
            reviews: [
                {
                    name: 'Alexey',
                    surname: 'Frolov',
                    photoLinkOfReviewer: 'https://drive.google.com/file/d/11LAyORn6-EUwcQHBA5dq0pGTJCoWNEZU/view?usp=sharing',
                    textOfReview: 'The quality is good, thanks!',
                    evaluationOfProduct: 5
                }
            ]
        },
        {
            id: '20',
            description: 'A versatile model for spring and early fall. With a raised silhouette and anatomical last, they provide the ultimate in comfort.',
            createdAt: new Date('2021-03-05T23:00:00'),
            link: 'https://studio27.com.ua',
            vendor: 'Studio 27',
            photoLink: 'https://drive.google.com/file/d/12FgCgOi1WrpNKnlsYAPhvUT8f0eRB34v/view?usp=sharing',
            validUntil: new Date('2021-04-05T23:00:00'),
            discount: '20%',
            hashTags: ['suede', 'studio27']
        }
    ];

    function getAds(skip = 0 , top = 10, filterConfig = undefined) {
        if (typeof skip != 'number' || typeof top != 'number' || skip > adList.length) {
            console.log('Incorrect parameters!');
            return;
        }
        let newAdList = adList;
        if(filterConfig) {
            for (let param in filterConfig) {
                if (param === 'vendor') {
                    newAdList = newAdList.filter(item => item.vendor === filterConfig.vendor);
                }
                if (param === 'createdAt') {
                    newAdList = newAdList.filter(item => item.createdAt <= filterConfig.createdAt);
                }
                if (param === 'validUntil') {
                    newAdList = newAdList.filter(item => item.validUntil >= filterConfig.validUntil);
                }
            }
        }
        newAdList.sort(function (a, b) {
                return a.createdAt - b.createdAt;
        });
        return newAdList.slice(skip, skip + top);
    }

    function getAd(id) {
        if (typeof id != 'string') {
            console.log('Incorrect parameters!');
            return;
        }
        let index = adList.findIndex(item => item.id === id);
        if (index === -1) {
            console.log('Incorrect parameters!');
            return;
        }
        return adList.filter(item => item.id === id);
    }

    function addAd(adItem) {
        if(validateAd(adItem)) {
            adList.push(adItem);
            return true;
        }
        else {
            return false;
        }
    }

    function validateAd(adItem) {
        return typeof adItem.id == 'string' && typeof adItem.description == 'string'
            && adItem.description.length < 200 && typeof adItem.link == 'string'
            && typeof adItem.vendor == 'string' && typeof adItem.discount == 'string'
            && adItem.createdAt instanceof Date && adItem.validUntil instanceof Date
            && adItem.hashTags instanceof Array;
    }

    function editAd(id, adItem){
        if (typeof id != 'string') {
            console.log('Incorrect parameter!');
            return;
        }
        for (let param in adItem) {
            if (param === 'description') {
                if (typeof param != 'string') {
                    console.log('Incorrect parameter!');
                    return;
                }
                adList.find(item => item.id === id).description = adItem.description;
                return true;
            }
            if (param === 'link') {
                if (typeof param != 'string') {
                    console.log('Incorrect parameter!');
                    return;
                }
                adList.find(item => item.id === id).link = adItem.link;
                return true;
            }
            if (param === 'discount') {
                if (typeof param != 'string') {
                    console.log('Incorrect parameter!');
                    return;
                }
                adList.find(item => item.id === id).discount = adItem.discount;
                return true;
            }
            if (param === 'hashtags') {
                if (!(param instanceof Array)) {
                    console.log('Incorrect parameter!');
                    return;
                }
                adList.find(item => item.id === id).hashTags = adItem.hashTags;
                return true;
            }
            if (param === 'validUntil') {
                if (!(param instanceof Date)) {
                    console.log('Incorrect parameter!');
                    return;
                }
                adList.find(item => item.id === id).validUntil = adItem.validUntil;
                return true;
            }
        }
        return false;
    }

    function removeAd(id){
        if (typeof id != 'string') {
            console.log('Incorrect parameter!');
            return;
        }
        let index = adList.findIndex(item => item.id === id);
        if (index !== -1) {
            adList.splice(index, 1)
            return true;
        }
        return false;
    }

    let newAd1 = {
        id: '21',
        description: 'A versatile model for spring and early fall. With a raised silhouette and anatomical last, they provide the ultimate in comfort.',
        createdAt: new Date('2021-03-05T23:00:00'),
        link: 'https://studio27.com.ua',
        vendor: 'Studio 27',
        photoLink: 'https://drive.google.com/file/d/12FgCgOi1WrpNKnlsYAPhvUT8f0eRB34v/view?usp=sharing',
        validUntil: new Date('2021-04-05T23:00:00'),
        discount: '20%',
        hashTags: ['suede', 'studio27']
    }

    let newAd2 = {
        id: '22',
        description: 'A versatile model for spring and early fall. With a raised silhouette and anatomical last, they provide the ultimate in comfort.',
        createdAt: 'Studio 27',
        link: 'https://studio27.com.ua',
        photoLink: 'https://drive.google.com/file/d/12FgCgOi1WrpNKnlsYAPhvUT8f0eRB34v/view?usp=sharing',
        validUntil: new Date('2021-04-05T23:00:00'),
        discount: '20%',
        hashTags: 2
    }

    console.log(getAd('3'));
    console.log(getAd('30'));
    console.log(getAd(7));

    console.log(getAds(0, 10));
    console.log(getAds(10, 10));
    console.log(getAds(5));
    console.log(getAds(30));
    console.log(getAds('5'));
    console.log(getAds(0, 3, { vendor: 'Marsel' }));
    console.log(getAds(0, 5, { validUntil: new Date('2021-04-20T23:00:00')}));

    console.log(addAd(newAd1));
    console.log(addAd(newAd2));

    console.log(editAd('3', { discount: '20%' }));
    console.log(editAd(5, { discount: '20%' }));
    console.log(editAd('7', { id: '40' }));

    console.log(removeAd('10'));
    console.log(removeAd(10));
    console.log(removeAd('30'));
}());

