					var count = 2;
					function validate() {
					var un = document.myform.login.value;
					var pw = document.myform.pword.value;
					var valid = false;
					var unArray = ["ace"]; 
					var pwArray = ["luna"]; 
					for (var i=0; i <unArray.length; i++) {
					if ((un == unArray[i]) && (pw == pwArray[i])) {
					valid = true;
					break;
						}
					}
					if (valid) {
					alert ("Pozytywne wpisanie loginu i hasła");
					window.location = "spis.html";
					return false;
					}
					var t = " ";
					if (count == 1) {t = "try"}
					if (count >= 1) {
					alert ("Nieprawidłowy login i/lub nieprawidłowe hasło.  Masz wciąż możliwość prawidłowego zalogowania się do aplikacji.");
					document.myform.username.value = "";
					document.myform.pword.value = "";
					setTimeout("document.myform.username.focus()", 25);
					setTimeout("document.myform.username.select()", 25);
					count --;
					}
					else {
					return false;
					}
					}