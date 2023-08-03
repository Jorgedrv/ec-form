import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:8090/esperanza-church/v1" //'https://aqueous-savannah-49210.herokuapp.com'
});

export default instance;
