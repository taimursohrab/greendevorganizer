import axios from 'axios';

const url = 'http://localhost:4000/contracts/';

class ContractService {

    // Get a specific Contract
    static getContract(id) {

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

    // Get All Contracts
    static getContracts() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(contract => ({
                        ...contract
                        //createdAt: new Date(contract.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Contract
    static insertContract(contract){
        return axios.post(url, contract);
    }

    // Update Contract
    static updateContract(contract){
        return axios.put(url, contract);
    }

    // Delete Contract
    static deleteContract(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ContractService;