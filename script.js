let input1 = document.getElementById("name");
let input2 = document.getElementById("year");
let button = document.getElementById("button");
let h3 = document.getElementById("url");
let form = document.getElementById("form");

form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent page refresh
/*
    let baseUrl = "https://localhost:8080/";
    let params = [];

    if (input1.value) params.push(`name=${encodeURIComponent(input1.value)}`);
    if (input2.value) params.push(`year=${encodeURIComponent(input2.value)}`);

    if (params.length > 0) {
        h3.innerText = baseUrl + "?" + params.join("&");
    }
	*/
	if (input1.value && input2.value) {
        h3.innerText = h3.innerText + '?' + input1.value + '&' + input2.value;
    }
    else if (input1.value) {
        h3.innerText = h3.innerText + '?' + input1.value;
    }
    else if (input2.value) {  // Fixed: should check input2.value here
        h3.innerText = h3.innerText + '?' + input2.value;
    }
});
