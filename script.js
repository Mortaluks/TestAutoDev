// JavaScript para el sitio web

// Función para guardar datos de clientes
function saveClientData() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

const clientData = {
name: name,
email: email,
phone: phone
};

localStorage.setItem("clientData", JSON.stringify(clientData));
alert("Datos guardados exitosamente!");
}

// Función para descargar datos de clientes en formato JSON
document.getElementById("downloadJson").addEventListener("click", function() {
const clientData = JSON.parse(localStorage.getItem("clientData"));
const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(clientData));
document.getElementById("downloadJson").setAttribute("href", dataStr);
document.getElementById("downloadJson").setAttribute("download", "client_data.json");
});
