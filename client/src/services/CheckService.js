import axios from 'axios';

const url = 'http://localhost:4000/checks/';

class CheckService {

    // Get a specific Check
    static getCheck(id) {

        return new Promise ((resolve,reject) => {
            axios.get(`${url}${id}`).then((res) => {
                const data = res.data;
                resolve(
                    data
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Get All Checks
    static getChecks() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(check => ({
                        ...check
                        //createdAt: new Date(check.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Check
    static insertCheck(check){
        return axios.post(url, check);
    }

    // Update Check
    static updateCheck(check){
        return axios.put(url, check);
    }

    // Delete Check
    static deleteCheck(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default CheckService;