 function playCraps(){
            console.log("playCraps() function was called");
            
            let roll1 = rollDice();
            let roll2 = rollDice();

            let sum = roll1 + roll2;

            document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;
            document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;
            document.getElementById("divSum").textContent = "Sum: " + sum;

            let result = "";

            if (sum == 7 || sum == 11){
                result = "😥 Sorry! You LOST!";
            }

            else if(roll1 % 2 == 0 && roll1 + roll2){
                result = "🎉 Yay! You WON!!!🎉";
            }
            else{
                result = "😏 You Pushed! 😁 Wanna Try Again!?";
            }

            document.getElementById("divResult").textContent = result;

        }

        function rollDice() {

            let die = Math.random() * 6;

            return Math.ceil(die);
        }

   let intervalID = 0;
            function startMove(){
                let image = document.getElementById("memeImage");
                intervalID = setInterval(function(){
                    let xCord = getRandNum();
                    let yCord = getRandNum();

                    image.style.left = xCord + "px";
                    image.style.top = yCord + "px";
            }, 1000);
            document.getElementById("btnStart").disabled = true;
            document.getElementById("btnStop").disabled = false;
            }
            function stopMove(){
                clearInterval(intervalID);

                document.getElementById("btnStart").disabled = false;
                document.getElementById("btnStop").disabled = true;
            }
            function getRandNum(){
                return Math.floor(Math.random()* 800);
            }

            function validateForm(){
                let fullName = "";

                let firstName = document.getElementById("txtFirstName").value.trim();
                let lastName = document.getElementById("txtLastName").value.trim();
                let zipCode = document.getElementById("txtZipCode").value.trim();

                console.log("firstName=" + firstName);
                console.log("lastName=" + lastName);
                console.log("zipCode=" + zipCode);

                let message = "";
                fullName = firstName + " " + lastName;

                console.log("fullName=" + fullName);

                if (fullName.length > 20 || fullName.length == 1){
                    message = "Invalid name, please try again.";
                    console.log("invalid name");
                }
                else if(zipCode.length != 5){
                    message = "Invalid zip code, please try again.";
                    console.log("invalid zip");
                }
                else{
                    message = "Welcome, " + firstName + ". The secret word is validation.";
                }

                document.getElementById("divMessage").textContent = message;
            }
            
            function testPalin(){

            let userInput = document.getElementById("txtInput").value.trim();

            console.log("userInput=" + userInput);

           if (isPalindrome(userInput)){
            document.getElementById("divResult").textContent = "Yes, " + userInput + " this is a palindrome."
           }
           else{
            document.getElementById("divResult").textContent = "No, " + userInput + " is not a palindrome."
           }
        }

        function isPalindrome(wordToTest){

            let cleanedWord = wordToTest.replace(/\s/g,"");

            cleanedWord = cleanedWord.toLowerCase();

            let arrCleaned = cleanedWord.split("");

            arrCleaned = arrCleaned.reverse();

            let reversedWord = arrCleaned.join("");


            return cleanedWord == reversedWord;
        }
        function playSound(){
            document.getElementById("clickSound").play();
        }
     
