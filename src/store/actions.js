import axios from "axios"
import { APIURL } from "../constant";

export default{
     getProducts({commit}){
         axios.get(`${APIURL}/products`)
        .then((response) => {commit('setProducts',response.data)})
    }
}