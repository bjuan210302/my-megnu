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
}

export type Category = {
  name: string;
  bannerImg: string;
  dishes: Plate[];
}

export type Plate = {
  _id?: string,
  name: string;
  desc: string;
  price: string;
  dishImg: string;
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
export type POSTCategoryResponse = Category[]
export type GETCategoryBody = {
  categoryId: string,
}
export type GETCategoryResponse = Category & { _id: string }
export type DELETECategoryBody = {
  restaurantAdminId: string,
  categoryId: string,
}

export type POSTPlate = { categoryId: string; dish: Plate }
export type PUTPlate = { categoryId: string; dishId: string; dish: Plate }
