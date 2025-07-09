function sorteio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function gerarNumerosUnicos(qtd, min, max) {
  const numerosUnicos = new Set();

  while (numerosUnicos.size < qtd) {
    const numeroSorteado = sorteio(min, max);
    numerosUnicos.add(numeroSorteado);
  }

  return Array.from(numerosUnicos);
}

const quantidadeDeNumeros = 5;

for (i = 0; i < 5; i++) {
  switch (i) {
    case 0:
      numerosSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 1, 15);

      for (let j = 0; j < numerosSorteado.length; j++) {
        num = j + 1;
        $("#letraB").append(
          `
                    <button onclick = "marcarBloco(${num})" class="quadrado letraB">
                        <label>${numerosSorteado[j]}</label>
                        <span id = "bloco${num}" class = "marcador">X</span>
                    </button>

                    `
        );
      }
      break;
    case 1:
      numerosSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 16, 30);

      num = 5;
      for (let j = 0; j < numerosSorteado.length; j++) {
        num = num + 1;
        $("#letraI").append(
          `
                    <button onclick = "marcarBloco(${num})" class="quadrado letraI">
                        <label>${numerosSorteado[j]}</label>
                        <span id = "bloco${num}" class = "marcador">X</span>
                    </button>

                    `
        );
      }
      break;
    case 2:
      numerosSorteados = gerarNumerosUnicos(quantidadeDeNumeros, 31, 45);

      num = 10;
      for (let j = 0; j < numerosSorteados.length; j++) {
        num = num + 1;
        if (num != 13) {
          $("#letraN").append(
            `
                            <button onclick="marcarBloco(${num})" class="quadrado letraN">
                                <label>${numerosSorteados[j]}</label>
                                <span id="bloco${num}" class="marcador">X</span>
                            </button>
                        `
          );
        } else {
          $("#letraN").append(
            `
                        <button onclick="marcarBloco(${num})" class="quadrado letraN" style= "font-size: var(--tamanho-1dot3);"><h2>FREE</h2>
                            <span id="bloco${num}" class="marcador">X</span>
                        </button>
                    `
          );
        }
      }
      break;
    case 3:
      numerosSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 46, 60);

      num = 15;
      for (let j = 0; j < numerosSorteado.length; j++) {
        num = num + 1;
        $("#letraG").append(
          `
                    <button onclick = "marcarBloco(${num})" class="quadrado letraG">
                        <label>${numerosSorteado[j]}</label>
                        <span id = "bloco${num}" class = "marcador">X</span>
                    </button>

                    `
        );
      }
      break;
    case 4:
      numerosSorteado = gerarNumerosUnicos(quantidadeDeNumeros, 61, 75);

      num = 20;
      for (let j = 0; j < numerosSorteado.length; j++) {
        num = num + 1;
        $("#letraO").append(
          `
                    <button onclick = "marcarBloco(${num})" class="quadrado letraO">
                        <label>${numerosSorteado[j]}</label>
                        <span id = "bloco${num}" class = "marcador">X</span>
                    </button>

                    `
        );
      }
      break;
  }
}

function marcarBloco(num) {
  document.getElementById(`bloco${num}`).style.display = "block";
}

function resetMarcacao() {
  for (i = 0; i < 25; i++) {
    num = i + 1;
    document.getElementById(`bloco${num}`).style.display = "none";
  }
}
