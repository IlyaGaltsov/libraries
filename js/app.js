//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.min.js';

//document.addEventListener("DOMContentLoaded",()=>{
    //const btnModal = document.getElementById('btnmodal');
    //const tooltip = new bootstrap.Tooltip(btnModal)
//}); 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
