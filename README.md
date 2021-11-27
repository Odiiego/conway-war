![Badge](https://img.shields.io/github/license/DiegoPaula/Game-of-Life)
![Badge](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDiegoPa49269521)

# conway-war
Uma versão multiplayer do Jogo da Vida de Conway, onde suas contribuições no Github enfrentam outro jogador em partidas hipnóticas com resultados inesperados.

![Gif](https://media0.giphy.com/media/Jk2kxYz5VfLUSf9G8R/giphy.gif?cid=790b7611ede8db3e6b7c94265e49cd0bbabd6d8e49039a1d&rid=giphy.gif&ct=g)
![Gif](https://media1.giphy.com/media/xtX9xVn5NKO1WkSWoa/giphy.gif?cid=790b761113b2f9ac5780a3ca8b21d67406d504b225b8e11a&rid=giphy.gif&ct=g)
![Gif](https://media2.giphy.com/media/ZV71REQoBO5WOqSfPx/giphy.gif?cid=790b7611782d95276a6ecd0c30015c2c3d72f8db4d367e97&rid=giphy.gif&ct=g)

## Instalação
 
Para começar é necessário clonar o repositório do projeto em um diretório de sua escolha:

```shell
cd "seu_diretório"
git clone https://github.com/DiegoPaula/conway-war
```
Depois de clonar, você deve instalar todas as dependências:
```shell
cd conway-war
npm install
```
[**Atenção! É necessário criar um token de acesso no Github, com a autorização "read:user".**](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)

Com seu token copiado, basta criar um arquivo ".env" no repositório principal com o conteúdo:
```shell
REACT_APP_GITHUB_ACCESS_TOKEN = seu_token_de_acesso
```

## Utilização
Com o projeto devidamente instalado, você pode rodar um servidor de desenvolvimento com o comando:

```shell
cd "seu_diretório"\conway-war
npm start
```
 
# Sobre o Projeto:
John Conway foi um matemático britânico ativo em muitas áreas da matemática, tornou-se conhecido pela invenção do autômato celular conhecido como Jogo da Vida.

Meu primeiro contato com sua obra foi através da notícia de seu falecimento em 11 de abril de 2020, aos 82 anos, em decorrência de complicações da COVID-19.

Este projeto é uma humilde homenagem ao seu trabalho.
 
## Tecnologias Usadas:
  -  React
  -  CSS
  -  GraphQL
