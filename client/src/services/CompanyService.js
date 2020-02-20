import axios from 'axios';

const url = 'http://localhost:4000/companies/';

class CompanyService {

    // Get a specific Company
    static getCompany(id) {

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

    // Get All Companies
    static getCompanies() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(company => ({
                        ...company
                        //createdAt: new Date(company.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Company
    static insertCompany(company){
        return axios.post(url, company);
    }

    // Update Company
    static updateCompany(company){
        return axios.put(url, company);
    }

    // Delete Company
    static deleteCompany(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default CompanyService;