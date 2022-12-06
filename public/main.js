
window.onload = () => {
  function snakeGame() {
    let table = document.createElement('table');
    let tbody = document.createElement('tbody')

    app.append(table)
    tbody.style.height = '600px'
    table.append(tbody)

    let counter = 0;
    let counter2 = 0;


    for (let i = 0; i < 20; i += 1) {
      if (counter % 2 === 1) {
        tbody.innerHTML += '<tr class = "block" ></tr>'
      } else {
        tbody.innerHTML += '<tr class = "block color-square" ></tr>'
      }
      counter += 1;
    }

    let trElement = document.querySelector('table > tbody:only-child');
    console.log(trElement)
    for (let z = 0; z < 20; z += 1) {
      if (counter2 % 2 === 1) {
        trElement.innerHTML += '<td class = "block" ></td>'
      } else {
        trElement.innerHTML += '<td class = "block color-square" ></td>'
      }
      counter2 += 1;
    }
  }

  snakeGame()
}


/*
let td = document.createElement('td');
let tr = document.createElement('tr');
*/
