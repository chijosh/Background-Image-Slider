// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
    "contBcg-5",
    "contBcg-6"
  ];

  // setup counter

  let counter = 0;

  // select both the buttons

  const buttons = document.querySelectorAll(".btn");
  // console.log(buttons);

  //loop through the nodelist and attach the event listeners

  buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      //get event target
      const clickBtn = event.target;

      // console.log(check);
      //if condition to change image for left button
      if (clickBtn.classList.contains("btn-left")) {
        counter--;
      }
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      document.querySelector(
        ".img-container"
      ).style.backgroundImage = `url('img/${pictures[counter]}.jpg')`;

      //if condition to change image for right button
      //
      if (clickBtn.classList.contains("btn-right")) {
        counter++;
      }
      if (counter > pictures.length - 1) {
        counter = 0;
      }
      document.querySelector(
        ".img-container"
      ).style.backgroundImage = `url('img/${pictures[counter]}.jpg')`;
    });
  });
})();
