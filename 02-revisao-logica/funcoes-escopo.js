let n = "Global"

function mostraN(){
    let n1 = "n1 local"
    
    if(true){
        var n2 = "n2 dentro de if com var"
    }
    console.log(n2)
    console.log(`Valor de n: ${n1}`)
    console.log(`Valor de n: ${n2}`)
}

mostraN()

console.log(`Valor de n no escopo global: ${n}`);


function fnExt(){
    let n = "n local na funçao dnExt";

    function fnInt(){
        let n = "n local na funçao dnIxt";
        console.log(n);
    }
    fnInt();
    console.log(n);


}
fnExt();