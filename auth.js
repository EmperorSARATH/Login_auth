class Auth{
    constructor(){
        document.querySelector("body").style.display="none";
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }

     validateAuth(auth){
        if(auth != 1){
            window.location.replace("/");
        }else{
            document.querySelector("body").style.display="block";
        }
    }
}
const auth = new Auth();

// document.querySelector(".loginForm").addEventListener("submit", (e) => {
//     e.preventDefault();
	
// });