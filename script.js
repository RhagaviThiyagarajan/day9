var request=new XMLHttpRequest()
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function()
{
    var data=JSON.parse(request.response);
console.log(data);
// for(i=0;i<data.length;i++)
// {
//     console.log(`CountryName: ${data[i].name} Capital:${data[i].capital} flag:${data[i].flag}}`)
// }



//1)Get all the countries from Asia continent /region using Filter function

var asia= data.filter(function (country)
{
    return country.region=="Asia"|| country.subregion=="Asia";
});
 

//2)Get all the countries with a population of less than 2 lakhs using Filter function
var population=data.filter(function (population)
{
    return population.region.population<200000;
});

//3)Print the following details name, capital, flag using forEach function
var details=data.forEach(function (usingforeach)
{
   return(`name:${usingforeach.name} capital:${usingforeach.capital} flag:${usingforeach.flag}`)
});

//Print the total population of countries using reduce function

var totalpopulation=data.reduce(total);
console.log( totalPopulation);

}




function total (sum,country)
var totalpopulation=0;
if(total.population)
{
totalpopulation=sum.population;
}
else
{
    totalpopulation=sum;
}
return totalpopulation + country.population;
