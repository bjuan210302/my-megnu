import axios from "axios";
import { LoginBody, LoginResponse, POSTCategoryBody, POSTCategoryResponse, DELETECategoryBody, Category, GETCategoryResponse, PUTPlate, POSTPlate, Admin } from "./model";

const API_BASE_URL = import.meta.env.VITE_API_URL;
// USER
export async function registerUser(user: Omit<Admin, '_id' | 'menu'>) {
  console.log(`${API_BASE_URL}/register`)
  const res = await axios.post<LoginResponse>(`${API_BASE_URL}/register`, user)
  axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
  return res.data;
}
export async function loginUser(user: LoginBody) {
  const res = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, user)
  axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
  return res.data;
}
export function updateUser(user: Admin) {

}
export function deleteUser() {

}

// CATEGORIES
export async function getCategory(categoryId: string) {
  const res = await axios.get<GETCategoryResponse>(`${API_BASE_URL}/menu/category/${categoryId}`);
  return res.data;
}
export async function createCategory(body: POSTCategoryBody) {
  const res = await axios.post<POSTCategoryResponse>(`${API_BASE_URL}/menu/category`, body);
  console.log('res', res);
  return res.data;
}
export async function deleteCategory(body: DELETECategoryBody) {
  const res = await axios.delete<POSTCategoryResponse>(`${API_BASE_URL}/menu/category`, { data: body });
  return res.data;

}
// PLATES
export async function createPlate(body: POSTPlate) {
  const res = await axios.post<GETCategoryResponse>(`${API_BASE_URL}/menu/category/dish`, body);
  return res.data;
}
export async function updatePlate(body: PUTPlate) {
  const res = await axios.put<GETCategoryResponse>(`${API_BASE_URL}/menu/category/dish`, body);
  return res.data;
}
export function deletePlate(category: Category) {

}