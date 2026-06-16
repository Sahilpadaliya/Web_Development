const cityname= document.getElementById("cityname");
const click= document.getElementById("click");

const city= document.getElementById('city-name')
const citytime= document.getElementById('city-time')
const citytemp = document.getElementById('city-temp')

async function getdata(cityname){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=167e78dc8e1947afa0451037250604&q=${cityname}&aqi=yes`);
    return await promise.json() 
}
click.addEventListener('click',async ()=>{
    const value = cityname.value
    const result = await getdata(value);
    city.innerText = `${result.location.name},${result.location.region}, ${result.location.country}`
    citytime.innerText=result.location.localtime
    citytemp.innerText=result.current.temp_c
    console.log(result);     
})




