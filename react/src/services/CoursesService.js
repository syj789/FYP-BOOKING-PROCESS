  
import GenericService from "./GenericService";
class CoursesService extends GenericService {
  constructor() {
    super();
  }
  addCourse = (data) => this.post("courses", data);
  deleteCourse = (_id) => this.delete("courses/" + _id);
  updateCourse = (_id, data) => this.put("courses/" + _id, data);
  getCourse = (page = 1, perPage = 10) =>
    this.get("courses?page=" + page + "&perPage=" + perPage);
  getSingleCourse = (id) => this.get("courses/" + id);
}

let courseService = new CoursesService();
export default courseService;