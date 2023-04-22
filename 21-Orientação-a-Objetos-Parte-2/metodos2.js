const obj = {
    prop1:  'prop 01',
    prop2:  'prop 02',
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}


Object.freeze(objFreeze) // nao pode criar nem atualizar, e nem remover propiedades
Object.seal(objSeal) // nao pode criar, pode atualizar, mas nao pode remover props
Object.preventExtensions(objPrevent) // nao pode criar, pode alterar e remover props