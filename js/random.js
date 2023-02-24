const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const randomGender = document.getElementById('gender')
    randomGender.innerHTML = user.results[0].gender;

    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    const city = user.results[0].location.city;
    document.getElementById('city').innerHTML = city;



}


loadUser();