//1. Створити 2 кубіка, при кліку на перший другий повинен змінювати свій колір на рандомний.
console.log('1. Створити 2 кубіка, при кліку на перший другий повинен змінювати свій колір на рандомний.');
const kyb = document.getElementById('kyb');
const kyb1 = document.getElementById('kyb1');
kyb.onclick = () => {
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);
    kyb1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
console.log(kyb, kyb1);

//2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно Текст неможливо скопіювати!!.
console.log('2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно Текст неможливо скопіювати!!.');
const text1 = document.getElementById('text1');
text1.oncopy = ($event) => {
    $event.preventDefault()
    alert('Текст неможливо скопіювати!');
    console.log($event);
};console.log(text1);

//3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь (r - X координата, g - Y координата, b - середнє арифметичне X+Y2).
console.log('3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь (r - X координата, g - Y координата, b - середнє арифметичне X+Y2).');
const kyb2 = document.getElementById('kyb2');
kyb2.onmousemove = (e) => {
    const r = Math.floor(e.clientX);
    const g = Math.floor(e.clientY);
    const b = Math.floor((e.clientX + e.clientY) / 2);
    kyb2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
console.log(kyb2);

//4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль
console.log('4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль');
const kyb3 = document.getElementById('kyb3');
const kyb4 = document.getElementById('kyb4');
const kyb5 = document.getElementById('kyb5');
kyb3.onclick = () => {
    console.log('i am blueviolet');
}
kyb4.onclick = (event) => {
    event.stopPropagation()
    console.log('i am coral');
}
kyb5.onclick = (event) => {
    event.stopPropagation()
    console.log('i am cadetblue');
}
console.log(kyb3, kyb4, kyb5);

//5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, зупиніть виконання івентів на другому івенті (Див. лекцію).
console.log('5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, зупиніть виконання івентів на другому івенті (Див. лекцію).');
const kyb6 = document.getElementById('kyb6');
const kyb7 = document.getElementById('kyb7');
const kyb8 = document.getElementById('kyb8');
kyb6.addEventListener('click', () => {
    console.log('i am blueviolet');
}, true);
kyb7.addEventListener('click', () => {
    console.log('i am coral');
}, true);
kyb8.addEventListener('click', () => {
    console.log('i am cadetblue');
}, true);
console.log(kyb6, kyb7, kyb8);

//6. Використайте будь яку форму з домашної про форми (в модулі HTMLCSS), та отримайте дані з неї у вигляді об'єкту, виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 
console.log('6. Використайте будь яку форму з домашної про форми (в модулі HTMLCSS), та отримайте дані з неї у вигляді обєкту, виведіть обєкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). ');
console.log(document.forms);
const user = {};
document.getElementById('submit').onclick = (e) => {
    e.preventDefault();
    const forma = document.forms.namedItem('myform');
    console.log(forma);
    user.names = forma.names.value;
    user.password = forma.password.value;
    user.repeat = forma.repeat.value;
    user.date = forma.date.value;
    user.male = forma.male.value;
    user.female = forma.female.value;
    user.number = forma.number.value;
    user.description = forma.description.value;
    console.log(user);
}


