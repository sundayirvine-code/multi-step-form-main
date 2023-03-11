// Tabs on the sidebar
const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5");

// Buttons
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Tab1 - Tab4
const step1 = document.querySelector(".step1")
const step2 = document.querySelector(".step2")
const step3 = document.querySelector(".step3")
const step4 = document.querySelector(".step4")

// add-on prices
const online_price = document.querySelector(".online_price")
const storage_price = document.querySelector(".storage_price");
const custom_price = document.querySelector(".custom_price");

// Tab 4 prices(finishing up)
const arch_p = document.querySelector(".arch-price");
const op = document.querySelector(".op")
const sp = document.querySelector(".sp");
const pp = document.querySelector(".pp");
const tp = document.querySelector(".t-price");
const total_text = document.querySelector(".tt");
const arc_header = document.querySelector(".arc-header");

const total_profile = document.querySelector(".total-profile");
const total_storage = document.querySelector(".total-storage");
const total_online = document.querySelector(".total-online");

import {isMonthly} from './tabs.js';

// Get all plan elements
const plans = document.querySelectorAll('.plan');
let name;
let price;
// Add click event listener to each plan
plans.forEach(plan => {
  plan.addEventListener('click', () => {
    plans.forEach(p=>{
      p.classList.remove("plan_active");
    })
    plan.classList.add("plan_active");
    
    // Get plan name and price
    name = plan.querySelector('.arcade-name').innerHTML;
    price = plan.querySelector('.price').innerHTML;
    price = parseInt(price.replace('$', ''));
  });
});


//check if element is displayed
function check_display(element){
  const styles = window.getComputedStyle(element);
  const isDisplayed = styles.getPropertyValue('display') !== 'none';
  
  if (isDisplayed) {
    return true;
  } else {
    return false;
  }
}

step1.style.backgroundColor = "#bde2fd"
step1.style.color = "#15385f"

let counter = 0;

function showtab(counter) {
    if (counter <= 0) {
      prev.style.display = "none";
    } else {
      prev.style.display = "block";
    }

    if (counter == 3) {
      next.innerHTML = "Confirm";
      next.classList.add("confirm-hover");
    } else {
      next.innerHTML = "Next Step";
      next.classList.remove("confirm-hover");
    }

    if (counter >= 4) {
      next.style.display = "none";
      prev.style.display = "none";
    } else {
      next.style.display = "block";
      prev.style.display = "block";
    }

    switch (counter) {
        case 0:
          prev.style.display = "none";
          step1.style.color = "#15385f"
          step2.style.color = "#f8fbff"
          step3.style.color = "#f8fbff"
          step4.style.color = "#f8fbff"
          step1.style.backgroundColor = "#bde2fd"
          step2.style.backgroundColor = ""
          step3.style.backgroundColor = ""
          step4.style.backgroundColor = ""
          tab1.style.display = "grid";
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "none";
          tab5.style.display = "none";
          break;
        case 1:
          step2.style.color = "#15385f"
          step1.style.color = "#f8fbff"
          step3.style.color = "#f8fbff"
          step4.style.olor = "#f8fbff"
          tab1.style.display = "none";
          tab2.style.display = "grid";
          step2.style.backgroundColor = "#bde2fd"
          step1.style.backgroundColor = ""
          step3.style.backgroundColor = ""
          step4.style.backgroundColor = ""
          tab3.style.display = "none";
          tab4.style.display = "none";
          tab5.style.display = "none";
          break;
        case 2:
          step3.style.color = "#15385f"
          step2.style.color = "#f8fbff"
          step1.style.color = "#f8fbff"
          step4.style.color = "#f8fbff"
          tab1.style.display = "none";
          tab2.style.display = "none";
          tab3.style.display = "grid";
          step3.style.backgroundColor = "#bde2fd"
          step1.style.backgroundColor = ""
          step2.style.backgroundColor = ""
          step4.style.backgroundColor = ""
          tab4.style.display = "none";
          tab5.style.display = "none";
          if (!isMonthly){
            online_price.innerHTML = "+$10/yr";
            storage_price.innerHTML = "+$20/yr";
            custom_price.innerHTML = "+$20/yr";
          }
          else{
            online_price.innerHTML = "+$1/mo";
            storage_price.innerHTML = "+$2/mo";
            custom_price.innerHTML = "+$2/mo";
          }
          break;
        case 3:
          step4.style.color = "#15385f"
          step2.style.color = "#f8fbff"
          step3.style.color = "#f8fbff"
          step1.style.color = "#f8fbff"
          tab1.style.display = "none";
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "grid";
          step4.style.backgroundColor = "#bde2fd"
          step1.style.backgroundColor = ""
          step2.style.backgroundColor = ""
          step3.style.backgroundColor = ""
          tab5.style.display = "none";
          if (!isMonthly){
            arch_p.innerHTML = "$" + price;
            if (check_display(total_online)){
              op.innerHTML = "+$10/yr";
            }
            else{
              op.innerHTML = "0";
            }
            if (check_display(total_storage)){
              sp.innerHTML = "+$20/yr";
            }
            else{
              sp.innerHTML = "0";
            }
            if (check_display(total_profile)){
              pp.innerHTML = "+$20/yr";
            }
            else{
              pp.innerHTML = "0";
            }
            
            let price1 = parseInt(op.innerHTML.match(/\d+/)[0])
            let price2 = parseInt(sp.innerHTML.match(/\d+/)[0])
            let price3 = parseInt(pp.innerHTML.match(/\d+/)[0])
            let total = price3 + price2 + price1 + price
  
            tp.innerHTML = "$" + total + "/yr";
            arc_header.innerHTML = name + "(Yearly)";
            total_text.innerHTML = "Total (per year)";
          }
          else{
            arch_p.innerHTML = "$" + price;
            if (check_display(total_online)){
              op.innerHTML = "+$1/mo";
            }
            else{
              op.innerHTML = "0";
            }
            if (check_display(total_storage)){
              sp.innerHTML = "+$2/mo";
            }
            else{
              sp.innerHTML = "0";
            }
            if (check_display(total_profile)){
              pp.innerHTML = "+$2/mo";
            }
            else{
              pp.innerHTML = "0";
            }
            let price1 = parseInt(op.innerHTML.match(/\d+/)[0])
            let price2 = parseInt(sp.innerHTML.match(/\d+/)[0])
            let price3 = parseInt(pp.innerHTML.match(/\d+/)[0])
            let total = price3 + price2 + price1 + price
  
            tp.innerHTML = "$" + total + "/mo";
            arc_header.innerHTML = name + "(Monthly)";
            total_text.innerHTML = "Total (per month)";
          }
          break;
        case 4:
          tab1.style.display = "none";
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "none";
          tab5.style.display = "grid";
          break;
        default:
          break;
      }
  }
// by default, all error messages should e hidden
  const errors = document.querySelectorAll(".error ");

  errors.forEach(error=>{
    error.style.display = "none";
  })

// a function that validates the form
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const name_ = document.getElementById("name");
    const email_ = document.getElementById("email");
    const phone_ = document.getElementById("phone");
    const name_error = document.querySelector(".name-error");
    const mail_error = document.querySelector(".mail-error");
    const phone_error = document.querySelector(".phone-error");
    
  
    // Validate name
    if (name.trim() === "") {
      name_error.style.display = "block";
      name_.style.borderColor = "#d84357";
      return false;
    }
    else{
      name_.style.borderColor = "#dedde1";
      name_error.style.display = "none";
    }
  
    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (email.trim() == ""){
      mail_error.style.display = "block";
      mail_error.innerHTML = "This is required"
      email_.style.borderColor = "#d84357";
      return false;
    }
    if (!emailRegex.test(email)) {
      mail_error.style.display = "block";
      mail_error.innerHTML = "Invalid Email"
      email_.style.borderColor = "#d84357";
      return false;
    }
    else{
      email_.style.borderColor = "#dedde1";
      mail_error.style.display = "none";
    }
  
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (phone.trim() === ""){
      phone_error.style.display = "block";
      phone_error.innerHTML = "This is required"
      phone_.style.borderColor = "#d84357";
      return false;
    }
    if (!phoneRegex.test(phone)) {
      phone_error.style.display = "block";
      phone_error.innerHTML = "Invalid Number"
      phone_.style.borderColor = "#d84357";
      return false;
    }
    else{
      phone_.style.borderColor = "#dedde1";
      phone_error.style.display = "none";
    }
  
    // All fields are valid
    return true;
  }

//increase counter
next.addEventListener("click", (event)=>{
    event.preventDefault();

    //ensure data is provided for
    if (!validateForm()) {
        return;
    }
    else{
      counter++;
        //ensure plan is provided
        if(counter == 2)
        {
          if (typeof price === "number" && Number.isInteger(price)) {
            
          } else {
            alert("choose a price plan by clicking");
            counter--;
          }
        }
        showtab(counter);
    }
    
})

// reduce counter
prev.addEventListener("click", (event)=>{
    event.preventDefault();

    counter--;
    showtab(counter);
})

