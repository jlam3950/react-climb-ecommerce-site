import climbingRope from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/climbingRope.jpg';
import { nanoid } from '@reduxjs/toolkit';

const LocalStorage = [ 
    { 
    id: nanoid(),
    name: 'rope',
    price: '$199.99',
    image: climbingRope,
    description: 'why would you climb without a rope?'
    },
]


export default LocalStorage;