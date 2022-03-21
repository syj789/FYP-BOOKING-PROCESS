  
import GenericService from "./GenericService";
class QuizesService extends GenericService {
  constructor() {
    super();
  }
  addQuiz = (data) => this.post("quizes", data);
  deleteQuiz = (_id) => this.delete("quizes/" + _id);
  updateQuiz = (_id, data) => this.put("quizes/" + _id, data);
  getQuiz = () => this.get("quizes");
  getSingleQuiz = (id) => this.get("quizes/" + id);
}

let quizService = new QuizesService();
export default quizService;