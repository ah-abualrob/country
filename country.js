let btn = document.getElementById('mode-btn');
let moonicon = btn.querySelector('img');
let srchicon = document.getElementById('srch-img') 
let noimg = document.getElementById('noimg')
let filterselect = document.getElementById('country-srh')
let options = document.getElementById('options')
let select = document.getElementById('select')
let srhflg = document.getElementById('srh-flg')


filterselect.addEventListener('click', function(){
    options.classList.toggle('options');
})

/* Dark mode local storge */
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
    
    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('darkmode', 'enabled');
        moonicon.src = 'imgs/icons8-do-not-disturb-ios-50.png';
        srchicon.src = 'imgs/icons8-search-30.png';
        noimg.src = 'imgs/icons8-no-results-50(1).png';
    } else {
        localStorage.setItem('darkmode', 'disabled');
        moonicon.src = 'imgs/icons8-moon-50.png';
        srchicon.src = 'imgs/search-outline.svg';
        noimg.src = 'imgs/icons8-no-results-50.png';
    }
});


const countrySelect = document.getElementById('country-srh');
let selectedValue;

let srch = document.getElementById("srch");
let searchValue;

const result = async (selectedValue, searchValue) => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    let flagsContainer = document.getElementById("flags");
    let flagsHTML = "";

    for (let a = 0; a < data.length; a++) {
        // فلتر السيليكت
        if (selectedValue && (data[a].region !== selectedValue)) {
            continue;
        }

        // فلتر السيرتش
        if (searchValue && (!data[a].name.common.toLowerCase().includes(searchValue.toLowerCase()))) {
            continue;
        }

        flagsHTML += `
            <div id="flags">
                <a href="countryinfo.html?name=${encodeURIComponent(data[a].name.common)}" id="afgo" class="afgo">
                    <img id="image" src="${data[a].flags.png}" alt="Flag of ${data[a].name.common}">
                    <div class="text">
                        <h4 id="country-name">${data[a].name.common}</h4>
                        <p id="population">Population: ${data[a].population}</p>
                        <p id="region">Region: ${data[a].region}</p>
                        <p id="capital">Capital: ${data[a].capital ? data[a].capital[0] : "N/A"}</p>
                    </div>
                </a>
            </div>
        `;
    }
    
    flagsContainer.innerHTML = flagsHTML;

    if(flagsHTML === ''){
        flagsHTML +=
        `
            <div id="nores">
                No results found <br>
                <img src="imgs/icons8-no-results-50.png" alt="" id = 'noimg'>
            </div>
            
        `;
    }
    flagsContainer.innerHTML = flagsHTML;
};



options.addEventListener('click', (event) => {
    if (event.target.classList.contains('options-hov')) {
        const selectedValue = event.target.getAttribute('value');
        const selectedOption = document.getElementById('selected-option');



        selectedOption.innerHTML = `<span>${selectedValue}</span>`
        
        result(selectedValue, searchValue);
    }
});
srch.addEventListener("input", function(){
    searchValue = srch.value;
    result(selectedValue, searchValue);
});

result(selectedValue, searchValue);

// -----------------------------------------------------------------------------


// let btn = document.getElementById('mode-btn');

// btn.addEventListener('click', function () {
//     document.body.classList.toggle('darkmode');
// });

// const countrySelect = document.getElementById('country-srh');
// let selectedValue

// let srch = document.getElementById("srch")
// let searchValue 


// const result = async (selectedValue, searchValue) => {
//     const response = await  fetch("https://restcountries.com/v3.1/all");
//     let data = await response.json();

//     let flagsContainer = document.getElementById("flags");
//     let flagsHTML = ""

//     for (let a = 0; a < data.length; a++) {
//         // فلتر السيليكت
//         if (data[a].region === selectedValue) {
//             flagsHTML += `
//             <div id="flags">
//                 <a href="" id="afgo" class="afgo">
//                     <img id="image" src="${data[a].flags.png}" alt="Flag of ${data[a].name.common}">
//                     <div class="text">
//                         <h4 id="country-name">${data[a].name.common}:</h4>
//                         <p id="population">Population: ${data[a].population}</p>
//                         <p id="region">Region: ${data[a].region}</p>
//                         <p id="capital">Capital: ${data[a].capital ? data[a].capital[0] : "N/A"}</p>
//                     </div>
//                 </a>
//             </div>
//         `;
//         } else if (!selectedValue) {
//             flagsHTML += `
//             <div id="flags">
//                 <a href="" id="afgo" class="afgo">
//                     <img id="image" src="${data[a].flags.png}" alt="Flag of ${data[a].name.common}">
//                     <div class="text">
//                         <h4 id="country-name">${data[a].name.common}:</h4>
//                         <p id="population">Population: ${data[a].population}</p>
//                         <p id="region">Region: ${data[a].region}</p>
//                         <p id="capital">Capital: ${data[a].capital ? data[a].capital[0] : ""}</p>
//                     </div>
//                 </a>
//             </div>
//         `;
//         }
//         console.log((searchValue,656565, data[a].name.common));
        
//         if(searchValue === data[a].name.common){
//             flagsHTML += `
//             <div id="flags">
//                 <a href="" id="afgo" class="afgo">
//                     <img id="image" src="${data[a].flags.png}" alt="Flag of ${data[a].name.common}">
//                     <div class="text">
//                         <h4 id="country-name">${data[a].name.common}:</h4>
//                         <p id="population">Population: ${data[a].population}</p>
//                         <p id="region">Region: ${data[a].region}</p>
//                         <p id="capital">Capital: ${data[a].capital ? data[a].capital[0] : ""}</p>
//                     </div>
//                 </a>
//             </div>
//         `;
//         }
    
//     }


    
    
//     flagsContainer.innerHTML = flagsHTML;
// };
// countrySelect.addEventListener('change', () => {
//     selectedValue = countrySelect.value;
//     result(selectedValue, searchValue);
// });
// result(selectedValue, searchValue);



// let America = document.getElementById('America')
//     if(selectedValue === America) {
//         flagsContainer.textContent = 'This page it empty'
//     }

// srch.addEventListener("change", () =>{
//     searchValue = srch.value
//     console.log(searchValue);
//     result(selectedValue, searchValue);
// })














// let btn = document.getElementById('mode-btn');
// btn.addEventListener('click', function () {
//     document.body.classList.toggle('darkmode');
// });

// const countrySelect = document.getElementById('country-srh');
// let selectedValue;
// let srch = document.getElementById("srch");
// let searchValue;

// const fetchData = async () => {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const data = await response.json();
//     return data;
// }

// const renderFlags = (data, selectedValue, searchValue) => {
//     let flagsContainer = document.getElementById("flags");
//     let flagsHTML = "";

//     for (let a = 0; a < data.length; a++) {
//         if ((selectedValue && data[a].region !== selectedValue) || (searchValue && !data[a].name.common.toLowerCase().includes(searchValue.toLowerCase()))) {
//             continue;
//         }
        
//         flagsHTML += `
//             <div id="flags">
//                 <a href="" id="afgo" class="afgo">
//                     <img id="image" src="${data[a].flags.png}" alt="Flag of ${data[a].name.common}">
//                     <div class="text">
//                         <h4 id="country-name">${data[a].name.common}:</h4>
//                         <p id="population">Population: ${data[a].population}</p>
//                         <p id="region">Region: ${data[a].region}</p>
//                         <p id="capital">Capital: ${data[a].capital ? data[a].capital[0] : "N/A"}</p>
//                     </div>
//                 </a>
//             </div>
//         `;
//     }

//     flagsContainer.innerHTML = flagsHTML;
// };

// const initialize = async () => {
//     const data = await fetchData();

//     countrySelect.addEventListener('change', () => {
//         selectedValue = countrySelect.value;
//         renderFlags(data, selectedValue, searchValue);
//     });

//     srch.addEventListener("input", () => {
//         searchValue = srch.value;
//         renderFlags(data, selectedValue, searchValue);
//     });

//     renderFlags(data, selectedValue, searchValue);
// };

// initialize();








// /*------------------------------*/
// document.querySelectorAll(".option-placeholder").forEach(op => {
//     op.setAttribute("selected", "");
//     op.setAttribute("disabled", "");
//     op.setAttribute("hidden", "");
//   });
  
//   document.querySelectorAll(".form-select-container").forEach(sc => {
//     let select_html = sc.querySelector("select");
    
//     let select = document.createElement("div");
//     select.classList.add("form-select");
    
//     let option_wrapper = document.createElement("div");
//     option_wrapper.classList.add("form-option-wrapper");
    
//     let option_placeholder = document.createElement("div");
//     option_placeholder.classList.add("form-option-placeholder");
//     option_placeholder.textContent = sc.querySelector(".option-placeholder").textContent;
//     option_placeholder.setAttribute("data-default", sc.querySelector(".option-placeholder").textContent);
    
//     let option_placeholder_container = document.createElement("div");
//     option_placeholder_container.classList.add("form-option-placeholder-container");
//     option_placeholder_container.appendChild(option_placeholder);
//     option_wrapper.appendChild(option_placeholder_container);
    
//     let option_container = document.createElement("div");
//     option_container.classList.add("form-option-container");
    
//     Array.from(select_html.children)
//       .filter(o => {return !o.classList.contains("option-placeholder")})
//       .forEach(o => {
//       let option = document.createElement("div");
//       option.classList.add("form-option");
//       //if (o.classList.contains("form-option-placeholder")) option.classList.add("form-option-placeholder");
//       option.textContent = o.textContent;
//       option_container.appendChild(option);
//     });
    
//     option_wrapper.appendChild(option_container);
    
//     let select_option_placeholder = option_placeholder.cloneNode(true);
    
//     select.appendChild(select_option_placeholder);
//     select.appendChild(option_wrapper);
//     sc.appendChild(select);
//   });
  
//   document.querySelectorAll(".form-select-container > .form-select > .form-option-placeholder").forEach(f_o_p => {
//     f_o_p.addEventListener("click", openOptionList);
//     f_o_p.addEventListener("blur", closeOptionList, true);
//     f_o_p.closest(".form-select").querySelector(".form-option-wrapper").querySelectorAll(".form-option-placeholder-container > .form-option-placeholder, .form-option-container > .form-option").forEach(f_o => f_o.addEventListener("click", closeOptionList));
//   });
  
//   function openOptionList(e) {
//     let form_select_container = e.currentTarget.closest(".form-select-container");
//     form_select_container.classList.add("active");
    
//     let form_option_container = e.currentTarget.closest(".form-select").querySelector(".form-option-wrapper > .form-option-container");
//     form_option_container.style.height = "calc(" + form_option_container.scrollHeight + "px + 1rem)";
//     //form_option_container.style.height = "calc(100px + 1rem)";
//   }
  
//   function closeOptionList(e) {
//     let form_select_container = e.currentTarget.closest(".form-select-container");
//     form_select_container.classList.remove("active");
    
//     let form_option_container = e.currentTarget.closest(".form-select").querySelector(".form-option-wrapper > .form-option-container");
//     form_option_container.style.height = 0;
//   }
  
//   //document.querySelectorAll(".form-select-container > .form-select > .form-option-wrapper > .form-option-placeholder-container > .form-option-placeholder, .form-select-container > .form-select > .form-option-wrapper > .form-option-container > .form-option").forEach(f_o => f_o.addEventListener("click", (e) => updateOption));
  
//   document.querySelectorAll(".form-select-container > .form-select > .form-option-wrapper").forEach(f_o_w => {
//     let form_options = f_o_w.querySelectorAll(".form-option-placeholder-container > .form-option-placeholder, .form-option-container > .form-option");
    
//     form_options.forEach(option => {
//       option.addEventListener("click", (e) => updateOption(e, form_options));
//     });
//   });
  
//   function updateOption(e, options) {
//     let form_option_placeholder = e.currentTarget.closest(".form-select").querySelector(".form-option-placeholder");
//     form_option_placeholder.textContent = e.currentTarget.textContent;
  
//     let select_html = e.currentTarget.closest(".form-select-container").querySelector("select");
    
//     if (e.currentTarget.classList.contains("form-option-placeholder")) {
//       select_html.selectedIndex = 0;
//       options.forEach(o => o.classList.remove("active"));
//     } else if (e.currentTarget.classList.contains("form-option")) {
//       select_html.selectedIndex = Array.prototype.indexOf.call(options, e.target);
      
//       options.forEach(o => o.classList.remove("active"));
//       e.currentTarget.classList.add("active");
//     }
//   }
  
//   document.addEventListener("click", function(e) {
//     document.querySelectorAll(".form-select-container").forEach(f_s_c => {
//       if (f_s_c.classList.contains("active") && !f_s_c.contains(e.target)) {
//         f_s_c.classList.remove("active");
//         f_s_c.querySelector(".form-option-container").style.height = 0;
//       }
//     });
//   });