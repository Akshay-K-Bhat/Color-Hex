const container  = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");


const maxPalletBoxes = 12;

const generatePallete = () => {
    //clearing the container
    container.innerHTML = ""; 
    for (let index = 0; index < maxPalletBoxes; index++) {
         // genarating the hex color
         let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
         randomHex = `#${randomHex.padStart(6,"0")}`;
         //creating a new 'li' element and inserting it into the container
         const color = document.createElement("li");
         color.classList.add("color");
         color.innerHTML = ` <div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value"> ${randomHex}</span>`;

        // adding click event to current li element to copy the color
         color.addEventListener("click", ()=> copyColor(color, randomHex));
         container.appendChild(color);
    }

}
generatePallete();

const copyColor = (elem, hexVal) =>{
    const colorElement = elem.querySelector(".hex-value");
    //copying the hex value updating the text to copied
    //and changing text back to original value after 1 second
    navigator.clipboard.writeText(hexVal).then(()=> {
        colorElement.innerText = "copied";
        setTimeout(()=> colorElement.innerText = hexVal, 1000 )
    }).catch(()=>alert('Failed to copy the color'))
}
refreshBtn.addEventListener("click", generatePallete);