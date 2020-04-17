import LocalStorage from "./LocalStorage"
import { LocalStorageNames } from "./Constants"

class Common {
    static getAuth = () => {
        const userInfo = LocalStorage.getData(LocalStorageNames.UserInfo);
        if (userInfo)
            return userInfo;
        return null;
    }
}

export default Common;