import { nanoid } from '@reduxjs/toolkit';
import climbingRope from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/climbingRope.jpg';
import climbingRope2 from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/red_climbRope.jpg';
import climbingRope3 from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/climbingRope_neon.jpg';


const LocalStorage = [ 
    { 
    id: nanoid(),
    quantity: 1,
    name: 'blue rope',
    price: 199.99,
    image: climbingRope,
    description: 'why would you climb without a rope?',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'red rope',
    price: 249.99,
    image: climbingRope2,
    description: 'why blue, when you can go red. pick me.',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'neon rope',
    price: 49.99,
    image: climbingRope3,
    description: 'neon means danger. do you live dangerously?',
    favorite: false,
    },
]


export default LocalStorage;