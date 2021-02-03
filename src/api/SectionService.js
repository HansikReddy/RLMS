import axios from 'axios';
import environment from './../environments/environment';

const SECTION_API_BASE_URL = environment.apiUrl + "/sections/";

class SectionService {

    getSections(){
        return axios.get(SECTION_API_BASE_URL);
    }

    createSection(section){
        return axios.post(SECTION_API_BASE_URL + 'create', section);
    }

    getSectionById(sectionId){
        return axios.get(SECTION_API_BASE_URL + 'get/' + sectionId);
    }

    updateSection(section){
        return axios.put(SECTION_API_BASE_URL + 'update', section);
    }

    deleteSection(sectionId){
        return axios.delete(SECTION_API_BASE_URL + '/' + sectionId);
    }
}

export default new SectionService()