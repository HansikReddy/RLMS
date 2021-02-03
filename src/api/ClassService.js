import axios from 'axios';
import environment from './../environments/environment';

const CLASS_API_BASE_URL = environment.apiUrl + "/classes/";

class ClassService {

    getClasses(){
        return axios.get(CLASS_API_BASE_URL);
    }

    createClass(courseClass){
        return axios.post(CLASS_API_BASE_URL + 'create', courseClass);
    }

    getClassById(classId){
        return axios.get(CLASS_API_BASE_URL + '/' + classId);
    }

    updateClass(courseClass, classId){
        return axios.put(CLASS_API_BASE_URL + '/' + classId, courseClass);
    }

    deleteClass(classId){
        return axios.delete(CLASS_API_BASE_URL + '/' + classId);
    }

    getAllClassesByCourseId(courseId){
        return axios.get(CLASS_API_BASE_URL + 'getAllClassesByCourseId/' + courseId);
    }
}

export default new ClassService()