export type Admin = {
  _id: string,
  name: string,
  lastName: string,
  contactNumber: number,
  restaurantName: string,
  restaurantType: string,
  nit: string,
  email: string,
  password: string,
  menu: string[]
  categoryNames?: string[],
  categories?: Record<string, Category>,
}

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


// API
export type LoginBody = {
  email: string,
  password: string,
}

export type LoginResponse = {
  user: Admin,
  token: string,
}

// CATEGORY
export type POSTCategoryBody = {
  restaurantAdminId: string,
  category: {
    name: string,
    bannerImg: string,
  }
}
export type POSTCategoryResponse = {
  categories: string[],
  _id: string,
}
export type GETCategoryBody = {
  categoryId: string,
}
export type GETCategoryResponse = {
  _id: string,
  name: string,
  bannerImg: string,
  dishes: string[],
}
export type DELETECategoryBody = {
  restaurantAdminId: string,
  categoryId: string,
}

export const testCategories: Record<string, Category> = {
  'Postres': {
    name: 'Postres',
    bannerImg: 'https://cdn.colombia.com/gastronomia/2011/09/14/postre-de-deditos-de-mama-3361.jpg',
    plates: [
      {
        name: 'Vasito',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty'
          + 'kams ansn jsjadnzn askdj wk kanz nalnaln lancmdljaskldjaskldjakls jaskdj klasjdkajsdkl jaskdjaskljklajs'
          + 'kams ansn jsjadnzn askdj wk kanz nalnaln lancmdljaskldjaskldjakls jaskdj klasjdkajsdkl jaskdjaskljklajs',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/01/27/postre-de-gelatina-y-crema-de-leche-3430.jpg'
      },
      {
        name: 'Gelatina',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://www.alqueria.com.co/sites/default/files/styles/1327_612/public/receta-de-postre-de-fresa_0.jpg?h=2dfa7a18&itok=_RnhsqPj'
      },
      {
        name: 'Postre de café',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://recetastips.com/wp-content/uploads/2021/07/Receta-de-Postre-de-Cafe-con-Galletas-Maria.jpg'
      },
      {
        name: 'Flan',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2019/05/08/napoleon-1658.gif'
      },
      {
        name: 'Cosa',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://images.hola.com/imagenes/cocina/noticiaslibros/20220509209297/recetas-postres-franceses/1-84-447/interior-postres-adobe-a.jpg'
      },
      {
        name: 'Receta',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://www.momento24.co/wp-content/uploads/2021/11/POSTRE-AL-PARQUE.png'
      },
      {
        name: 'Crema No Sé',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://media.admagazine.com/photos/618a6744b94700461d621432/master/w_1600%2Cc_limit/67788.jpg'
      },
    ]
  },
  'Carnes': {
    name: 'Carnes',
    bannerImg: 'https://elmiradordeatienza.com/imagenes/el-mirador-de-atienza-restaurante-lomitos-de-corzo-carta-1600px.jpg',
    plates: [
      {
        name: 'Vasito',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://static.wixstatic.com/media/d269c2_c47abafbabf243cdab2ff1eafb7f8f28~mv2.jpg/v1/fit/w_1000%2Ch_678%2Cal_c%2Cq_80/file.jpg'
      },
      {
        name: 'Gelatina',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://www.eluniversal.com.mx/sites/default/files/2017/05/02/terminos-coccion-carne-punto-medio-menu-universal.jpg'
      },
      {
        name: 'Postre de café',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://cdn.colombia.com/gastronomia/2014/02/03/chorizos-caseros-eje-cafetero-1584.gif'
      },
      {
        name: 'Flan',
        desc: 'Akams ansn jsjadnzn askdj wk kanz nalnaln lancmcn nan mcnsjdn nsnmz nasjsndjnjk an ajnsndj ayzyty',
        price: '20.00',
        img: 'https://okdiario.com/img/2022/07/06/costilla-cerdo.jpg'
      },
    ]
  }
}
export const categoryNames = Object.values(testCategories).reduce<string[]>(
  (prev, cate) => [...prev, cate.name], []
)