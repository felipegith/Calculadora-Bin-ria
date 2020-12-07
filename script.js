



const inputDecimal = document.querySelector('div.containerInput input')
const buttonDecimal = document.querySelector('button.buttonDecimal')

buttonDecimal.onclick = function(){

    const rec = inputDecimal.value
   
    const binario = rec => {
        const binarioArray = []
        while(rec > 1){
            binarioArray.push(rec % 2)
            rec = Math.floor(rec / 2)
        }
        binarioArray.push(rec)
            return parseInt(binarioArray.reverse().join(""))
            
            
    }
    document.getElementById('conct').innerHTML = rec
    document.getElementById('resu').innerHTML = (binario(rec))
    
   
 }

 const inputBinario = document.querySelector('div.containerInputt input')
 const buttonBinario = document.querySelector('button.buttonBinario')


buttonBinario.onclick = function(){

    const recBin = inputBinario.value
    
    let bin = recBin;
    let dec = 0;
    for (let c = 0; c < bin.length; c++) dec += Math.pow(2, c) * bin[bin.length - c - 1]; //calcula para pegar do último ao primeiro
    console.log(dec);

    document.getElementById('conctt').innerHTML = recBin
    document.getElementById('resuu').innerHTML = dec;
    
}