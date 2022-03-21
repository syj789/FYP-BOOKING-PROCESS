import GenericService from "./GenericService";
class AssignmentsService extends GenericService {

  constructor() {
    super();
  }
  addAssignment = (data) => this.post("assignments", data);
  deleteAssignment = (_id) => this.delete("assignments/" + _id);
  updateAssignment = (_id, data) => this.put("assignments/" + _id, data);
  getAssignment = () => this.get("assignments/");
  getSingleAssignment = (id) => this.get("assignments/" + id);
}

let assignmentService = new AssignmentsService();
export default assignmentService;