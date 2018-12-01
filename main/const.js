const conn = {
    IP: "localhost",
    PORT: 8080,
    PROTOCOL: "http"
};

const URL = conn.PROTOCOL + '://' + conn.IP + ':' + conn.PORT;
const app = angular.module("listino", ["ngRoute"]);
