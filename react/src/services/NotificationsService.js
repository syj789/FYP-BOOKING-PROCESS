  
import GenericService from "./GenericService";
class NotificationsService extends GenericService {
  constructor() {
    super();
  }
  addNotification = (data) => this.post("notifications", data);
  deleteNotification = (_id) => this.delete("notifications/" + _id);
  updateNotification = (_id, data) => this.put("notifications/" + _id, data);
  getNotification = () => this.get("notifications");
  getSingleNotification = (id) => this.get("notifications/" + id);
}

let notificationService = new NotificationsService();
export default notificationService;