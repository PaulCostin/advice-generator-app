const adviceNr = document.getElementById("adviceNR");
const adviceText = document.getElementById("advice-text");

window.onload = () => {
  //This is for the API to be able to run when the window loads
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json(); // Here I got back the response that is an object
    })
    .then((adviceData) => {
      // console.log(adviceData); // Here I the got exactly the slip data back / slip from the API
      const AdviceObject = adviceData.slip; // Here I assigned an object to the / slip/ returned by the API
      adviceNr.innerHTML = AdviceObject.id;
      adviceText.innerHTML = AdviceObject.advice;
    })
    .catch((error) => {
      console.log(error); // Just in case I get an error;
    });
}
