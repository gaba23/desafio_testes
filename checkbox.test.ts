import {describe, test, expect} from "vitest";

const checkbox = document.getElementsByClassName("checkbox")
/* O objetivo é juntar em um array todos os itens do checkbox */

function checkOnebyOne(checkbox){
    /* Selecionar um contador para checar cada item e somar o contador em 1 a cada item marcado */
    let counter = 0;
    checkbox.forEach(element => {
        if(element.checked() === true){counter++}
    });
    return counter
}

function checkAppear(checkbox){
    /* Selecionar um contador para checar se cada item aparece, somando em 1 para cada escondido */
    let counter = 0;
    checkbox.forEach(element => {
        if(element.hidden === true){counter++}
    });
    return counter
}

describe("Checkbox", ()=>{
    test("All appearing", ()=>{
        const counter = checkAppear(checkbox);
        expect(counter).equal(0);
    })
    test("Start unchecked", ()=>{
        const counter = checkOnebyOne(checkbox);
        expect(counter).equal(0);
    })
    test("Just one check", ()=>{
        const counter = checkOnebyOne(checkbox);
        expect(counter).equal(1);
    })
})
