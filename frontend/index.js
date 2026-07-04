const users = [
  {
    "name": "Jane Doe",
    "gender": "Female",
    "image": "jane.png"
  },
  {
    "name": "John Doe",
    "gender": "Male",
    "image": "john.png"
  }
];

let curUserId = 0;

function toggle() {
  curUserId = curUserId === 0 ? 1 : 0;

  document.getElementById("img").src = users[curUserId].image;
  document.getElementById("card-name").innerText = users[curUserId].name;
  document.getElementById("card-gender").innerText = users[curUserId].gender;
}

console.log("Hello from JS");

function getRandomuser() {
    fetch('https://randomuser.me/api/')
    .then(function(data){
        return data.json();
    })
    .then(function(parsedData){

      let name=parsedData.results[0].name.first + " " + parsedData.results[0].name.last;
       let gender=parsedData.results[0].gender;
     
        let imageUrl=parsedData.results[0].picture.large;

        document.getElementById("card-name").innerText=name;
        document.getElementById("card-gender").innerText=gender;
        document.getElementById("img").src=imageUrl;
    })
}