console.log('hello from js');

$(document).ready(onReady);

function onReady() {
    console.log('JQUERY');
    getRandomQuote();
}

function getRandomQuote() {
    console.log('get the quote');
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){
        appendToDom(response);
    });
}

function appendToDom(dataToAppend) {
    $('#output').append(`
        ${dataToAppend.quote} -${dataToAppend.author}
    `);
}