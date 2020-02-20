import axios from 'axios';

const url = 'http://localhost:4000/projects/';

class ProjectService {

    // Get All Projects
    static getProject(id) {
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

    // Get All Projects
    static getProjects() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(project => ({
                        ...project
                        //createdAt: new Date(project.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Project
    static insertProject(project){
        return axios.post(url, project);
    }

    // Update Project
    static updateProject(project){
        return axios.put(url, project);
    }

    // Delete Project
    static deleteProject(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ProjectService;