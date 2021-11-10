import { isUndefined } from 'util';
import cookies from "universal-cookie/es6";

export function calculaExtraccionSesion() {

    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;

    return new Date(newDate);
};

export function getSession() {

    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s');
}