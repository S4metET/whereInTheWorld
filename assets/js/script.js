const filePath = "https://restcountries.com/v3.1/all";

const countries = [];
const productsDiv = document.querySelector(".productsDiv");

async function getCountries(){
    try{
        productsDiv.innerHTML = `<i id="loading" class="fa-solid fa-spinner fa-spin"></i>`;
        const response = await fetch(filePath);
        if(!response.ok){
            throw new Error("Veri Alınamadı.");
        }
        const data = await response.json();
        countries.push(...data);
        renderCountries();
    }
    catch(error){
        console.log(error);
    }
}
function renderCountries(){
    productsDiv.innerHTML="";
    countries.forEach(country =>{
        productsDiv.innerHTML += `
            <div class="product">
                <img src="${country.flags.png}">
                <div class="product-detail">
                    <h2>${country.name.common}</h2>
                    <p>Population: <span>${country.region}</span></p>
                    <p>Region: <span>${country.region}</span></p>
                    <p>Capital: <span>${country.capital}</span></p>
                </div>
            </div>
        `
    })
}
getCountries();