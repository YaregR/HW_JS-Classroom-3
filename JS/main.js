
const listBtn = document.querySelector('.classBtn');
const workBtn = document.querySelector('.homeworkBtn');
const classEl = document.querySelector('.classroom');
const workEl = document.querySelector('.homework');

let fullClassroom = [
    {name:'Иванна', surname:'Зимина', HW: 9},
    {name:'Артем', surname:'Шевчук', HW: 5},
    {name:'Андрей', surname:'Тимошенко', HW: 8},
    {name:'Денис', surname:'Рудик', HW: 9},
    {name:'Наталья', surname:'Горошко', HW: 6},
    {name:'Андрей', surname:'Стегний', HW: 7},
    {name:'Александр', surname:'Гетьманский', HW: 8},
    {name:'Владимир', surname:'Антоненко', HW: 4},
];

const monthHW = 9;
let homeworkClassroom = fullClassroom.filter (done => done.HW > monthHW*0.8);

listBtn.addEventListener('click', () => {

    fullClassroom.forEach((item, index) => {
        const html = `
            <div class="person">
            ${index+1}. ${item.name} ${item.surname}, homework: ${item.HW}
            </div>
        `;
        
        classEl.insertAdjacentHTML('beforeend', html);
    });  
});

workBtn.addEventListener('click', () => {

    homeworkClassroom.forEach((item, index) => {
        const html = `
            <div class="person">
            ${index+1}. ${item.name} ${item.surname}, homework: ${item.HW}
            </div>
        `;
        
        workEl.insertAdjacentHTML('beforeend', html);
        classEl.style.display = 'none';
    });  
});



