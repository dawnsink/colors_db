console.log("I'm here!");

const form = document.getElementById("color_form");
form.onsubmit = event => {

    event.preventDefault();
    const dataInput = event.target.elements["input"];
    const name = dataInput.value;
    console.log(name);

    fetch("/add", {
        method: "POST", 
        body: JSON.stringify({name: name}),
        headers: {
            "Content-Type": "application/json"
        }
    }) 
    .then(response => response.json());
    .then(data =>{
        console.log("no errors");
    })
}

