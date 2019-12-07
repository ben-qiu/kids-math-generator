import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'

import MathDocument from '../components/mathDocument'
import { additionGenerator } from '../helpers/questionGenerator'

const MathPage = () => {
  return (
    <PDFViewer width="100%" style={{ height: '100vh' }}>
      <MathDocument header="Addition" questions={additionGenerator(45)} />
    </PDFViewer>
  )
}

export default MathPage
