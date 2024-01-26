import axios from "axios";

const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers :{
        // "Content-Type" : "application/json",
        "Content-Type" : "multipart/form-data",
    }
})


export const testApi = () => Api.get("/test")
// http://localhost:5000/test

// create user api
export const createUserApi = (data) => Api.post('/api/user/create', data)

// Login user Api
export const loginUserApi = (data) =>  Api.post('/api/user/login', data)

// Create product API
export const createProductApi = (data) => Api.post('/api/product/create_product', data)

// get all products
export const getAllProductsApi = () => Api.get('/api/product/get_products')

// GET single product API
export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`)

// Update product API with ID
export const updateProductApi = (id, formData) => Api.put(`/api/product/update_product/${id}`, formData)

// delete product API with ID
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`)

