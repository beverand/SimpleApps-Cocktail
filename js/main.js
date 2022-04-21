document.querySelector('button').addEventListener('click', getDrink)
document.querySelector('#nxt').addEventListener('click', rotater)
let dat = null
let num = 0

function getDrink(){
  let drink = document.querySelector('input').value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        dat = data
        num = data.drinks.length - 1
        console.log(data.length - 1)
        document.querySelector('img').src = dat.drinks[0].strDrinkThumb
        document.querySelector('h2').innerText = dat.drinks[0].strDrink
        document.querySelector('h3').innerText = dat.drinks[0].strInstructions
             })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

function rotater(){
    //let nxtdrink = data.drinks.length
    num > 0 ? num-= 1: num = dat.drinks.length - 1
    document.querySelector('img').src = dat.drinks[num].strDrinkThumb
    document.querySelector('h2').innerText = dat.drinks[num].strDrink
    document.querySelector('h3').innerText = dat.drinks[num].strInstructions
      // let drinking = data.length
}
