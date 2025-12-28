const opcoes = [
    { nome: "Pizza de Calabresa", icone: "🍕" }, { nome: "Hambúrguer Artesanal", icone: "🍔" },
    { nome: "Sushi e Sashimi", icone: "🍣" }, { nome: "Tacos Mexicanos", icone: "🌮" },
    { nome: "Macarronada Italiana", icone: "🍝" }, { nome: "Churrasco", icone: "🍖" },
    { nome: "Comida Chinesa", icone: "🥡" }, { nome: "Salada Completa", icone: "🥗" },
    { nome: "Açaí com Granola", icone: "🍧" }, { nome: "Esfiha e Kibe", icone: "🥙" },
    { nome: "Frango Assado", icone: "🍗" }, { nome: "Hot Dog Especial", icone: "🌭" },
    { nome: "Feijoada", icone: "🍲" }, { nome: "Lasanha de Carne", icone: "🥘" },
    { nome: "Coxinha e Salgados", icone: "🥨" }, { nome: "Poke Havaiano", icone: "🥣" },
    { nome: "Estrogonofe de Frango", icone: "🍛" }, { nome: "Yakisoba", icone: "🍜" },
    { nome: "Peixe Grelhado", icone: "🐟" }, { nome: "Risoto de Cogumelos", icone: "🍚" },
    { nome: "Pastel de Feira", icone: "🥟" }, { nome: "Sanduíche Natural", icone: "🥪" },
    { nome: "Panquecas", icone: "🥞" }, { nome: "Waffles", icone: "🧇" },
    { nome: "Burrito", icone: "🌯" }, { nome: "Espetinho de Carne", icone: "🍢" },
    { nome: "Tempura", icone: "🍤" }, { nome: "Omelete Recheada", icone: "🍳" },
    { nome: "Batata Recheada", icone: "🥔" }, { nome: "Nuggets de Frango", icone: "🐥" },
    { nome: "Tapioca Recheada", icone: "🌮" }, { nome: "Moqueca de Peixe", icone: "🥘" },
    { nome: "Bife com Batata Frita", icone: "🥩" }, { nome: "Ceviche", icone: "🥗" },
    { nome: "Pão de Queijo", icone: "🧀" }, { nome: "Falafel", icone: "🧆" },
    { nome: "Ramen", icone: "🍜" }, { nome: "Paella", icone: "🥘" },
    { nome: "Curry de Grão-de-Bico", icone: "🍛" }, { nome: "Nhoque ao Sugo", icone: "🍝" },
    { nome: "Caldo de Cana e Pastel", icone: "🥤" }, { nome: "Pipoca e Filme", icone: "🍿" },
    { nome: "Donuts", icone: "🍩" }, { nome: "Bolo de Chocolate", icone: "🍰" },
    { nome: "Sorvete", icone: "🍦" }, { nome: "Frutas Frescas", icone: "🍎" },
    { nome: "Petit Gateau", icone: "🧁" }, { nome: "Churros", icone: "🥨" },
    { nome: "Pudim de Leite", icone: "🍮" }, { nome: "Brigadeiro Gourmet", icone: "🍫" }
];

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-decide');
    const foodDisplay = document.getElementById('food-name');
    const iconDisplay = document.querySelector('.placeholder-icon');

    if (!btn) return; // Segurança caso o ID esteja errado

    let sorteando = false;

    btn.addEventListener('click', () => {
        if (sorteando) return;
        sorteando = true;
        
        btn.innerText = "ESCOLHENDO...";
        iconDisplay.classList.add('shaking');

        let contador = 0;
        const intervalo = setInterval(() => {
            const aleatorioTemp = opcoes[Math.floor(Math.random() * opcoes.length)];
            foodDisplay.innerText = aleatorioTemp.nome;
            iconDisplay.innerText = aleatorioTemp.icone;
            contador++;

            if (contador > 15) {
                clearInterval(intervalo);
                const final = opcoes[Math.floor(Math.random() * opcoes.length)];
                foodDisplay.innerText = final.nome;
                iconDisplay.innerText = final.icone;
                iconDisplay.classList.remove('shaking');
                btn.innerText = "SORTEAR NOVAMENTE";
                sorteando = false;
            }
        }, 80);
    });

});


  atOptions = {
    'key' : '4a789fba3407f490e3c0162689ef2d04',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
