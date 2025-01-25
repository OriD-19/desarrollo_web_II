async function getData(idUser) {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/' + idUser);
    const res = await data.json();
    
    console.log(res);
};

getData(5);