import axios from "axios"; 

const baseUrl ="https://localhost:44354/api/"

export default {
    jobDetail(url=baseUrl+'JobsDetails/'){
        return {
            fetchAll : () => axios.get(url),
            fetchById :id => axios.get(url+id),
            create : newRecord => axios.post(url,newRecord)
        }

    }

}