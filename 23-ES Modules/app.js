import myMod1, { myMod1_nomeada, PI, obj, nome, idade } from "./modules/mod1.js"



const myMod = myMod1()
console.log("app rodando ----", myMod1_nomeada(), PI)
console.log('______________________')
console.log(obj.foo, obj.bar)
console.log(nome + ':' + idade)