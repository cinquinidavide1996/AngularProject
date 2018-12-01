function setHeader (r) {
    r.setHeader('Content-Type', 'application/json');
    r.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    return r;
};