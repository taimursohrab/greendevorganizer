import axios from 'axios';

const url = 'http://localhost:4000/projects';

class ProjectService {
    // Get Posts
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

    // // Create Post
    // static insertPost(text){
    //     return axios.post(url, {
    //         text
    //     });
    // }

    // // Delete Post
    // static deletePost(id) {
    //     return axios.delete(`${url}${id}`);
    // }
}

export default ProjectService;