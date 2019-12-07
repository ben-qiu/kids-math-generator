import _ from 'lodash'

const additionGenerator = size => {
  const result = []
  _.times(size, () => {
    result.push(`${randomIntFromInterval(1, 19)} + ${randomIntFromInterval(1, 9)} =`)
  })
  return result
}

const subtractionGenerator = size => {
  const result = []
  _.times(size, () => {
    result.push(`${randomIntFromInterval(1, 19)} + ${randomIntFromInterval(1, 9)} =`)
  })
  return result
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { additionGenerator, subtractionGenerator }
