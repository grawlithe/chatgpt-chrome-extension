let result;
let backendURL = "http://localhost:8080/v1/"

function sendQry(data = {}) {
    fetch(backendURL, {
        method: "POST", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        this.result = data;
        document.getElementById('chathistory').innerHTML = "<p>" + data.choices[0].message.content + "</p>"
        console.log("Success:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

document.getElementById('prompt').onclick = function() {
    let qry = document.getElementById('prompttext').value
    // send data to backend
    let payload = {
        "model" : "gpt-3.5-turbo",
        "messages" : [{"role" : "user", "content" : qry}]
    }
    sendQry(payload);

}