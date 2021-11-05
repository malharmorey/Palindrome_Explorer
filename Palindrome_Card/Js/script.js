function checkPalindrome() {
    let date = document.getElementById("myInput").value;
    let replaceSpecialChar = date.replace(/[&\/\\#, +@()$~%.'":*?<>{}]/g, '').replace("-","").toLowerCase();
    let reverseJoin = replaceSpecialChar.split("").reverse().join("");
    document.getElementById("myInput").value = "";

    // console.log(replace);
    // console.log(reverseJoin);

    if(replaceSpecialChar == ""){
        alert('Input should NOT be empty!');
    } else if(replaceSpecialChar.length <=2){
        alert('Input must contain atleast 3 characters') 
    } else if(reverseJoin == replaceSpecialChar){
        document.getElementById("result").innerText = `Yeah! ${date} is Palindrome.`;
    } else{
        document.getElementById("result").innerText = `Oops! ${date} is NOT Palindrome.`;
    }
}