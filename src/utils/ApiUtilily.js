import axios from "axios";
import * as Config from '../constants/ApiConfig'

export default async function ApiCaller(endPoint, method = Config.POST, body) {
    try {
        return axios({
            method: method,
            url: `${Config.BASE_URL}/${endPoint}`,
            data: body
        });
    } catch (err) {
        console.log(err);
    }
}