{
  const welcome = () => {
    console.log("Witam serdecznie wszystkie/ch deweloperki i deweloperów, którzy wstąpili na moją witrynę internetową")
  }

  const toogleBackground = () => {

    const themeName = document.querySelector(".themeName");
    const body = document.querySelector(".body");

    body.classList.toggle("body--dark");
    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
  };

  const init = () =>{
    
    const changeBackgroundButton = document.querySelector(".changeBackgroundButton");

    changeBackgroundButton.addEventListener("click", toogleBackground);
    
    welcome();
  }

  init();

}