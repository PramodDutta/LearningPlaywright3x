enum HTTPMethod {
    Geto = "GET",
    posto = "POST",
    puto = "PUT",
    deleto = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string): void {
    console.log(method + " " + endpoint + " → 200 OK");
}

sendRequest(HTTPMethod.Geto, "/api/users");
sendRequest(HTTPMethod.posto, "/api/users");
sendRequest(HTTPMethod.deleto, "/api/users/1");