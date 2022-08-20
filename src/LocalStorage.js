import { nanoid } from '@reduxjs/toolkit';
import climbingRope from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/climbingRope.jpg';
import climbingRope2 from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/red_climbRope.jpg';
import climbingRope3 from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/climbingRope_neon.jpg';
import approachshoemen from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/approachshoemen.jpg';
import approachshoepink from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/approachshoepink.jpg';
import atc from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/atc.jpg';
import BDcrashpad from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/BDcrashpad.jpg';
import BDmenclimbingshoe from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/BDmenclimbingshoe.jpg';
import BDwomenclimbingshoe from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/BDwomensclimbingshoe.jpg';
import blackharness from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/blackharness.jpg';
import blackRope from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/blackRope.jpg';
import camalot from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/camalot.jpg';
import chalkbag from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/chalkbag.jpg';
import greyhelm from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/greyhelm.jpg';
import rackpack from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/rackpack.jpg';
import redblackharness from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/redblackharness.jpg';
import ropeMarker from '/Users/Jeff/Desktop/personalprojects/climbing-ecommerce/src/images/product_images/ropeMarker.jpg';


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
    { 
    id: nanoid(),
    quantity: 1,
    name: 'approach shoe (M)',
    price: 79.99,
    image: approachshoemen,
    description: 'crush the crag in these sweet approach shoes',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'approach shoe (W)',
    price: 79.99,
    image: approachshoepink,
    description: 'crush the crag in these sweet approach shoes',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'atc',
    price: 29.99,
    image: atc,
    description: 'belay/rapel device',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'black diamond crash pad',
    price: 299.99,
    image: BDcrashpad,
    description: 'big, fluffy crash pad for bouldering',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'Climbing Shoe (M)',
    price: 149.99,
    image: BDmenclimbingshoe,
    description: 'A shoe for all climbing occasions',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'Climbing Shoe (W)',
    price: 149.99,
    image: BDwomenclimbingshoe,
    description: 'A shoe for all climbing occasions',
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
    { 
    id: nanoid(),
    quantity: 1,
    name: 'neon rope',
    price: 49.99,
    image: climbingRope3,
    description: 'neon means danger. do you live dangerously?',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'Climbing Harness',
    price: 89.99,
    image: blackharness,
    description: 'durable, trustworthy harness',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'Climbing Harness',
    price: 49.99,
    image: redblackharness,
    description: 'durable, trustworthy harness',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'black rope',
    price: 199.99,
    image: blackRope,
    description: 'stealthy climbing rope',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'Big Cam',
    price: 129.99,
    image: camalot,
    description: 'necessary for climbing trad?',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'chalkbag',
    price: 19.99,
    image: chalkbag,
    description: 'keep your chalk here',
    favorite: false,
    },
    { 
    id: nanoid(),
    quantity: 1,
    name: 'helmet (grey)',
    price: 79.99,
    image: greyhelm,
    description: 'proven to reduce head injury',
    favorite: false,
    },
    {
    id: nanoid(),
    quantity: 1,
    name: 'ropeMarker',
    price: 10,
    image: ropeMarker,
    description: 'perfect for marking your rope',
    favorite: false,
    },
    {
    id: nanoid(),
    quantity: 1,
    name: 'BD rack pack',
    price: 15.99,
    image: rackpack,
    description: 'great utility for many situations',
    favorite: false,
    },
]


export default LocalStorage;