import axios from "axios"
import { APIURL } from "../constant";

export default{
    async getProducts({commit}){
        await axios.get(`http://localhost:3000/products`)
        .then((response) => {commit('setProducts',response.data)})
    },
}