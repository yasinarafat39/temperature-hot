

// 1. Dot Not show API key on your js file

const API_Key = `4191698c3627e007c97646c88d23cfe7`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = (data.main.temp);
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, Text) => {
    const element = document.getElementById(id);
    element.innerText = Text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    // get the input field
    const searchField = document.getElementById('search_field');
    const searchFieldText = searchField.value;
    // get the location and set the location
    const location = document.getElementById('location');
    location.innerText = searchFieldText;
    searchField.value = '';
    loadTemperature(searchFieldText);
});

loadTemperature('dhaka');