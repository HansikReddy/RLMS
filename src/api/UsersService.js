import axios from 'axios';
import environment from './../environments/environment';

const USERS_API_BASE_URL = environment.apiUrl + "/users/";

class UsersService {

    getUsers(){
        return axios.get(USERS_API_BASE_URL);
    }

    createUsers(user){
        return axios.post(USERS_API_BASE_URL, user);
    }

    getUsersById(userId){
        return axios.get(USERS_API_BASE_URL + '/' + userId);
    }

    updateUsers(user, userId){
        return axios.put(USERS_API_BASE_URL + '/' + userId, user);
    }

    deleteUsers(userId){
        return axios.delete(USERS_API_BASE_URL + '/' + userId);
    }
}

export default new UsersService()