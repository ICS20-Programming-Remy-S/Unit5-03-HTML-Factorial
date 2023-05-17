// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: April 2023
// This file contains the JS functions for index.html
"use strict";

function enterClicked () {
  //message for the user
  
  let message = ""
  
  // Use positive number user has entered for results
  
  let userNumber = parseInt(document.getElementById('userNumber').value);
  
  //initialize counter and factorial

  let factorial = 1;


  let counter =  1;

    

  //statement for the do while loop
  do {
    
   //factorial calculation
    factorial = factorial * counter

    //increment counter
    counter++

  } while (counter <= userNumber)
  
  //Message if user enters nothing 

  if (userNumber >= 0){
    message = message + "The Factorial of " + userNumber + " is " + factorial;
  }
  else {
     message = "Please Enter a Number"
  }
  
  // Display Results back to User
  document.getElementById("result").innerHTML = message
}