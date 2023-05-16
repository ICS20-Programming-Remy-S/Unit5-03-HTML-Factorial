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
  
  //initialize counter and product

  let product = 0;


  let counter =  1;

  //Statement for 1 and 0

  if (userNumber == 0 || userNumber == 1){
    message = message + userNumber + "=" + counter
  }

  //statement for the do while loop
  do {
    
    //calculation for the loop
    message = message + counter + " x " 

    //increment counter
    counter++

    //product calculation
    product = counter * counter
  } while (counter > userNumber)

  if (counter == userNumber){
     message = message + counter + " = " + product
  }
  
  // Display Results back to User
  document.getElementById("result").innerHTML = message
}
