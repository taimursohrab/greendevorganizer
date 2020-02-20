import axios from 'axios';

const url = 'http://localhost:4000/invoices/';

class InvoiceService {

    // Get a specific Invoice
    static getInvoice(id) {

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

    // Get All Invoices
    static getInvoices() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(invoice => ({
                        ...invoice
                        //createdAt: new Date(invoice.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Invoice
    static insertInvoice(invoice){
        return axios.post(url, invoice);
    }

    // Update Invoice
    static updateInvoice(invoice){
        return axios.put(url, invoice);
    }

    // Delete Invoice
    static deleteInvoice(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default InvoiceService;