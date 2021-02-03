import axios from 'axios';
import environment from './../environments/environment';

const SCHOOL_API_BASE_URL = environment.apiUrl + "/schools/";

class SchoolsService {

    getSchools(){
        console.log(SCHOOL_API_BASE_URL)
        return axios.get(SCHOOL_API_BASE_URL);
    }

    createSchool(school){
        console.log(SCHOOL_API_BASE_URL + 'create')
        console.log(school)
        return axios.post(SCHOOL_API_BASE_URL + 'create', school);
    }

    getSchoolsById(schoolId){
        return axios.get(SCHOOL_API_BASE_URL + '/' + schoolId);
    }

    updateSchools(school, schoolId){
        return axios.put(SCHOOL_API_BASE_URL + '/' + schoolId, school);
    }

    deleteSchools(schoolId){
        return axios.delete(SCHOOL_API_BASE_URL + '/' + schoolId);
    }
}

export default new SchoolsService()