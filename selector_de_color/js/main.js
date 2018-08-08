const red = document.getElementById('red')
const blue = document.getElementById('blue')
const green = document.getElementById('green')

const rootStyles = document.documentElement.style

console.log(rootStyles)

const changeColorRed = (e) => {
  rootStyles.setProperty('--red', e.target.value)
}
const changeColorGreen = (e) => {
  rootStyles.setProperty('--green', e.target.value)
}
const changeColorBlue = (e) => {
  rootStyles.setProperty('--blue', e.target.value)
}

red.addEventListener('change', (e) => {
  changeColorRed(e)
})
red.addEventListener('mousemove', (e) => {
  changeColorRed(e)
})

green.addEventListener('change', (e) => {
  changeColorGreen(e)
})
green.addEventListener('mousemove', (e) => {
  changeColorGreen(e)
})

blue.addEventListener('change', (e) => {
  changeColorBlue(e)
})
blue.addEventListener('mousemove', (e) => {
  changeColorBlue(e)
})
