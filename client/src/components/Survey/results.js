import React from "react";
import "./index";

function Results() {
    function validateForm() {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") isValid = false;
      });
      $(".chosen-select").each(function() {
        if ($(this).val() === "") isValid = false;
      });
      return isValid;
    }
    if (validateForm() == true) {
      var userData = {
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val()
        ]
      };
     
    } else {
      alert("Please fill out all fields before submitting!");
    }
    return false;
    
  };

  console.log(userData);

  export default Results;