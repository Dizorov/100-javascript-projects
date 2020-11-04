const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['antiquewhite', 'purple', 'aqua', 'bisque', 'lightgray']
button.addEventListener('click', e => {
  body.style.backgroundColor = chooseColor(colors)
})
body.style.backgroundColor = 'aliceblue';
const chooseColor = (colors) => {
  const colorIndex = Math.floor(Math.random() * colors.length)
  return colors[colorIndex]
}