import React from 'react'
import { useParams } from 'react-router-dom'
import { PDFViewer } from '@react-pdf/renderer'
import _ from 'lodash'

import MathDocument from '../components/mathDocument'
import { questionGenerator } from '../helpers/questionGenerator'

const MathPage = () => {
  const { year, mathType } = useParams()

  return (
    <PDFViewer width="100%" style={{ height: '100vh' }}>
      <MathDocument
        header={_.startCase(_.toLower(mathType))}
        questions={questionGenerator({ year, mathType, size: 45 })}
      />
    </PDFViewer>
  )
}

export default MathPage
