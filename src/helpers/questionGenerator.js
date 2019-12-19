import _ from 'lodash'

const additionGenerator = ({year, size}) => {
  const result = []
  _.times(size, () => {
    const a  = randomIntFromInterval(1, 19)
    const b = randomIntFromInterval(1, (20 - a))
    result.push(`${a} + ${b} =`)
  })
  return result
}

const subtractionGenerator = ({year, size}) => {
  const result = []
  _.times(size, () => {
    const a  = randomIntFromInterval(1, 19)
    const b = randomIntFromInterval(1, Math.min(10, a))
    result.push(`${a} - ${b} =`)
  })
  return result
}

const questionGenerator = ({year, mathType, size}) => {
  if (mathType === 'addition') {
    return additionGenerator({year, size})
  }
  if (mathType === 'subtraction') {
    return subtractionGenerator({year, size})
  }
}

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export { additionGenerator, subtractionGenerator, questionGenerator }
