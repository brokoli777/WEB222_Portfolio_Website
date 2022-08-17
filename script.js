var infoHiring = document.getElementById("inputHiring");

var hiringContainer = document.getElementById("hiringContainer");

// if(document.getElementById('inputHiring').checked == true)
// {
//     console.log("thanos");
// }

function displayHourlyRate() {
  var label = document.createElement("label");
  label.innerHTML = "Hourly Rate (in $/hr):";
  var inputRate = document.createElement("input");
  inputRate.type = "text";
  inputRate.classList.add("inputHourlyRate");
  hiringContainer.appendChild(label);
  hiringContainer.appendChild(inputRate);
}

infoHiring.addEventListener("change", displayHourlyRate);

var inputForm = document.getElementById("inputForm");
inputForm.onsubmit = function () {
  // console.log("thanos");

  if (
    validateName() &&
    validateEmail() &&
    validateAddress() &&
    validateCity() &&
    validatePostalCode() &&
    validateRadio()
    &&
    validateMessage()
  ) {
    hideErrorMessage();
    return true;
  } else {
    if (!validateName()) {
      showErrorMessage("Invalid Name - Enter First Name and Last Name");
    } else if (!validateEmail()) {
      showErrorMessage("Invalid Email - Enter Email in the correct format");
    }
    else if (!validateAddress()) {
        showErrorMessage("Invalid Address - Enter a Address");
      }
      else if (!validateCity()) {
        showErrorMessage("Invalid City - Enter a City");
      }
    else if (!validatePostalCode()) {
      showErrorMessage("Invalid Postal Code");
    } 
    else if (!validateRadio()) {
        showErrorMessage("Please choose an option");
      } 
    else {
      showErrorMessage("Please enter a message");
    }

    return false;
  }
};

function showErrorMessage(msg) {
  var errMessage = document.querySelector("#error-msg");

  errMessage.classList.remove("hidden");

  errMessage.innerHTML = msg;
}

function hideErrorMessage(msg) {
  var errMessage = document.querySelector("#error-msg");
  errMessage.classList.add("hidden");
}

function validateName() {
  var inputName = document.querySelector("#inputName").value;
  // inputName = inputName.trim()
  // var inputNameArr = inputName.split(" ")
  // console.log(inputNameArr);
  // if(inputNameArr.length<)
  // {
  //     return false;
  // }
  // return true;
  // if(inputName === "") console.log("it is empty");

  return (!(/[0-9]/.test(inputName)) && inputName != "");
}

// function validatePhoneNumber() {
//     var phoneNumber = document.querySelector('#phone').value;
//     phoneNumber = phoneNumber.trim();
//     var phoneNumberArr = phoneNumber.split("");
//     console.log(phoneNumberArr);

//     function isNumber(n) {
//         return !isNaN(n);
//     }

//     return phoneNumberArr.every(isNumber) && phoneNumberArr.length == 10;
// }

function validateEmail() {
  var inputEmail = document.querySelector("#inputEmail").value;
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputEmail) && inputEmail != "") {
    return true;
  }
  return false;
}

function validateAddress() {
  var inputAddress = document.querySelector("#inputAddress").value;
  return inputAddress != "";
}

function validateCity() {
  var inputCity = document.querySelector("#inputCity").value;
  return inputCity != "";
}

function validateRadio() {
  var inputQuestion = document.querySelector("#inputQuestion").value;
  var inputComment = document.querySelector("#inputComment").value;
  var inputHiring = document.querySelector("#inputHiring").value;
  if(document.querySelector("#inputHiring").checked)
  {
    if(document.querySelector("#inputHourlyRate").value != "")
    {
        return true;
    }
    else{
        return false;
    }
  }

  if(document.querySelector("#inputQuestion").checked || document.querySelector("#inputComment").checked)
  {
    return true;
  }
  return false;
}

function validatePostalCode() {
  var inputCode = document.querySelector("#inputPostalCode").value;
  // console.log(inputDate);

  if ( /([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i.test(inputCode))
  {
    console.log("regex tells postal is valid");
  }

  if (
    /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(
      inputCode
    ) &&
    inputCode != ""
  ) {
    return true;
  }
  return false;
}

function validateMessage() 
{
    return document.querySelector("#inputTextArea").value != "";
}
