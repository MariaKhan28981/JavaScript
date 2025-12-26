const shopping_cart=[
    {
        item:"shampoo",
        price:280

    },
    {
        item:"conditioner",
        price:180

    },
    {
        item:"hair oil",
        price:100

    },
    {
        item:"moisturizer",
        price:300

    },
    {
        item:"perfume",
        price:480

    },
]
const total=shopping_cart.reduce((acc,item)=>acc+item.price,0)
 console.log(total)