'use strict'

window.addEventListener('load', () => {

    var addBtn = document.getElementById('addBtn');
    var bodyTable = document.getElementById('bodyTable');
    var nameInput = document.querySelector('.name-input')
    var cityInput = document.querySelector('.city-input')
    var rubroInput = document.querySelector('.rubro-input')
    var emailInput = document.querySelector('.email-input')
    var queryInput = document.querySelector('.query-input')
    var antiguedadInput = document.querySelector('.antiguedad-input')
    var alertDanger = document.querySelector('.alert-danger');
    var alertSucces = document.querySelector('.alert-success');
    var sendContact = document.getElementById('sendContact');
    var homeMenu = document.querySelector('.homeMenu');
    var clientsMenu = document.querySelector('.clientsMenu');
    var contactMenu = document.querySelector('.contactMenu');

    const currentPath = window.location.pathname;

    console.log(currentPath);

    if (currentPath == '/index.html' || currentPath == '/') {
        homeMenu.classList.add('active');
        clientsMenu.classList.remove('active');
        contactMenu.classList.remove('active');
    } else if (currentPath == '/clients.html') {
        homeMenu.classList.remove('active');
        clientsMenu.classList.add('active');
        contactMenu.classList.remove('active');
    } else if (currentPath == '/contact.html') {
        homeMenu.classList.remove('active');
        clientsMenu.classList.remove('active');
        contactMenu.classList.add('active');
    };

    if (addBtn){
        addBtn.addEventListener('click', (e) => {
            e.preventDefault()
    
            if (nameInput.value == '' || cityInput.value == '' || rubroInput.value == '' || antiguedadInput.value == '') {
                alertDanger.style.display = 'block';
            }else{
                alertDanger.style.display = 'none';
                var newRow = document.createElement('tr');
    
                newRow.innerHTML = `
                        <td>${nameInput.value}</td>
                        <td>${cityInput.value}</td>
                        <td>${rubroInput.value}</td>
                        <td>${antiguedadInput.value}</td>
                `;
    
                bodyTable.append(newRow);
    
                nameInput.value = '';
                cityInput.value = '';
                rubroInput.value = '';
                antiguedadInput.value = '';
            }
    
        });
    };    

    if(sendContact){
        sendContact.addEventListener('click', (e) => {
            e.preventDefault()
    
            if (nameInput.value == '' || cityInput.value == '' || rubroInput.value == '' || emailInput.value == '' || queryInput.value == ''){
                alertSucces.style.display = 'none';
                alertDanger.style.display = 'block';
            }else{
                alertSucces.style.display = 'block';
                alertDanger.style.display = 'none';                
    
                nameInput.value = '';
                emailInput.value = '';
                cityInput.value = '';
                rubroInput.value = '';
                queryInput.value = '';
            }
    
        });
    };

});