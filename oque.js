const bancoDeDados = {
    cafe: [{nome:"Pão de Queijo", icone:"🧀"}, {nome:"Tapioca", icone:"🌮"}, {nome:"Omelete", icone:"🍳"}, {nome:"Panquecas", icone:"🥞"}],
    almoco: [{nome:"Feijoada", icone:"🍲"}, {nome:"Churrasco", icone:"🍖"}, {nome:"Peixe", icone:"🐟"}, {nome:"Massa", icone:"🍝"}],
    lanche: [{nome:"Coxinha", icone:"🥨"}, {nome:"Açaí", icone:"🍧"}, {nome:"Sanduíche", icone:"🥪"}, {nome:"Pastel", icone:"🥟"}],
    jantar: [{nome:"Pizza", icone:"🍕"}, {nome:"Sushi", icone:"🍣"}, {nome:"Hambúrguer", icone:"🍔"}, {nome:"Sopa", icone:"🥣"}],
    merenda: [{nome:"Bolo", icone:"🍰"}, {nome:"Pipoca", icone:"🍿"}, {nome:"Donuts", icone:"🍩"}, {nome:"Pão com Manteiga", icone:"🍞"}]
};

let opcoesAtuais = [];

document.addEventListener('DOMContentLoaded', () => {
    const mealSelector = document.getElementById('meal-selector');
    const mealDisplay = document.getElementById('meal-type-display');
    const btnDecide = document.getElementById('btn-decide');
    const foodDisplay = document.getElementById('food-name');
    const iconDisplay = document.querySelector('.placeholder-icon');
    const btnChange = document.getElementById('btn-change-meal');

    // Seleção da refeição
    document.querySelectorAll('.meal-btn').forEach(botao => {
        botao.addEventListener('click', () => {
            const tipo = botao.getAttribute('data-meal');
            opcoesAtuais = bancoDeDados[tipo];
            mealDisplay.innerText = "Bóia: " + botao.innerText;
            mealSelector.style.display = 'none';
        });
    });

    // Botão Trocar Refeição
    btnChange.addEventListener('click', () => {
        mealSelector.style.display = 'flex';
        foodDisplay.innerText = "Estou com fome de...";
        iconDisplay.innerText = "❓";
        document.getElementById('btn-photo').style.display = "none";
        document.getElementById('btn-share').style.display = "none";
        btnDecide.innerText = "SORTEAR MINHA BÓIA";
    });

    let sorteando = false;

    btnDecide.addEventListener('click', () => {
        if (sorteando || opcoesAtuais.length === 0) return;
        sorteando = true;
        
        btnDecide.innerText = "A PREPARAR A BÓIA...";
        iconDisplay.classList.add('shaking');

        let contador = 0;
        const intervalo = setInterval(() => {
            const temp = opcoesAtuais[Math.floor(Math.random() * opcoesAtuais.length)];
            foodDisplay.innerText = temp.nome;
            iconDisplay.innerText = temp.icone;
            contador++;

            if (contador > 10) {
                clearInterval(intervalo);
                const final = opcoesAtuais[Math.floor(Math.random() * opcoesAtuais.length)];
                foodDisplay.innerText = final.nome;
                iconDisplay.innerText = final.icone;
                iconDisplay.classList.remove('shaking');
                btnDecide.innerText = "SORTEAR OUTRA";
                sorteando = false;
                
                document.getElementById('btn-photo').style.display = "block";
                document.getElementById('btn-share').style.display = "block";
            }
        }, 120);
    });

    // Câmera e Partilha
    document.getElementById('btn-photo').addEventListener('click', () => document.getElementById('camera-input').click());
    document.getElementById('btn-share').addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: 'Minha Bóia!',
                text: `O Bóia escolheu ${foodDisplay.innerText} para mim!`,
                url: window.location.href
            }).catch(() => {});
        }
    });
});
