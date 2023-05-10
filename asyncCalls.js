const getElixirsPromise = function() {
    return fetch('https://wizard-world-api.herokuapp.com/Elixirs')
}

const getElixirs = async function() {
    const response = await getElixirsPromise()
    const data = await response.json()
    console.log(data);
}

const getElixir = async function(id) {
    const res = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`)
    const elixir = await res.json()
    console.log(elixir)
}

getElixir('aecb6b11-d1b8-4b3d-9be1-c572932426c9')