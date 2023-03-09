const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const step1 = document.querySelector(".step1")
const step2 = document.querySelector(".step2")
const step3 = document.querySelector(".step3")
const step4 = document.querySelector(".step4")
const online_price = document.querySelector(".online_price")
const storage_price = document.querySelector(".storage_price");
const custom_price = document.querySelector(".custom_price");

import {isMonthly} from './tabs.js';

step1.style.backgroundColor = "#bde2fd"

let counter = 0;

function showtab(counter) {
    if (counter <= 0) {
      prev.style.display = "none";
    } else {
      prev.style.display = "block";
    }

    if (counter == 3) {
      next.innerHTML = "Confirm";
    } else {
      next.innerHTML = "Next Step";
    }

    if (counter >= 4) {
      next.style.display = "none";
    } else {
      next.style.display = "block";
    }

    switch (counter) {
        case 0:
          tab1.style.display = "grid";
          step1.style.backgroundColor = "#bde2fd"
          step2.style.backgroundColor = ""
          step3.style.backgroundColor = ""
          step4.style.backgroundColor = ""
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "none";
          tab5.style.display = "none";
          break;
        case 1:
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
            online_price.innerHTML = "+$10/mo";
            storage_price.innerHTML = "+$20/mo";
            custom_price.innerHTML = "+$20/mo";
          }
          else{
            online_price.innerHTML = "+$1/mo";
            storage_price.innerHTML = "+$2/mo";
            custom_price.innerHTML = "+$2/mo";
          }
          break;
        case 3:
          tab1.style.display = "none";
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "grid";
          step4.style.backgroundColor = "#bde2fd"
          step1.style.backgroundColor = ""
          step2.style.backgroundColor = ""
          step3.style.backgroundColor = ""
          tab5.style.display = "none";
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

  const errors = document.querySelectorAll(".error ");

  errors.forEach(error=>{
    error.style.display = "none";
  })

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
        showtab(counter);
    }
    
})

// reduce counter
prev.addEventListener("click", (event)=>{
    event.preventDefault();
    counter--;
    showtab(counter);
})