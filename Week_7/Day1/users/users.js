// create function to fetch user data

// function getData(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.error(err));
// }
// getData()

// console.log(data)

const getData = async () =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data
    } catch (e) {
        console.log("error somethign went wrong");
    }
}

module.exports ={
    getData
}

    // export function with module.exports