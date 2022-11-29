import axios from "axios";
import { LoginBody, LoginResponse, Admin, POSTCategoryBody, POSTCategoryResponse, DELETECategoryBody, Category } from "./model";

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
export async function createCategory(body: POSTCategoryBody) {
  const res = await axios.post<POSTCategoryResponse>(`${API_BASE_URL}/menu/category`, body);
  return res.data;
}
export async function deleteCategory(body: DELETECategoryBody) {
  const res = await axios.delete<POSTCategoryResponse>(`${API_BASE_URL}/menu/category`, { data: body});
  return res.data;

}

// PLATES
export function createPlate(category: Category) {

}
export function updatePlate(category: Category) {

}
export function deletePlate(category: Category) {

}