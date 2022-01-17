let car_details = [];
function store(button) {
    if (localStorage.getItem("Car Details")) {
        car_details = JSON.parse(localStorage.getItem("Car Details"));
        let car = {
            carModel: document.querySelector("#inputcarModel").value,
            carColor: document.querySelector("#inputcolor").value,
            carRent: document.querySelector("#inputcost").value,
            carId: document.querySelector("#cid").value
        }
        car_details.push(car);
        localStorage.setItem("Car Details", JSON.stringify(car_details));
    }
    else {
        let car = {
            carModel: document.querySelector("#inputcarModel").value,
            carColor: document.querySelector("#inputcolor").value,
            carRent: document.querySelector("#inputcost").value,
            carId: document.querySelector("#cid").value
        }
        car_details.push(car);
        let carToJson = JSON.stringify(car_details);
        localStorage.setItem("Car Details", carToJson);
    }
}

