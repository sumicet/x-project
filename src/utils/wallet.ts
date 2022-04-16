import { config } from '../config';

const name = `${config.appName.replace(' ', '_')}_Wallet`;

export const setLocalStorage = (object: Object) => {
    if (!object) {
        return;
    }

    localStorage.setItem(name, JSON.stringify(object));
};

export const getLocalStorage = () => {
    const result = localStorage.getItem(name);

    if (!result) {
        return null;
    }

    return JSON.parse(result);
};
