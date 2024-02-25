// 1: Фильтрация продуктов по категориям и цене: 
const products = [
    { name: "Ноутбук", category: "электроника", price: 450 },
    { name: "Яблоки", category: "продукты питания", price: 50 },
    { name: "Клавиатура", category: "электроника", price: 700 },
    { name: "Бананы", category: "продукты питания", price: 30 },
    { name: "Телевизор", category: "электроника", price: 800 },
    { name: "Хлеб", category: "продукты питания", price: 40 }
];

function filteredProducts(category, price, array) {
    const newProducts = array.filter(product => product.category === category
        && product.price < price);
    return newProducts;
};
const newArr = filteredProducts('электроника', 500, products);

// 2: Поиск студентов по оценкам и курсу:
const students = [
    { name: "Иван", grade: 5, year: 2 },
    { name: "Светлана", grade: 4.5, year: 3 },
    { name: "Алексей", grade: 3, year: 1 },
    { name: "Мария", grade: 5, year: 3 },
    { name: "Дмитрий", grade: 2, year: 4 }
];

function filteredStudents(array) {
    const newMass = array
        .filter(student => student.grade > 4 && (student.year === 2 || 3))
        .map(student => student.name);
    return newMass;
};
const newArr2 = filteredStudents(students);

// 3: Фильтрация и группировка книг по авторам и жанрам:
const books = [
    { title: "Книга 1", author: "Автор 1", genre: "фантастика" },
    { title: "Книга 2", author: "Автор 2", genre: "мистика" },
    { title: "Книга 3", author: "Автор 1", genre: "история" },
    { title: "Книга 4", author: "Автор 3", genre: "фантастика" },
    { title: "Книга 5", author: "Автор 2", genre: "мистика" }
];

function bookFilter() {
    const newMass = books
        .filter(book => book.genre === 'фантастика' || book.genre === 'мистика')
        .map(book => {
            let key = book.author;
            let value = [];
            value.push(book.title);
            return { [key]: value };
        })
    return newMass;
}
const newArr3 = bookFilter();

// 4: Сортировка пользователей по возрасту и фильтрация по стране:
const users = [
    { name: "Анна", age: 25, country: "Канада" },
    { name: "Боб", age: 30, country: "Мексика" },
    { name: "Карл", age: 19, country: "США" },
    { name: "Диана", age: 22, country: "Мексика" },
    { name: "Елена", age: 29, country: "Канада" }
];
function usersFilter() {
    const newMass = users
        .filter(user => user.country === 'Канада' || user.country === 'Мексика')
        .sort((a, b) => b.age - a.age);
    return newMass;
};
const newArr4 = usersFilter();

// 5: 
// Фильтрация задач по статусу выполнения и сложности: имеется массив задач, 
// каждая задача описывается объектом с полями title, completed (булево значение), 
// и difficulty. Напишите функцию, которая возвращает названия невыполненных задач 
// с уровнем сложности выше 3.
const tasks = [
    { title: "Задача 1", completed: false, difficulty: 4 },
    { title: "Задача 2", completed: true, difficulty: 5 },
    { title: "Задача 3", completed: false, difficulty: 2 },
    { title: "Задача 4", completed: false, difficulty: 5 }
];

const notCompletedTasks = () => {
    return tasks
        .filter(task => !task.completed && task.difficulty > 3)
        .map(task => task.title);
};
const newArr5 = notCompletedTasks();

// 6: Поиск и фильтрация событий по дате и типу:
const events = [
    { name: "Событие 1", date: "2024-01-01", type: "конференция" },
    { name: "Событие 2", date: "2024-02-15", type: "выставка" },
    { name: "Событие 3", date: "2024-03-01", type: "семинар" },
    { name: "Событие 4", date: "2024-04-20", type: "конференция" }
];

function eventsFunc(date) {
    date = Number(date.split('-').join(''));
    const newMass = events
        .filter(object => {
            return (date < Number(object.date.split('-').join(''))
                && (object.type === 'конференция' || object.type === 'выставка'))
        })
        .map(object => object.name);
    return newMass;
};
const newArr6 = eventsFunc('2024-01-02');

// 7: Фильтрация чисел по нескольким условиям: Напишите функцию, которая принимает массив 
// чисел и возвращает новый массив, содержащий числа, которые делятся на 2 или 3, но не на 5.
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25];

const numbersFunc = () => {
    return numbers.filter(num => (num / 2 || num / 3) && num % 5)
};
const newArr7 = numbersFunc();

// 8: Поиск автомобилей по марке и году выпуска:
const cars = [
    { model: "Camry", make: "Toyota", year: 2015 },
    { model: "Focus", make: "Ford", year: 2013 },
    { model: "Civic", make: "Honda", year: 2012 },
    { model: "Fiesta", make: "Ford", year: 2014 },
    { model: "Accord", make: "Honda", year: 2009 }
];

function filterCars() {
    return cars
        .filter(car => (car.make === 'Toyota' || car.make === 'Ford') && car.year > 2010)
        .map(car => car.model);
};
const newArr8 = filterCars();

// 9: Фильтрация и суммирование значений:
const transactions = [
    { amount: 1500, type: "income" },
    { amount: 2000, type: "income" },
    { amount: 800, type: "expense" },
    { amount: 300, type: "expense" },
    { amount: 450, type: "expense" },
    { amount: 1200, type: "income" },
    { amount: 800, type: "income" }
];
function sumIncome() {
    return transactions
        .filter(transaction => transaction.amount > 1000)
        .reduce((acc, transaction) => acc += transaction.amount, 0)
};
const newArr9 = sumIncome();

// 10: Фильтрация массива объектов по дополнительным критериям: 
// Дан массив сотрудников, каждый сотрудник описывается объектом 
// с полями name, department, и salary. Напишите функцию, которая возвращает новый массив 
// сотрудников из отделов "маркетинг" или "продажи", чья зарплата находится в диапазоне 
// от 3000 до 5000.
const employees = [
    { name: "Иван", department: "маркетинг", salary: 4000 },
    { name: "Светлана", department: "продажи", salary: 3500 },
    { name: "Алексей", department: "разработка", salary: 5000 },
    { name: "Мария", department: "маркетинг", salary: 3200 },
    { name: "Дмитрий", department: "продажи", salary: 4500 }
];
const employeesFilter = () => {
    return employees.filter(employee => {
        return ((employee.department === 'маркетинг' || employee.department === 'продажи')
            && (employee.salary > 3000 && employee.salary < 5000))
    });
}
const newArr10 = employeesFilter();
console.log(newArr10);