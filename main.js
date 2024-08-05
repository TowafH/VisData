// console.log the JSON
console.log(dataObj);

let generateBtn = document.getElementById("generateBtn");

function generateUser() {
    //Select a random user

    let userIndex = Math.floor(Math.random() * dataObj.results.length); // 0 - 20
    console.log(userIndex);

    let selectedUser = dataObj.results[userIndex];

    let userName = document.getElementById("user_name");
    userName.innerText = `${selectedUser.name.first} ${selectedUser.name.last}`

    let userAge = document.getElementById("user_age");
    userAge.innerText = `Age: ${selectedUser.dob.age}`;

    let userImg = document.getElementById("user_img");
    userImg.src = selectedUser.picture.large;
}

generateBtn.addEventListener("click", generateUser);