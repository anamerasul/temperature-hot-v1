console.log('con');

const API_KEY=`073cd5f82e0f14f301c319c96f302c12`

const searchTempareture= async()=>{
       const city=document.getElementById('city-name');

       const cityValue=city.value;
       console.log(cityValue);

       const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`

       console.log(url);
// const url_two= await url
//        fetch(url)
//        .then(res=>res.json())
//        .then(data =>displayTempareture(data))

const res =await fetch(url);
const data= await res.json();
const load = displayTempareture(data)

city.value=``;
}

const setInnerText=(id,text)=>{
        document.getElementById(id).innerText=text
}

const displayTempareture=tempareture=>{
console.log(tempareture);
setInnerText('city',tempareture.name)
setInnerText('temp',tempareture.main.temp)
setInnerText('temp-condition',tempareture.weather[0].main);

//set weather icon
const url =`http://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`

const imgIcon=document.getElementById('w-icon');
imgIcon.setAttribute('src',url)
}