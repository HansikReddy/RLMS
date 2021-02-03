import axios from 'axios';
import environment from './../environments/environment';

const STUDENT_API_BASE_URL = environment.apiUrl + "/students/";

class StudentsService {

    getStudents(){
        console.log(STUDENT_API_BASE_URL)
        return axios.get(STUDENT_API_BASE_URL);
    }

    createStudent(student){
        console.log(STUDENT_API_BASE_URL + 'create')
        return axios.post(STUDENT_API_BASE_URL + 'create', student);
    }

    getStudentsById(studentId){
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    updateStudents(student, studentId){
        return axios.put(STUDENT_API_BASE_URL + '/' + studentId, student);
    }

    deleteStudents(studentId){
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }

    getStudentsBySchoolId(schoolId){
        return axios.get(STUDENT_API_BASE_URL + 'getStudentsBySchoolId/' + schoolId);
    }
}

export default new StudentsService()