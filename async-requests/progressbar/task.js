const formElement = document.querySelector('form');
const url = 'https://netology-slow-rest.herokuapp.com/upload.php';
const progressElement = document.querySelector('progress');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();                       
    const formData = new FormData(formElement);
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e) => {
        const progress = e.loaded / e.total;
        progressElement.value = progress;
        //console.log('progress', progress);
    });
    xhr.upload.addEventListener('load', (e) => {
       // console.log('loadEnd');
        setTimeout(() => {
            alert ('File was uploaded successfully')//)
        }, 10);
    });

    xhr.open('POST', url);
    xhr.send(formData);
    
});