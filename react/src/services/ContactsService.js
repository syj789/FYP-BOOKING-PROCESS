  
import GenericService from "./GenericService";
class ContactsService extends GenericService {
  constructor() {
    super();
  }
  addContact = (data) => this.post("contacts", data);
  deleteContact = (_id) => this.delete("contacts/" + _id);
  updateContact = (_id, data) => this.put("contacts/" + _id, data);
  getContact = () => this.get("contacts");
  getSingleContact = (id) => this.get("contacts/" + id);
}

let contactService = new ContactsService();
export default contactService;