export type Category = {
  name: string;
  bannerImg: string;
  plates: Plate[];
}

export type Plate = {
  name: string;
  desc: string;
  price: string;
  img: string;
}

export const testCategories: Record<string, Category> = {
  'Postre': {
    name: 'Postre',
    bannerImg: 'https://cdn.colombia.com/gastronomia/2011/09/14/postre-de-deditos-de-mama-3361.jpg',
    plates: [
      {
        name: 'Vasito',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Gelatina',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Postre de café',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Flan',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Flan',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Flan',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Flan',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
    ]
  }
}

export const categoryNames = Object.values(testCategories).reduce<string[]>(
  (prev, cate) => [...prev, cate.name], []
)