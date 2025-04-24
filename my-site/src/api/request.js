import axios from "axios";
import { showMessage } from '@/utils'
const ins = axios.create();
ins.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {
        showMessage({
            type:'warn',
            duration:1600,
            text:resp.data.msg,
        })
        return null;
    }else{
        return resp.data.data;
    }
})

export default ins;