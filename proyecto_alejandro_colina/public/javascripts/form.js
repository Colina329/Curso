window.addEventListener('DOMContentLoaded', (event) => {
    var form = document.querySelector('#contact_form');
    var feedback = document.querySelector('#feedback');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var data = new FormData(form);

        feedback.innerText = 'Enviando...';

        fetch('/', {
            method: 'post',
            body: data
        }).then(function (response) {
            response.json().then(function (obj) {
                feedback.innerText = obj.message;
            })
        });
    });
});