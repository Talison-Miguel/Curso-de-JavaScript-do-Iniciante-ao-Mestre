//npm i -D @babel/core@7.12.10 @babel/cli@7.12.10 @babel/preset-env@7.12.11
//npx babel src -d dist -w
//npx babel src -d dist --presets=@babel/env -w

const teste = 'Teste babel'

const arrowFn = n => n * n
console.log(arrowFn(2))

class Teste {
    constructor(n) {
        this.n = n
    }
}

console.log(new Teste(5))