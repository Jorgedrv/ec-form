export function hasJWT() {
    return localStorage.getItem("token") !== null;
}