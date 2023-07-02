import React from 'react'

export default function Categories({ value, onChangeCategory }) {

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Комбо',
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ''}>
            {item}
          </li>
        ))
        }
      </ul>
    </div>
  );
}


