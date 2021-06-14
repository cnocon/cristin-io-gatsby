import shuffle from './shuffle'

const getColor = (colors, colorsCopy) => {
  if (colorsCopy.length === 0) {
    colorsCopy = Object.assign([], colors)
    return shuffle(colorsCopy).pop()
  } else {
    return shuffle(colorsCopy).pop()
  }
}

export default getColor
