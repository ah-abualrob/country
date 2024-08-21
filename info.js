// dark mode
let btn = document.getElementById('mode-btn');
let moonicon = document.getElementById('icon')

window.addEventListener('load', function () {
    if (localStorage.getItem('darkmode') === 'enabled') {
        document.body.classList.add('darkmode');
        moonicon.src = 'imgs/icons8-do-not-disturb-ios-50.png';
        srchicon.src = 'imgs/icons8-search-30.png';
        noimg.src = 'imgs/icons8-no-results-50(1).png';
    } else {
        document.body.classList.remove('darkmode');
        moonicon.src = 'imgs/icons8-moon-50.png';
        srchicon.src = 'imgs/search-outline.svg';
        noimg.src = 'imgs/icons8-no-results-50.png';
    }
});

btn.addEventListener('click', function () {
    document.body.classList.toggle('darkmode');

    if(document.body.classList.contains('darkmode')){
        moonicon.src = 'imgs/icons8-do-not-disturb-ios-50.png';
    }
        else {
            moonicon.src = 'imgs/icons8-moon-50.png';
        }
    
});

async function CountryInfo() {
    // get url and take name parameter يدوي
    let fullURL = window.location.search;
    let countryName = fullURL.split('=')[1];

    // fetch country
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    let data = await response.json();
    let country = data[0];

    // country information

    document.getElementById('flaginfo').src = country.flags.png;
    document.querySelector("#infoflag h2").textContent = country.name.common;
    document.getElementById('nativeName').textContent = country.name.nativeName?.eng?.common || "No Native Name";
    document.getElementById('population').textContent = `Population: ${country.population.toLocaleString()}`;
    document.getElementById('region').textContent = `Region: ${country.region}`;
    document.getElementById('subregion').textContent = `Sub Region: ${country.subregion}`;
    document.getElementById('capital').textContent = `Capital: ${country.capital ? country.capital[0] : "N/A"}`;
    document.getElementById('tld').textContent = `Top Level Domain: ${country.tld ? country.tld[0] : "N/A"}`;
    document.getElementById('currencies').textContent = `Currencies: ${country?.currencies?.SHP?.name || "No Data"} `;
    document.getElementById('languages').textContent = `Languages: ${country?.languages?.eng || "No Data"}`;
}

// بعد ما تحمل الاوبجيكت الكبير يلي هو الويندو من ضمنو الصور و كل اشي شغل الفنكشين كونتري انفو
window.addEventListener('load', CountryInfo);