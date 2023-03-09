// capture elements
const yearly = document.querySelector(".yearly");
const monthly = document.querySelector(".monthly");
const switch_ = document.querySelector(".switch");
const free = document.querySelectorAll(".free");
const price_arcade = document.querySelector(".arcade_price");
const price_pro = document.querySelector(".pro_price");
const price_advanced = document.querySelector(".advanced_price");


export let isMonthly = true; // initial state

//create an on click event on switch_
switch_.addEventListener("click", function() {
  isMonthly = !isMonthly; // toggle the state

  if (isMonthly) {
    switch_.classList.remove("active");
    monthly.classList.add("styleup");
    yearly.classList.remove("styleup");
    free.forEach(tab=>{
        tab.classList.remove("display");
    })
    price_arcade.innerHTML = "$9/mo";
    price_advanced.innerHTML = "$12/mo";
    price_pro.innerHTML = "$15/mo";

  } else {
    switch_.classList.add("active");
    yearly.classList.add("styleup");
    monthly.classList.remove("styleup");
    free.forEach(tab=>{
        tab.classList.add("display");
    })

    price_arcade.innerHTML = "$90/mo";
    price_advanced.innerHTML = "$120/mo";
    price_pro.innerHTML = "$150/mo";

  }

});


const checkboxes = document.querySelectorAll('.add-check');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    const parentAddOn = this.parentElement;
    if (this.checked) {
      parentAddOn.classList.add('checked');
    } else {
      parentAddOn.classList.remove('checked');
    }
  });
});