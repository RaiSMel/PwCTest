import { verifyAdress } from "./Adress.js";

let corpoPag = document.body;
let tabela = document.createElement("table");
tabela.setAttribute('border', '1px' );
tabela.style.margin = "0 auto"

tabela.innerHTML = `
    <tr> 
        <th style="padding: 10px">Rua</th>
        <th style="padding: 10px">Número</th>
    </tr>
`
console.log(verifyAdress())
verifyAdress().forEach(Adress => {
    tabela.innerHTML += `
        <tr> 
            <td style="padding: 10px">${Adress[0]}</td>
            <td style="padding: 10px">${Adress[1]}</td>
        </tr>
    `
});

corpoPag.appendChild(tabela);