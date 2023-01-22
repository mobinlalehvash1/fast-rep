const $ = document;
const _log = console.log;

const inputElem = $.querySelector("input");
const todosContainer = $.querySelector("ul");

// const trim = val => val.trim()

// const toLowerCase = val => val.toLowerCase()

// const insertInListItem = (todoValue) => {
//     let newTodoLiElem = $.createElement('li')
//     newTodoLiElem.className = 'item-list'

//     let newTodoSpan = $.createElement('span')
//     newTodoSpan.innerHTML = todoValue

//     let newTodoTrashIcon = $.createElement('i')
//     newTodoTrashIcon.className = 'fa fa-trash-o delete trashBin'

//     newTodoLiElem.append(newTodoSpan, newTodoTrashIcon)

//     return newTodoLiElem
// }

// inputElem.addEventListener('keypress', (event) => {
//     if (event.keyCode === 13) {
//         let newTodoValue = event.target.value

//         let newTodoLI = insertInListItem(toLowerCase(trim(newTodoValue)))

//         todosContainer.appendChild(newTodoLI)

//         inputElem.value = ''
//     }

// })

const trimHandler = (val) => val.trim();
const lowerCaseHandler = (val) => val.toLowerCase();

const insertInListItemHandler = (todoVal) => {
  let liElem = $.createElement("li");
  liElem.className = "item-list";

  let spanElem = $.createElement("span");
  spanElem.textContent = todoVal;

  let iElem = $.createElement("i");
  iElem.className = "fa fa-trash-o delete trashBin";

  liElem.append(spanElem, iElem);
  return liElem;
};

inputElem.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    let newTodoValues = event.target.value;

    // _log(lowerCaseHandler(trimHandler(newTodoValues)))

    // todosContainer.insertAdjacentHTML("beforeend",
    // `<li class="item-list">
    //     <span>${newTodoValues}</span>
    //     <i class="fa fa-trash-o delete trashBin"></i>
    // </li>`)

    // let liElem = $.createElement("li")
    // liElem.className = "item-list"

    // let spanElem = $.createElement("span")
    // spanElem.textContent = newTodoValues

    // let iElem = $.createElement("i")
    // iElem.className = "fa fa-trash-o delete trashBin"

    // liElem.append(spanElem, iElem)
    // todosContainer.appendChild(liElem)

    // let newTodoLi = insertInListItemHandler(newTodoValues)
    let newTodoLi = insertInListItemHandler(
      lowerCaseHandler(trimHandler(newTodoValues))
    );
    todosContainer.appendChild(newTodoLi);

    event.target.value = "";
  }
});

////-------------------------

// ---------- chart js ----------

// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'x'],
//         // datasets: [{
//         //     label: '# of Vote',
//         //     data: [12, 19, 3, 5, 2, 3, 10],
//         //     backgroundColor: [
//         //         'rgba(255, 99, 132, 0.2)',
//         //         'rgba(54, 162, 235, 0.2)',
//         //         'rgba(255, 206, 86, 0.2)',
//         //         'rgba(75, 192, 192, 0.2)',
//         //         'rgba(153, 102, 255, 0.2)',
//         //         'rgba(255, 159, 64, 0.2)',
//         //         'rgba(125, 159, 64, 0.2)',
//         //     ],
//         //     borderColor: [
//         //         'rgba(255, 99, 132, 1)',
//         //         'rgba(54, 162, 235, 1)',
//         //         'rgba(255, 206, 86, 1)',
//         //         'rgba(75, 192, 192, 1)',
//         //         'rgba(153, 102, 255, 1)',
//         //         'rgba(255, 159, 64, 1)',
//         //         'rgba(125, 159, 64, 1)',
//         //     ],
//         //     borderWidth: 1
//         // }]

//         labels: ['one', 'two', 'there', 'four', 'five', 'six', 'seven'],
//         datasets: [{
//           label: 'euro',
//           data: [12, 19, 3, 5, 2, 3, 10],
//           backgroundColor: ['rgba(255, 99, 132, 0.5)',],
//           borderColor: ['rgba(255, 99, 132, 1)',],
//           borderWidth: 2
//       },
//       {
//         label: 'dollar',
//         data: [40, 100, 63, 105, 108.5, 83, 90],
//         backgroundColor: ['rgba(54, 162, 235, 0.5)',],
//         borderColor: ['rgba(54, 162, 235, 1)',],
//         borderWidth: 2
//       }
//     ]
//   },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//       plugins: {
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             text: 'Chart.js Line Chart'
//           }
//         }
//     }
//});

////-----------------------------------------

// myChart1

const ctx = document.getElementById('myChart1').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['one', 'two', 'there', 'four', 'five', 'six', 'seven'],

      datasets: [{
          // stepped: true,
          label: 'euro',
          data: [12, 16, 3, 5, 2, 3, 10],
          backgroundColor: ['rgba(255, 99, 132, 0.3)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 2,
          // fill: true,
          pointRadius: 4, // point size (default 3)
          pointHoverRadius: 6,
          yAxisID: 'usersY'
      },
      {
        label: 'dollar',
        data: [40, 100, 63, 100, 108.5, 83, 90],
        backgroundColor: ['rgba(54, 162, 235, 0.3)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 2,
        // fill: true,
        // tension: 0.4, // border radius line chart
        pointRadius: 4, // point size (default 3)
        pointHoverRadius: 6,
        yAxisID: 'saleY'
      },
      {
        label: 'x',
        data: [50, 60, 90, 70, 70.5, 60, 120],
        backgroundColor: ['rgba(44, 100, 235, 0.3)'],
        borderColor: ['rgba(44, 100, 235, 0.3)'],
        borderWidth: 2,
        // fill: true,
        borderDash: [5, 5],
        pointRadius: 4, // point size (default 3)
        pointHoverRadius: 6,
        borderRadius: 5, // border radius bar chart
        yAxisID: 'saleY'
      },
    ]
  },
  options: {
    // indexAxis: 'y', // chart left to right
      scales: {
          usersY: {
              position: 'left',
              max: 40,
              // reverse: true // chart top to bottom
          },
          saleY: {
              position: 'right',
              min: 30,
              max: 150,
              grid: {
                  display: false
              },
              // reverse: true // chart top to bottom
          }
      },
      
      plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Line Chart 1'
                }
              },
              // animations: {
              //   tension: {
              //     duration: 1500,
              //     easing: 'linear',
              //     from: 1,
              //     to: 0,
              //     loop: false
              //   }
              // },
  }
});

////-----------------------------------------

// myChart2

const ctx2 = document.getElementById('myChart2').getContext('2d');

const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['one', 'two', 'there', 'four', 'five', 'six', 'seven'],

      datasets: [{
          // stepped: true,
          label: 'euro',
          data: [12, 19, 3, 30, 2, 22, 10],
          backgroundColor: ['rgba(39, 44, 66, 0.3)'],
          borderColor: ['rgba(39, 44, 66, 1)'],
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          yAxisID: 'usersY'
      },
      {
        label: 'x',
        data: [50, 60, 90, 70, 70.5, 60, 120],
        backgroundColor: ['rgba(48, 83, 49, 0.3)'],
        borderColor: ['rgba(48, 83, 49, 0.3)'],
        borderWidth: 2,
        fill: true,
        // borderDash: [5, 5],
        pointRadius: 4, // point size (default 3)
        pointHoverRadius: 7,
        borderRadius: 5, // border radius bar chart
        tension: 0.4,
        yAxisID: 'saleY'
      },
    ]
  },
  options: {
    // indexAxis: 'y', // chart left to right
      scales: {
          usersY: {
              position: 'left',
              max: 40,
              // reverse: true // chart top to bottom
          },
          saleY: {
              position: 'right',
              min: 30,
              max: 150,
              grid: {
                  display: false
              },
              // reverse: true // chart top to bottom
          }
      },
      
      plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Line Chart 2'
                }
              },
  }
});

////-----------------------------------------

// myChart3

const ctx3 = document.getElementById('myChart3').getContext('2d');

const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['one', 'two', 'there', 'four', 'five', 'six', 'seven'],

      datasets: [{
          label: 'euro',
          data: [12, 16, 3, 5, 2, 3, 10],
          backgroundColor: ['rgba(255, 99, 132, 0.3)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 2,
          borderRadius: 5,
          yAxisID: 'usersY'
      },
      {
        label: 'dollar',
        data: [40, 100, 63, 100, 108.5, 83, 90],
        backgroundColor: ['rgba(54, 162, 235, 0.3)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 2,
        borderRadius: 5,
        yAxisID: 'saleY'
      },
      {
        label: 'x',
        data: [50, 60, 90, 70, 70.5, 60, 120],
        backgroundColor: ['rgba(44, 100, 235, 0.3)'],
        borderColor: ['rgba(44, 100, 235, 1)'],
        borderWidth: 2,
        borderDash: [5, 5],
        borderRadius: 5, // border radius bar chart
        yAxisID: 'saleY'
      },
    ]
  },
  options: {
      scales: {
          usersY: {
              position: 'left',
              max: 40,
          },
          saleY: {
              position: 'right',
              min: 30,
              max: 150,
              grid: {
                  display: false
              },
          }
      },
      
      plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Line Chart 3'
                }
              },
  }
});

////-----------------------------------------

// myChart4

const ctx4 = document.getElementById('myChart4').getContext('2d');

const myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
      labels: ['one', 'two', 'there', 'four', 'five', 'six', 'seven'],

      datasets: [{
          label: 'euro',
          data: [31, 28, 36, 15, 13, 9, 16],
          backgroundColor: ['rgba(86, 76, 229, 0.3)'],
          borderColor: ['rgba(86, 76, 229, .9)'],
          borderWidth: 2,
          fill: true,
          pointRadius: 4, // point size (default 3)
          pointHoverRadius: 6,
          tension: .4,
          yAxisID: 'usersY'
      },
    ]
  },
  options: {
      scales: {
          usersY: {
              position: 'left',
              min: 0,
              max: 40,
          },
      },
      
      plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Line Chart 4'
                }
              },
  }
});

////-----------------------------------------

// myChart5

const ctx5 = document.getElementById('myChart5').getContext('2d');

const myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
      labels: ['one', 'two', 'there', 'four', 'five', 'six', 'seven'],

      datasets: [{
          label: 'euro',
          data: [31, 28, 36, 15, 13, 9, 16],
          backgroundColor: [
                            'rgba(255, 99, 132, 0.25)',
                            'rgba(54, 162, 235, 0.25)',
                            'rgba(255, 206, 86, 0.25)',
                            'rgba(75, 192, 192, 0.25)',
                            'rgba(153, 102, 255, 0.25)',
                            'rgba(255, 159, 64, 0.25)',
                            'rgba(125, 159, 64, 0.25)',
                        ],
          borderColor: ['rgba(230, 230, 230, 1)'],
          borderWidth: 3,
          fill: true,
          pointRadius: 4, // point size (default 3)
          pointHoverRadius: 6,
          tension: .4,
          yAxisID: 'usersY'
      },
    ]
  },
  options: {
      scales: {
          usersY: {
              position: 'left',
              min: 0,
              max: 40,
          },
      },
      
      plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Line Chart 4'
                }
              },
  }
});

////-----------------------------------------

// --------------- ckeditor5 ---------------

// https://privadovpn.com/free-account/

let editorFetchData = $.querySelector("#editor-fetch-data")
let editorButton = $.querySelector("#editor-button")
let myEditior;

ClassicEditor
        .create( document.querySelector( '#editor' ), {
          language: "fa",
          // toolbar: ["bold", "|", "italic", "|", "blockQuote"]
        })
        .then(editor => {
          _log(editor)
          myEditior = editor
        })
        .catch( error => {
            console.error( error );
        } );

editorButton.addEventListener("click", () => {
  _log(myEditior.getData())
  editorFetchData.insertAdjacentHTML("beforeend", myEditior.getData())
})

