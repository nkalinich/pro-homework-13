// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:
// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>
// concat/forEach/map/filter/join

let amount = 100;

let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',240]
];

let work = monday.concat(tuesday)

.map(
    function(number) { 
      number[1]/=60;
      return number; 
    }
)

.filter(
  function(number) {
    return number[1] > 2;
  }
)

.map(
  function(number) {
    let sum = number[1] * amount;
    number.push(`${sum}$`);
    return number;
  }
)

.map(
  function(item) {
    return (`
      <tr>
        <td>Task name: ${item[0]} </td>
        <td>Taks duration: ${item[1]} </td>
        <td>Task amount: ${item[2]} </td>
      </tr>
    `)
  }
)

.join("");

document.write(`<table width="550">${work}</table>`);