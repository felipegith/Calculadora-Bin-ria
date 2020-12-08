



const inputDecimal = document.querySelector('div.containerInput input')
const buttonDecimal = document.querySelector('button.buttonDecimal')

buttonDecimal.onclick = function(){

    const rec = inputDecimal.value
   
    const principalbinario = rec => {
        const aBinario = []
        while(rec > 1){
            aBinario.push(rec % 2)
            rec = Math.floor(rec / 2)
        }
        aBinario.push(rec)
            return parseInt(aBinario.reverse().join(""))
            
            
    }
    document.getElementById('conct').innerHTML = rec
    document.getElementById('resu').innerHTML = (principalbinario(rec))
    
   
 }

 const inputBinario = document.querySelector('div.containerInputt input')
 const buttonBinario = document.querySelector('button.buttonBinario')


buttonBinario.onclick = function(){

    const recBin = inputBinario.value
    
    let recebendoValor = recBin;
    let valorDe = 0;
    for (let valorFor = 0; valorFor < recebendoValor.length; valorFor++) valorDe += Math.pow(2, valorFor) * recebendoValor[recebendoValor.length - valorFor - 1]; 
    

    document.getElementById('conctt').innerHTML = recBin
    document.getElementById('resuu').innerHTML = valorDe;
    
}