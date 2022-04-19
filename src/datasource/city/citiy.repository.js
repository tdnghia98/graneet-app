import {} from "axios";
import api from "../../utils";
export default class CityRepository {
  search(query) {
    return api.get("city", { params: { search: query } });
  }
}
