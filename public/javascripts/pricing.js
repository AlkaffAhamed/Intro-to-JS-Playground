// 1st attempt didn't work

// const btnMonthly = document.getElementById("monthly-plans-btn")
// const btnYearly = document.getElementById("annual-plans-btn")
// const classlistSelected = "relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
// const classlistDeselected = "ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"

// const txtHobby = document.getElementById("hobby-price")
// const txtFreelance = document.getElementById("freelancer-price")
// const txtStartup = document.getElementById("startup-price")
// const txtEnterprise = document.getElementById("enterprise-price")
// const txtMonthYear = document.querySelectorAll(".price-unit")

// btnMonthly.addEventListener("click", selectMonthly)
// btnYearly.addEventListener("click", selectYearly)

// function fetchprice()
// {
//     return fetch("/api/pricing").then((res) => 
//     {
//         return res.json
//     }).catch((e) => 
//     {
//         console.error("Error 404 pricing not found")
//     })
// }

// function selectMonthly()
// {
//     pricelist = fetchprice()
//     console.log(pricelist)
//     btnMonthly.className = classlistSelected
//     btnYearly.className = classlistDeselected

//     for (p in pricelist)
//     {
//         switch(p.tier)
//         {
//             case "hobby":
//                 txtHobby.innerHTML = p.monthlyPrice
//                 break;
//             case "freelancer":
//                 txtFreelance.innerHTML = p.monthlyPrice
//                 break;
//             case "startup":
//                 txtStartup.innerHTML = p.monthlyPrice
//                 break;
//             case "enterprise":
//                 txtEnterprise.innerHTML = p.monthlyPrice
//                 break;
//         }
//     }

//     txtMonthYear.forEach(element => 
//     {
//         element.innerHTML = "/mo"
//     });
// }

// function selectYearly()
// {
//     pricelist = await fetchprice()
//     console.log(pricelist)
//     btnYearly.className = classlistSelected
//     btnMonthly.className = classlistDeselected

//     for (p in pricelist)
//     {
//         switch(p.tier)
//         {
//             case "hobby":
//                 txtHobby.innerHTML = p.annualPrice
//                 break;
//             case "freelancer":
//                 txtFreelance.innerHTML = p.annualPrice
//                 break;
//             case "startup":
//                 txtStartup.innerHTML = p.annualPrice
//                 break;
//             case "enterprise":
//                 txtEnterprise.innerHTML = p.annualPrice
//                 break;
//         }
//     }

//     txtMonthYear.forEach(element => 
//     {
//         element.innerHTML = "/yr"
//     });
// }

// 2nd attempt after getting hints from model answer
(async function pricing()
{
    const pricelist = await fetch("/api/pricing")
    .then(res => res.json())

    // const priceHobby = pricelist.find(p => p.tier === "hobby")
    // const priceFreelance = pricelist.find(p => p.tier === "freelancer")
    // const priceStartup = pricelist.find(p => p.tier === "startup")
    // const priceEnterprise = pricelist.find(p => p.tier === "enterprise")

    const btnMonthly = document.getElementById("monthly-plans-btn")
    const btnYearly = document.getElementById("annual-plans-btn")
    const classlistSelected = "relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
    const classlistDeselected = "ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"

    const txtHobby = document.getElementById("hobby-price")
    const txtFreelance = document.getElementById("freelancer-price")
    const txtStartup = document.getElementById("startup-price")
    const txtEnterprise = document.getElementById("enterprise-price")
    const txtMonthYear = document.querySelectorAll(".price-unit")

    btnMonthly.addEventListener("click", ()=>
    {
        btnMonthly.className = classlistSelected
        btnYearly.className = classlistDeselected
        
        txtHobby.innerHTML = pricelist.find(p => p.tier === "hobby").monthlyPrice
        txtFreelance.innerHTML = pricelist.find(p => p.tier === "freelancer").monthlyPrice
        txtStartup.innerHTML = pricelist.find(p => p.tier === "startup").monthlyPrice
        txtEnterprise.innerHTML = pricelist.find(p => p.tier === "enterprise").monthlyPrice

        // txtHobby.innerHTML = priceHobby.monthlyPrice
        // txtFreelance.innerHTML = priceFreelance.monthlyPrice
        // txtStartup.innerHTML = priceStartup.monthlyPrice
        // txtEnterprise.innerHTML = priceEnterprise.monthlyPrice

        txtMonthYear.forEach(element => 
        {
            element.innerHTML = "/mo"
        });

    })

    btnYearly.addEventListener("click", ()=>
    {
        btnYearly.className = classlistSelected
        btnMonthly.className = classlistDeselected

        txtHobby.innerHTML = pricelist.find(p => p.tier === "hobby").annualPrice
        txtFreelance.innerHTML = pricelist.find(p => p.tier === "freelancer").annualPrice
        txtStartup.innerHTML = pricelist.find(p => p.tier === "startup").annualPrice
        txtEnterprise.innerHTML = pricelist.find(p => p.tier === "enterprise").annualPrice

        // txtHobby.innerHTML = priceHobby.annualPrice
        // txtFreelance.innerHTML = priceFreelance.annualPrice
        // txtStartup.innerHTML = priceStartup.annualPrice
        // txtEnterprise.innerHTML = priceEnterprise.annualPrice

        txtMonthYear.forEach(element => 
        {
            element.innerHTML = "/yr"
        });
    })
})()

// MODEL ANSWER
// (async function initPricing() {
//     const pricingData = await fetch('/api/pricing')
//         .then(res => res.json());

//     const hobbyPriceData = pricingData.find(p => p.tier === 'hobby');
//     const freelancerPriceData = pricingData.find(p => p.tier === 'freelancer');
//     const startupPriceData = pricingData.find(p => p.tier === 'startup');
//     const enterprisePriceData = pricingData.find(p => p.tier === 'enterprise');

//     const hobbyPrice = document.querySelector('#hobby-price');
//     const freelancerPrice = document.querySelector('#freelancer-price');
//     const startupPrice = document.querySelector('#startup-price');
//     const enterprisePrice = document.querySelector('#enterprise-price');
//     const priceUnits = Array.from(document.querySelectorAll('.price-unit'));

//     const monthlyPlanBtn = document.querySelector('#monthly-plans-btn');
//     const annualPlanBtn = document.querySelector('#annual-plans-btn');

//     monthlyPlanBtn.addEventListener('click', () => {
//         hobbyPrice.innerHTML = hobbyPriceData.monthlyPrice;
//         freelancerPrice.innerHTML = freelancerPriceData.monthlyPrice;
//         startupPrice.innerHTML = startupPriceData.monthlyPrice;
//         enterprisePrice.innerHTML = enterprisePriceData.monthlyPrice;
//         priceUnits.forEach(el => {
//             el.innerHTML = '/mo';
//         });
//     });

//     annualPlanBtn.addEventListener('click', () => {
//         hobbyPrice.innerHTML = hobbyPriceData.annualPrice;
//         freelancerPrice.innerHTML = freelancerPriceData.annualPrice;
//         startupPrice.innerHTML = startupPriceData.annualPrice;
//         enterprisePrice.innerHTML = enterprisePriceData.annualPrice;
//         priceUnits.forEach(el => {
//             el.innerHTML = '/yr';
//         });
//     });
// })();