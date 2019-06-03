let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

/**
 * method: method which communicate with the server,>> GET,POST, URL path to server
 * request.open(method, url, async, login, pass);
 *
 * status 404
 * statusText 404 in a sentence
 * responseText
 * readyState  request step state [unsent, onend, done, loading, headers_received]
 *
 */
inputRub.addEventListener('input', () => {
    // create request object
    let request = new XMLHttpRequest();
    // setup object where to go what to do
    request.open('GET', './current.json');
    //  set response type
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //  executing
    request.send();

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputRub.value = "fail";
        }
    })
});