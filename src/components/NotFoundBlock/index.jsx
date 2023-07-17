import React from 'react'

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span className='element'>&#129300;</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутствует
        в нашем интернет магазине</p>
    </div>
  )
}

export default NotFoundBlock;
