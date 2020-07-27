import * as React from 'react'

import styles from './VButton.module.css'


//HTMLButtonElement

const clicked_button = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  console.log(event)
}

export default ({ children }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>)  => {
  return (
    <div onClick={clicked_button}>
      <button onMouseDown={(e) => { console.log(e)}} className={styles.button}>{children}</button>
    </div>
  )
}
