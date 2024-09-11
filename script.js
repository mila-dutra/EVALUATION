const funcionarios = [
        "ADAUTO SILVA", "XING WEI", "ALANA SAMPAIO CAVALCANTE", 
    "ALBERTO LUIZ DE JESUS CARVALHO", "ALEX SANDRO RIBEIRO DOS SANTOS", 
    "ALEXANDRE BARBOSA", "ALEXANDRE VITORIO DE SANTANA SANTOS", 
    "ALEXANDRO CERQUEIRA DE SOUZA", "ANA PAULA PEREIRA CLEMENTE", 
    "ANDERSON DOMINGOS", "ANDRESSA PINTO SILVA BARROS", 
    "ANGELA JACQUELINE GONCALVES DOS SANTOS", "ARI FIRMINO DE SALES JUNIOR", 
    "ARTHUR BACELAR DE SOUZA", "ARTHUR SUCUPIRA REIS GONCALVES", 
    "BEATRIZ CRISTINA FERNANDES ALVES", "BEATRIZ REGINA RINALDO", 
    "BRUNO BORGES COELHO", "BUENA DA SILVA FERREIRA DANTAS", 
    "CARLOS CONCEICAO DE SOUZA JUNIOR", "CARLOS EDUARDO DA ROSA DE OLIVEIRA", 
    "CARMEN VERONICA DA SILVA LOBAO", "CASSIA SILVA CORDEIRO DE MIRANDA", 
    "CHUNG I TA", "CLEITON DOS SANTOS GUIMARAES", "CLOVIS BERNARDES DE SOUZA", 
    "DANIEL DOMINGUEZ RIBEIRO", "DANIELA MEDIOLARO BENAZZI", 
    "DANILO DE CARVALHO FIAES", "DEBORA VIVIANE FARO OLIVEIRA", 
    "DIEGO PITA DOS ANJOS SILVA", "DIEGO SOUZA DE JESUS", "MING LIU", 
    "EDIVANEI FERNANDES DA CONCEICAO", "EDUARDO CARNEIRO DE CAMPOS LERNER", 
    "EDUARDO CAVALCANTE SILVA NETO", "ENIO GONCALVES SA", 
    "ERICLES MAURICIO SILVA DE ARAUJO", "EVANDRO TEIXEIRA DE ARAUJO", 
    "EVANDSON MATOS RAMOS JUNIOR", "FABIANO LANFRANCHI RAMALHO", 
    "ADSON FREITAS SANTANA", "FABIO EVANGELISTA SIMOES", 
    "FELIPE MENDONCA PELETEIRO", "FERNANDA OLIVEIRA DA SILVA", 
    "FERNANDO HAGE REIS", "GIULIA COSTA GHIRARDI", "GIULIA GONCALVES FABIAN", 
    "GUILHERME LUIZ PINTO DOS SANTOS", "HELAINE PEREIRA BARBOSA", 
    "HENRIQUE DE ARAUJO FERREIRA", "IGOR BELCHOTE TROCOLI MESQUITA", 
    "ISAAC SANTOS DE OLIVEIRA", "JANAINA SILVA BENTO GUIMARAES", 
    "FABIO CONCEICAO DE MENEZES", "JEFFERSON FRANCA DE JESUS", 
    "JESSICA CAVALCANTI ARRAES", "JIEYING WU", "JOAO PAULO SILVA NASCIMENTO", 
    "JORDANA BARBOSA DIAZ", "JOSE BENEDITO MOTTA SALOMAO", 
    "JOSE ROBERTO BARRETO DA SILVA", "JULIANA GOMES E ANDRADE TAWIL", 
    "WAGNER LACERDA DANTAS", "LUCAS ARAUJO OLIVEIRA", "KLEBER FERREIRA", 
    "LAIRIS RODRIGUES GOMES MARINS", "LARISSA DA SILVA CASTRO DE ALMEIDA", 
    "LARISSA MOREIRA MAGALHAES", "LEANDRO ARAUJO FERREIRA", 
    "LEANDRO SANTANA BARBOSA", "LEONE DE JESUS MACEDO FILHO", 
    "LIDIA EVANGELISTA DOS SANTOS", "LINCOLN DINIZ ALVES DE LIMA", 
    "LU ZHAO", "SAMUEL BARBOSA DE SANTANA", "LUCAS OLIVEIRA MENDES", 
    "LUCIANO SANTOS COSTA", "LUIS ANTONIO PINTO DA ROCHA", 
    "LUIS FELIPE RIBEIRO DOS SANTOS", "LUIZ OTAVIO BARBOSA LARANJEIRA", 
    "MARCELO DE LIMA AROUCA", "MARCELO SANTIAGO MARTINS DE ALMEIDA SANTOS", 
    "MARCIO BITTAR MOREIRA", "MARCIO DE SANTANA MOTA", 
    "MARCOS SANTOS DA SILVA", "MARIANA HENRY PEREIRA", 
    "MARIANA SANTOS REGO", "MARINA BARBOSA DE QUADROS", 
    "MATEUS NEVES DE SOUSA", "MELISSA FERNANDES BARBOSA TAVARES", 
    "MELQUISEDEQUE OLIVEIRA DOS SANTOS", "MILANE LOPES DO COUTO DUTRA", 
    "WALZIMAR OLIVEIRA CARNEIRO", "NEIDSON CONCEICAO DE SANTANA", 
    "NILSON JOSE DA SILVA LOBO", "PAULO VITOR DE FREITAS LONES", 
    "PEDRO NETO RODRIGUES PIRES", "RAFAEL ALMEIDA SILVA GALVAO", 
    "RAFAEL MAGALHAES DE ALMEIDA COUTO", "RAQUEL SILVA GONCALVES", 
    "RAUL ROCHA TAMBURINE", "REBECA DANTAS FERNANDES", 
    "REBECCA NATALIE COSTA PEREIRA", "REGENILSON BARBOSA DE CERQUEIRA SANTOS", 
    "RENATO FERREIRA FERRINI", "RENE LOPEZ ROMERO", 
    "RICHARD RALPH SILVA BORGES", "ROBERTO LUIS MALTEZ SANTANA", 
    "ROBSON SOUZA BISPO", "RODRIGO ROSSETO", "ROGERIO JOSE GOMES DOS SANTOS", 
    "ROGERIO LUIS SANTOS SOUSA", "DOUGLAS DA SILVA DIAS", 
    "SHEINA MACHADO TURA", "SHEN BIN", "SILVIA NASCIMENTO JAQUEIRA", 
    "TAIANE RIBEIRO DOS SANTOS", "TAINE DE MELO CARNEIRO OLIVEIRA", 
    "TAISE DOS SANTOS", "TAMIRES FERNANDES FRANCA", 
    "TAYNA SANTOS DOS SANTOS", "THIAGO FERNANDES SOARES LEONE", 
    "THIAGO RIGONATO", "UGO MARIA ROSAS DE ALCANTARA", 
    "VICTOR SANTOS DE SOUZA", "VOLKER HEUMANN", "WAGNER BAZARIN MEUCCI", 
    "ZHAO HUICI"
        // Add more employees here...
    ];

    function verifyGestorID() {
        const gestorID = document.getElementById("gestorID").value;
        if (gestorID) {
            document.querySelector(".gestor-id-section").style.display = "none";
            document.getElementById("searchBox").style.display = "block";
        } else {
            alert("Please enter a valid Manager ID.");
        }
    }

    function filtrarFuncionarios() {
        const input = document.getElementById("searchFuncionario").value.toLowerCase();
        const lista = document.getElementById("listaFuncionarios");
        lista.innerHTML = "";
        
        funcionarios.forEach(funcionario => {
            if (funcionario.toLowerCase().includes(input)) {
                const div = document.createElement("div");
                div.textContent = funcionario;
                div.classList.add("funcionario-item");
                div.onclick = () => selecionarFuncionario(funcionario);
                lista.appendChild(div);
            }
        });
    }

    function selecionarFuncionario(funcionario) {
        document.getElementById("searchBox").style.display = "none";
        document.getElementById("avaliacao").style.display = "block";
        console.log("Selected employee:", funcionario);
    }

    function calcularPagamento() {
        const avaliacao1 = parseInt(document.getElementById("avaliacao1").value);
        const avaliacao2 = parseInt(document.getElementById("avaliacao2").value);
        const somaAvaliacoes = avaliacao1 + avaliacao2;

        let pagamento = 0;
        if (somaAvaliacoes === 100) {
            pagamento = 100;
        } else if (somaAvaliacoes === 150) {
            pagamento = 150;
        } else if (somaAvaliacoes === 200) {
            pagamento = 200;
        }

        document.getElementById("resultado").textContent = `Payment: R$ ${pagamento},00`;
    }

    function enviarDados() {
        const idGestor = document.getElementById('gestorID').value;
        const funcionario = document.getElementById('searchFuncionario').value;
        const demand1 = document.getElementById('demand1').value;
        const demand2 = document.getElementById('demand2').value;
        const avaliacao1 = document.getElementById('avaliacao1').value;
        const avaliacao2 = document.getElementById('avaliacao2').value;
        const pagamento = document.getElementById('resultado').textContent;

        const data = {
            idGestor,
            funcionario,
            demand1,
            demand2,
            avaliacao1,
            avaliacao2,
            pagamento
        };

        // Envia os dados para uma API ou servidor
        fetch('https://sua-api.com/endpoint', {  // Aqui você pode substituir com a URL da sua API.
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert('Dados enviados com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao enviar os dados:', error);
        });
    }