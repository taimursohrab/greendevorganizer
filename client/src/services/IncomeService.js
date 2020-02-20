import axios from 'axios';

const url = 'http://localhost:4000/incomes/';

class IncomeService {

    // Get a specific Income
    static getIncome(id) {

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

    // Get All Incomes
    static getIncomes() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(income => ({
                        ...income
                        //createdAt: new Date(income.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Income
    static insertIncome(income){
        return axios.post(url, income);
    }

    // Update Income
    static updateIncome(income){
        return axios.put(url, income);
    }

    // Delete Income
    static deleteIncome(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default IncomeService;