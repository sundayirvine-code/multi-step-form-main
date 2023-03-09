const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");
const tab4 = document.querySelector(".tab4");
const tab5 = document.querySelector(".tab5");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let counter = 0;

function showtab(counter) {
    if (counter <= 0) {
      prev.style.display = "none";
    } else {
      prev.style.display = "block";
    }
    if (counter >= 4) {
      next.style.display = "none";
    } else {
      next.style.display = "block";
    }

    switch (counter) {
        case 0:
          tab1.style.display = "grid";
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "none";
          tab5.style.display = "none";
          break;
        case 1:
          tab1.style.display = "none";
          tab2.style.display = "grid";
          tab3.style.display = "none";
          tab4.style.display = "none";
          tab5.style.display = "none";
          break;
        case 2:
          tab1.style.display = "none";
          tab2.style.display = "none";
          tab3.style.display = "grid";
          tab4.style.display = "none";
          tab5.style.display = "none";
          break;
        case 3:
          tab1.style.display = "none";
          tab2.style.display = "none";
          tab3.style.display = "none";
          tab4.style.display = "grid";
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

  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    // Validate name
    if (name.trim() === "") {
      return false;
    }
  
    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return false;
    }
  
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return false;
    }
  
    // All fields are valid
    return true;
  }

//increase counter
next.addEventListener("click", (event)=>{
    event.preventDefault();

    //ensure data is provided for
    if (!validateForm()) {
        alert("Please provide valid data in all fields.");
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