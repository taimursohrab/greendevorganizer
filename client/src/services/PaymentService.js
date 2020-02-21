import axios from 'axios';

const url = 'http://localhost:4000/payment/';

class PaymentService {

    // Get a specific Payment
    static getPayment(id) {

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

    // Get All Payments
    static getPayments() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(payment => ({
                        ...payment
                        //createdAt: new Date(payment.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Payment
    static insertPayment(payment){
        return axios.post(url, payment);
    }

    // Update Payment
    static updatePayment(payment){
        return axios.put(url, payment);
    }

    // Delete Payment
    static deletePayment(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PaymentService;