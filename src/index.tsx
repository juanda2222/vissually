import React from 'react'
import styles from './styles.module.css'

import VButton from "./Buttons/VButton"

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return (
    <div>
      <div className={styles.test}>{`This is the custom wrapper >>> ${text} <<<`}</div>
    </div>
  )
   

}
export {
  ExampleComponent,
  VButton
}
