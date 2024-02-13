let adress = ["Miritiba 339", "Babaçu 500", "Rio Branco 23", "Quirino dos Santos 23 b", "4, Rue de la République", "Calle Sagasta, 26", "Calle 44 No 1991", "100 Broadway Av" ];
 let adressSplit = [];
 let verifyAdress = () => {
   adress.forEach(adressLocal => {
       if(adressLocal.split(" ").length < 3)
        adressSplit.push(adressLocal.split(" "));
        else if(adressLocal.split(", ").length == 2){
            let currentAdress = adressLocal.split(", ");
            !(currentAdress[0]%1==0) ? undefined : currentAdress.reverse(); 
            adressSplit.push(currentAdress);
        }
        else if(adressLocal.match(/(No)\s\d+/)){
           let currentAdress = [];
           currentAdress.push(adressLocal.slice(0, adressLocal.match(/(No)\s\d+/)["index"]-1));
           currentAdress.push(adressLocal.match(/(No)\s\d+/)[0]);
           adressSplit.push(currentAdress);
       }else{
           let adressInfo = adressLocal.match(/\d+(\s[a-z])?/);
           let initial, end;
           if(adressInfo["index"] == 0){ 
               initial = adressInfo[0].length;
               end = adressLocal.length
           }else{
               initial = 0;
               end = adressInfo["index"] -1;
           }
           let currentAdress= [];
           currentAdress.push(adressLocal.slice(initial, end))
           currentAdress.push(adressInfo[0]);
           adressSplit.push(currentAdress)
       }
   })
   return adressSplit
 }
 console.log(verifyAdress())
