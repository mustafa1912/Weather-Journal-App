/* Global Variables */
const URL = 'https://api.openweathermap.org/data/2.5/weather?zip=',
    APIKey = ',&appid=2edb3f900590a4190df0414245ae21b4&units=imperial';
//Date
let d = new Date();
let newDate = d.toDateString();
//element HTML
const generate = document.getElementById('generate'),
    zip = document.getElementById('zip'),
    feelings = document.getElementById('feelings');

generate.addEventListener('click', action)

function action() {
    const zipCode = zip.value,
        content = feelings.value,
        fullURL = URL + zipCode + APIKey;
    //get data from API & send it to server & get it & show it at the screen
    fetchData(fullURL).then(function(data) {
        postdata('/postData', { date: newDate, temp: data.main.temp, feelings: content })
    }).then(() => updateUI());
};

//get get data from api
const fetchData = async(fullURL) => {
    const res = await fetch(fullURL);
    console.log("the id fetch");

    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const postdata = async(url = " ", info = {}) => {
    const res = await fetch(url, {
        method: "POST",
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(info),
    })

    try {
        console.log("the data is posted");
    } catch (error) {
        console.log(error);
    }

}

//Dynamically Update UI
const updateUI = async() => {
    const res = await fetch('/getData'),

        date = document.getElementById('date'),
        temp = document.getElementById('temp'),
        content = document.getElementById('content');

    try {
        const getdata = await res.json();
        //show data at screen 
        date.innerHTML = "the data is : " + getdata.date;
        temp.innerHTML = "the temp is : " + getdata.temp;
        content.innerHTML = "your feeling is :" + getdata.feelings;
    } catch (error) {
        console.log(error);
    }
}


const body = document.getElementById('body')
if ((d.getHours() > 6) && (d.getHours() < 17)) {
    body.style.backgroundImage = " url(pexels-chelsea-cook-3970000.jpg)";
    body.style.backgroundImageSize = "contain"
} else {
    body.style.backgroundImage = "url(pexels-eberhard-grossgasteiger-1624438.jpg)";
}