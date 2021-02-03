import axios from 'axios';
import environment from './../environments/environment';

const COURSE_API_BASE_URL = environment.apiUrl + "/courses/";

class CourseService {

    getCourses(){
        console.log(COURSE_API_BASE_URL)
        return axios.get(COURSE_API_BASE_URL);
    }

    createCourse(course){
        console.log(COURSE_API_BASE_URL + 'create')
        console.log(course)
        return axios.post(COURSE_API_BASE_URL + 'create', course);
    }

    getCourseById(courseId){
        return axios.get(COURSE_API_BASE_URL + 'get/' + courseId);
    }

    updateCourse(course, courseId){
        return axios.put(COURSE_API_BASE_URL + '/' + courseId, course);
    }

    deleteCourse(courseId){
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }

    getAllCoursesBySchoolId(schoolId){
        return axios.get(COURSE_API_BASE_URL + 'getAllCoursesBySchoolId/' + schoolId);
    }
}

export default new CourseService()