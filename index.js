


function some() {
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /^\d{8}$/; // 

    

    
    if (name === "") {
        document.getElementById("name").style.border = "solid 2px red";
        document.getElementById("name").style.color = "red";
        
    } else {
        document.getElementById("name").style.border = "solid 2px green";
        document.getElementById("name").style.color = "green";
    }

    
    if (passwordPattern.test(password)) {
        document.getElementById("password").style.border = "solid 2px green";
        document.getElementById("password").style.color = "green";
    } else {
        document.getElementById("password").style.border = "solid 2px red";
        document.getElementById("password").style.color = "red";
        
        
    }

    
    if (emailPattern.test(email)) {
        document.getElementById("email").style.border = "solid 2px green";
        document.getElementById("email").style.color = "green";
    } else {
        document.getElementById("email").style.border = "solid 2px red";
        document.getElementById("email").style.color = "red";
        
        
    }


}
