export class LocalStorage {
    static getData(keyName) {
        let keyValue = localStorage.getItem(keyName);
        return this.processGetData(keyValue);
    }

    static setData(keyName, keyValue) {
        localStorage.setItem(keyName, this.processSetData(keyValue));
    }

    static removeData(keyName) {
        localStorage.removeItem(keyName);
    }

    static processGetData(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return str;
        }
    }

    static processSetData(value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        return value.toString();
    }
}

export default LocalStorage;