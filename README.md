# Requisitos do Sistema

**RF** *** Requisitos Funcionais Do Sistema

 - O usuário deve poder listar todos os carros cadastrados;
 - O usuário deve poder listar os carros de acordo com os parâmtros informados na barra de busca;
 - O usuário deve poder realizar o cadastro de um novo veículo;
 - O usuário deve poder alterar os dados de um carro cadastrado;

**RNF** *** Requisitos Não Funcionais Do Sistemas

 - Utilizar o banco de dados não-relacional MongoDB para armazenar os carros cadastrado;

# Como Instalar e Executar o projeto

**Back-End** *** Instalação e Execução

 - Executar um container do MongoDB em sua máquina;
 * Caso não saiba como realizar o passo anterior recomendo: https://balta.io/blog/mongodb-docker;
 - Conectar o backend com o container do MongoDB em execução, alterarndo as configurações contidas no arquivo'ormconfig-exemplo.json' de acordo com a configuração da sua máquina, assim como renomear esse mesmo arquivo para somente 'ormconfig.json';
 - Na pasta backend executar o comando 'yarn' na raíz do pojeto;
 - Na pasta backend executar o comando 'yarn dev:server' na raíz do projeto;

**Front-End** *** Instalação e Execução

 - Executar o comando 'yarn' na pasta frontend;
 - Executar o comando 'yarn start' na pasta frontend;
