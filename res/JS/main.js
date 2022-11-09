
const changeBckGroundBtn = document.getElementById("changeBckGroundBtn");
const ChnageSizeBtn = document.getElementById("ChnageSizeBtn");
const userinput1 = document.getElementById("userinput1");
const userinput2 = document.getElementById("userinput2");
const img = document.getElementById("img")
const p = document.getElementById("p")

changeBckGroundBtn.onclick = () => {
    const userBckgroundValue = userinput1.value;
  document.body.style.backgroundImage = `url(${userBckgroundValue})`;
};


img.onclick = () => {
    img.style.width = "800px";
    img.style.height = "800px";
}

ChnageSizeBtn.onclick = () => {
const userTextSizeValue = userinput2.value;
p.style.fontSize = userTextSizeValue + "px"
}
