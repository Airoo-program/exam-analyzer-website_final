function analyzeAnswers(){

    let correct = document.getElementById("correctAnswers").value
                    .toUpperCase()
                    .split(",");

    let student = document.getElementById("studentAnswers").value
                    .toUpperCase()
                    .split(",");

    let output = "";
    let score = 0;

    for(let i = 0; i < correct.length; i++){

        if(student[i] == correct[i]){

            output += `
            <p class="correct">
            Question ${i + 1}: Correct ✅
            </p>
            `;

            score++;

        }else{

            output += `
            <p class="wrong">
            Question ${i + 1}: Wrong ❌
            <br>
            Correct Answer: ${correct[i]}
            <br>
            Your Answer: ${student[i] || "No Answer"}
            </p>
            <hr>
            `;
        }
    }

    output += `
    <h2>Total Score: ${score} / ${correct.length}</h2>
    `;

    document.getElementById("result").innerHTML = output;
}

/* START ANALYZER BUTTON */
document.querySelectorAll(".card button")[0]
.addEventListener("click", function(){

    document.querySelector(".analyzer")
    .scrollIntoView({
        behavior: "smooth"
    });

});

/* ABOUT BUTTON */
document.querySelectorAll(".card button")[1]
.addEventListener("click", function(){

    document.getElementById("aboutPopup")
    .classList.remove("hidden");

});

/* CLOSE ABOUT POPUP */
function closeAbout(){

    document.getElementById("aboutPopup")
    .classList.add("hidden");

}

/* VIEW REPORTS BUTTON */
document.querySelectorAll(".card button")[2]
.addEventListener("click", function(){

    let resultText = document.getElementById("result").innerText;

    if(resultText.includes("Total Score")){

        alert("Your report is ready below the analyzer section.");

        document.getElementById("result")
        .scrollIntoView({
            behavior: "smooth"
        });

    }else{

        alert("Please analyze your answers first.");
    }

});

/* STUDY PLAN BUTTON */
document.querySelectorAll(".card button")[3]
.addEventListener("click", function(){

    let resultText = document.getElementById("result").innerText;

    if(resultText.includes("Wrong")){

        alert(
            "Study Plan Recommendation:\n\n" +
            "- Review your wrong answers\n" +
            "- Practice similar questions\n" +
            "- Study at least 1 hour daily\n" +
            "- Focus on weak subjects"
        );

    }else{

        alert(
            "Great job! Continue practicing to maintain your performance."
        );
    }

});

/* OPEN USER POPUP */
function openUser(){

    document.getElementById("userPopup")
    .classList.remove("hidden");
}

/* CLOSE USER POPUP */
function closeUser(){

    document.getElementById("userPopup")
    .classList.add("hidden");
}

/* SHOW SIGNUP */
function showSignup(){

    document.getElementById("popupLogin")
    .classList.add("hidden");

    document.getElementById("popupSignup")
    .classList.remove("hidden");
}

/* SHOW LOGIN */
function showLogin(){

    document.getElementById("popupSignup")
    .classList.add("hidden");

    document.getElementById("popupLogin")
    .classList.remove("hidden");
}

/* SIGNUP */
function signup(){

    let username =
    document.getElementById("signupUsername").value;

    let password =
    document.getElementById("signupPassword").value;

    if(username === "" || password === ""){

        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully!");

    showLogin();
}

/* LOGIN */
function login(){

    let username =
    document.getElementById("loginUsername").value;

    let password =
    document.getElementById("loginPassword").value;

    let storedUser =
    localStorage.getItem("username");

    let storedPass =
    localStorage.getItem("password");

    if(username === storedUser &&
       password === storedPass){

        alert("Login Successful!");

        closeUser();

    }else{

        alert("Invalid Username or Password");
    }
}

/* OPEN USER POPUP */
function openUser(){
  document.getElementById("userPopup")
  .classList.remove("hidden");
}

/* CLOSE USER POPUP */
function closeUser(){
  document.getElementById("userPopup")
  .classList.add("hidden");
}

/* SHOW SIGNUP */
function showSignup(){
  document.getElementById("popupLogin")
  .classList.add("hidden");

  document.getElementById("popupSignup")
  .classList.remove("hidden");
}

/* SHOW LOGIN */
function showLogin(){
  document.getElementById("popupSignup")
  .classList.add("hidden");

  document.getElementById("popupLogin")
  .classList.remove("hidden");
}

/* SIGNUP */
function signup(){

  let username =
  document.getElementById("signupUsername").value;

  let password =
  document.getElementById("signupPassword").value;

  if(username === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Account created successfully!");

  showLogin();
}

/* LOGIN */
function login(){

  let username =
  document.getElementById("loginUsername").value;

  let password =
  document.getElementById("loginPassword").value;

  let storedUser =
  localStorage.getItem("username");

  let storedPass =
  localStorage.getItem("password");

  if(username === storedUser &&
     password === storedPass){

    alert("Login Successful!");

    closeUser();

  }else{

    alert("Invalid Username or Password");

  }
}