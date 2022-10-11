import axios from "axios"
import { APIURL } from "../constant";

export default{
    async getProducts({commit}){
        await axios.get(`${APIURL}/products`)
        .then((response) => {commit('setProducts',response.data)})
    },
    test({commit}){
        commit('setCookie')
    }
}