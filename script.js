//Calculos do Peso ideal
function picalc(){
    height = document.querySelector("#altura-pi-calc");
    select = document.querySelector('#genero');
    
    let altura = height.value;
    let genero = select.options[select.selectedIndex];
    
    if(genero.value && altura){
        if(genero.value === 'masculino'){
            let cal = (altura - 100) * 0.90;
            let resultado = cal.toFixed(1);
            document.querySelector('.picalc').innerHTML = `Seu peso ideal é ${resultado}kg`;
           
        } else if(genero.value === 'feminino'){
            let calcular = (altura - 100) * 0.85;
            document.querySelector('.picalc').innerHTML = `Seu peso ideal é ${calcular}kg`;
    
        }
       
    } else {
        document.querySelector('.picalc').innerHTML = `Preencha todos os dados para calcular`;
    }
}

function clicou(n){
    let numero = n;
    if(numero != null){
       document.querySelector('#altura-pi-calc').value += `${numero}`;
    }
}

function limparpi(){
    let input = document.querySelector('#altura-pi-calc').value;

    if(input.length >= 0){
        document.querySelector('#altura-pi-calc').value = '';
        document.querySelector('#genero').value = '';
        document.querySelector('.picalc').innerHTML = 'Seu peso ideal é -----';
    }
}

//Calculos do IMC
function imc(){
    altura = document.querySelector("#height");
    peso = document.querySelector("#weight");

    if(altura.value && peso.value){
        let cal = peso.value / (altura.value * altura.value);
        let resultado = cal.toFixed(1);
        document.querySelector('.imc-title-res').innerHTML = `Seu IMC é ${resultado}`;
    } else {
        document.querySelector('.imc-title-res').innerHTML = `Preencha todos os dados para calcular`;
    }
}

function limparimc(){
    let input = document.querySelector('#height').value;

    if(input.length >= 0){
        document.querySelector("#height").value  = '';
        document.querySelector("#weight").value = '';
        document.querySelector('.imc-title-res').innerHTML = 'Seu IMC é -----';
    }
}

function selecoa(e){
    let clicado = window.getSelection();
    let div = clicado.value = `${e}`; 
    
    if(div === 'height'){

        clicouimc = (n) =>{ 
            let numero = n;
            if(numero != null){
                document.querySelector('#height').value += `${numero}`; 
            }
        };
    } else if(div === 'weight'){

        clicouimc = (n) =>{
            let numero = n;
            if(numero != null){
                document.querySelector('#weight').value += `${numero}`; 
            }
        };
    }
}

//Calculos da Taxa Metabólica Basal
function tmb(){
    peso = document.querySelector("#peso-tmb-calc");
    idade = document.querySelector("#idade-tmb-calc");
    altura = document.querySelector("#altura-tmb-calc");
    select = document.querySelector('#sexo');

    let genero = select.options[select.selectedIndex];

    if(genero && peso.value && idade.value && altura.value){
        if(genero.value === 'masculino'){
        
            let calcular = 66 + (13.80 * peso.value) + (5.0 * altura.value) -  (6.8 * idade.value);
            document.querySelector('.tmb-title-res').innerHTML = `Sua TMB é ${calcular}kcal`;
    
        } else if (genero.value === 'feminino'){
    
            let calcular = 655 + (9.6 * peso.value) + (1.9 * altura.value) -  (4.7 * idade.value);
            document.querySelector('.tmb-title-res').innerHTML = `Sua TMB é ${calcular}kcal`;
    
        } 
    } else {
        document.querySelector('.tmb-title-res').innerHTML = `Preencha todos os dados para calcular`;
    }
}

function selecoatmb(e){
    let clicado = window.getSelection();
    let div = clicado.value = `${e}`; 
    
    if(div === 'peso-tmb-calc'){

        clicoutmb = (n) =>{ 
            let numero = n;
            if(numero != null){
                document.querySelector('#peso-tmb-calc').value += `${numero}`; 
            }
        };
    } else if(div === 'idade-tmb-calc'){

        clicoutmb = (n) =>{
            let numero = n;
            if(numero != null){
                document.querySelector('#idade-tmb-calc').value += `${numero}`; 
            }
        };
    } else if(div === 'altura-tmb-calc'){

        clicoutmb = (n) =>{
            let numero = n;
            if(numero != null){
                document.querySelector('#altura-tmb-calc').value += `${numero}`; 
            }
        };
    }

}

function limpartmb(){
    let input = document.querySelector('#peso-tmb-calc').value;

    if(input.length >= 0){
        document.querySelector("#peso-tmb-calc").value  = '';
        document.querySelector("#idade-tmb-calc").value = '';
        document.querySelector("#altura-tmb-calc").value = '';
        document.querySelector("#sexo").value  = '';
        document.querySelector('.tmb-title-res').innerHTML = 'Sua TMB é -----';
    }
}

//acionando o botão enter para fazer o calculo em cada calculadora 
document.addEventListener('keypress', (e)=>{
    heightpi = document.querySelector("#altura-pi-calc");
    
    alturaimc = document.querySelector("#height");
    pesoimc = document.querySelector("#weight");

    pesotmb = document.querySelector("#peso-tmb-calc");
    idadetmb = document.querySelector("#idade-tmb-calc");
    alturatmb = document.querySelector("#altura-tmb-calc");
    
    if(heightpi.value != ""){
        let imc = document.querySelector('#btn-pi')
        if(e.key === 'Enter'){
            imc.click();
        }
    }

    if(alturaimc.value != "" || pesoimc.value != ""){
        let imc = document.querySelector('#btn-imc')
        if(e.key === 'Enter'){
            imc.click();
        }
    }

    if(pesotmb.value != "" || idadetmb.value != "" || alturatmb.value != "" ){
        let imc = document.querySelector('#btn-tmb')
        if(e.key === 'Enter'){
            imc.click();
        }
    }
    
})