
window.onload = function()
{
    const initPerson = personGenerator.getPerson();

    document.getElementById('surnameOutput').innerText = initPerson.familiya;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.dataRojdeniya;
};



document.getElementById('buttonClear').addEventListener('click', function () {
    document.getElementById('surnameOutput').innerText = "Генерация фамилии";
    document.getElementById('firstNameOutput').innerText = "Генерация имени";
    document.getElementById('genderOutput').innerText = "Генерация пола";
    document.getElementById('birthYearOutput').innerText = "Генерация даты рождения";
});
