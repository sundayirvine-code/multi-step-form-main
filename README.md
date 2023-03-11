# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
This code creates a multi-step form with three tabs. The form is designed to collect personal information from the user, help them select a plan for a gaming subscription service, and offer additional add-ons for their subscription.

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made



### Links

- [Live Site URL](https://multi-step-form-main-rho.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learnt a great deal about JavaScript and one of the major highlights is creating a 
function that checks if an element is displayed on the web page.  
Code snippet:  

```js
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
```

using regular expression to extract an integer fom the innerHTML of an element.  
Code snippet:  

```js
let price1 = parseInt(op.innerHTML.match(/\d+/)[0])
```  


### Continued development

I surely want to get better using JavaScript

### Useful resources

- chat GPT
- [CSS Grid Playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY)

## Author

- Website - [Irvine Sunday](https://irvine-sunday-portfolio.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

