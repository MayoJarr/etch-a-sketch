function sized() {
    const container = document.querySelector(".container");
    const inputs = document.querySelector(".inputs");
    const value1 = document.querySelector(".value1").value;
    const value2 = document.querySelector(".value2").value;

    console.log(value1, value2);

    inputs.style.cssText = "display: none;";

    container.style.cssText =
        "display: grid; grid-template: repeat(" +
        value1 +
        ", minmax(1px, 50px)) / repeat(" +
        value2 +
        ", minmax(1px, 50px));";
    for (let i = 0; i < value1; i++) {
        for (let j = 0; j < value2; j++) {
            const div = document.createElement("div");
            div.classList.add("div");
            container.append(div);
        }
    }

    
    let divs = document.querySelectorAll('.div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            let color1 = Math.floor(Math.random() * 254);
            let color2 = Math.floor(Math.random() * 254);
            let color3 = Math.floor(Math.random() * 254);
            div.style.cssText = "background: rgb("+color1+","+color2+","+color3+");";
        })
    });
}

const submit = document.querySelector(".submit");
submit.addEventListener("click", sized);



