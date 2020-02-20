import axios from 'axios';

const url = 'http://localhost:4000/expenses/';

class ExpenseService {

    // Get a specific Expense
    static getExpense(id) {

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

    // Get All Expenses
    static getExpenses() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(expense => ({
                        ...expense
                        //createdAt: new Date(expense.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Expense
    static insertExpense(expense){
        return axios.post(url, expense);
    }

    // Update Expense
    static updateExpense(expense){
        return axios.put(url, expense);
    }

    // Delete Expense
    static deleteExpense(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ExpenseService;