//singleton
//const tinder_user=new Object() //{} empty object // singleton
const tinder_user={} //same empty object //non singleton
tinder_user.id='123abc'
tinder_user.name="maria"
tinder_user.isLoggedIn=false
// //console.log(tinder_user) //{ id: '123abc', name: 'maria', isLoggedIn: false }
// const regular_user={
//     email:"mariakhan200502@gmail.com",
//     full_name:{
//         user_full_name:{
//             first_name:"maria",
//             last_name:"khan"
//         }

//     }
// }
// console.log(regular_user.full_name.user_full_name.first_name)
// const obj1={1:"A",2:"b"}
// const obj2={3:"A",4:"b"}
// //const obj3={obj1,obj2}
// //console.log(obj3); //{ obj1: { '1': 'A', '2': 'b' }, obj2: { '3': 'A', '4': 'b' } }
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3) //{ '1': 'A', '2': 'b', '3': 'A', '4': 'b' }
// //const obj3=Object.assign({},obj1,obj2)
// //most used 
// const obj3={...obj1, ...obj2}

const users=[
    {
        id:1,
        email:"maria@gmail.com"
    },
    {
        id:1,
        email:"maria@gmail.com"
    },
    {
        id:1,
        email:"maria@gmail.com"
    },
    {
        id:1,
        email:"maria@gmail.com"
    },
]
users[1].email // array first element
//console.log(tinder_user)
console.log(Object.keys(tinder_user)) //type-array
console.log(Object.values(tinder_user))
console.log(Object.entries(tinder_user))
console.log(tinder_user.hasOwnProperty('isLoggedIn')) //true
console.log(tinder_user.hasOwnProperty('isLogged')) //false