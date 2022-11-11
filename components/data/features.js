import { useState } from 'react'

let [categories] = useState({
  List: [
    {
      title: 'Bill List',
      description: 'Keep track of your budget & expense.',
      imageSrc: '/images/expenses.png',
      imageAlt: 'List',
    },
  ],
  Categories: [
    {
      title: 'Categories',
      description: 'Review your top categories, and see where your money goes.',
      imageSrc: '/images/categories.png',
      imageAlt: 'Categories',
    },
  ],
  Accounts: [
    {
      title: 'Accounts',
      description: 'All accounts organized into one place.',
      imageSrc: '/images/overview.png',
      imageAlt: 'All in one',
    },
  ],
})

export default categories;