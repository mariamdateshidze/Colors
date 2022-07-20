
function getColors(){

    fetch('https://reqres.in/api/unknown', {
    method: 'GET'
})

.then(function(response){
    if (response.status !== 200){
        throw 'error';
    }
    return response.json();
})
.then(function(resoponseData){
    console.log(resoponseData);
    
    var fragment = document.createDocumentFragment();

    let titles = document.getElementById('btn-div')
    let code = document.createElement('div');
    let pantone = document.createElement('div');

    var section = document.querySelector('#main-section')

    titles.classList.add('titles')

    resoponseData.data.forEach(element => {
        let buttons = document.createElement('button');
       
        buttons.textContent = element.name;
        titles.appendChild(buttons);
        buttons.classList.add('btns')
      

        let span = document.createElement('li');
        span.textContent = element.color; 
        span.classList.add('codes')
    
        code.appendChild(span);
        section.appendChild(code);

        let spanPan = document.createElement('li');
        spanPan.textContent = element.pantone_value;
        spanPan.classList.add('pantone')

        pantone.appendChild(spanPan);
        section.appendChild(pantone);

        fragment.appendChild(titles)
        fragment.appendChild(section)



    });

    document.getElementById('api').innerHTML = ' ';
    document.getElementById('api').appendChild(fragment);

})
.catch(function(error){
    if (error == 400){
        let p = document.createElement('p');
        p.textContent = 'Server Error';

        document.getElementById('api').appendChild(p)
    }
})
}

getColors();

const loadMore = document.querySelector('.learn-more')
const btnDiv = document.querySelector('.more-info-div')
const section = document.querySelector('#main-section')

loadMore.addEventListener('click', () => {
    console.log('hsjahsj');
    btnDiv.classList.toggle('active');
    section.classList.toggle('active')
});










