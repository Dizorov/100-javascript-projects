const button = document.querySelector('#btn')
const body = document.querySelector('body')
const hexValue = document.querySelector('#hex-value')

const getRandomValue = (values) => {
  return values[Math.floor(Math.random() * values.length)]
}

const getColor = () => {
  const hexCodes = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  const color = ['#'];

  for(let i = 1; i <= 6; i++) {
    color.push(getRandomValue(hexCodes))
  }
  return color.join('')
}
const setColor = () => {
  body.style.backgroundColor = getColor()
  hexValue.textContent = ` ${getColor()}`
}

setColor()

button.addEventListener('click', setColor)