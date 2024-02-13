import { verifyAdress } from "./Adress.js";

let corpoPag = document.body;
let tabela = document.createElement("table");

tabela.innerHTML = `
    <tr> 
        <th>Rua</th>
        <th>Número</th>
    </tr>
`

verifyAdress().forEach(Adress => {
    tabela.innerHTML += `
        <tr> 
            <td>${Adress[0]}</td>
            <td>${Adress[1]}</td>
        </tr>
    `
});

corpoPag.appendChild(tabela);