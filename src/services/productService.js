import axios from "axios";
export default class ProductService{
    getProducts(){
        //restful service 'e request atmak
        return axios.get("http://localhost:8080/api/products/getall")
    }

} 