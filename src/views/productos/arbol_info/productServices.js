import axios from "axios";

export class ProductService {

    //url = "http://localhost:4000";
    url = "https://lovely-lace-production.up.railway.app"

    create( medicamento ) {
        return axios.post(`${this.url}/products`, medicamento).then( res => res.data);
    }

    readAll (id) {
       return axios.get(`${this.url}/products/${id}`).then( res => res.data);
    }

    update ( medicamento ) {
        return axios.put(`${this.url}/products/${medicamento.id}`, medicamento).then( res => res.data)
    }

    delete ( id ) {
        return axios.delete(`${this.url}/products/${id}`).then( res => res.data)
    }
}