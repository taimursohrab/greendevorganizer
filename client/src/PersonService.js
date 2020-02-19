import axios from 'axios';

const url = 'http://localhost:4000/people/';

class PersonService {

    // Get a specific Person
    static getPerson(id) {

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

    // Get All People
    static getPeople() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(person => ({
                        ...person
                        //createdAt: new Date(person.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Person
    static insertPerson(person){
        return axios.post(url, person);
    }

    // Update Person
    static updatePerson(person){
        return axios.put(url, person);
    }

    // Delete Person
    static deletePerson(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PersonService;