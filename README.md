# Implementação simples de Hashbang com iFrame

Esta implementação foi desenvolvida rapidamente em cima do skeleton `es6` do brunch.
Para rodar, siga as intruções abaixo (em inglês)

Esta implementação foi desenvolvida devido à necessidade de acesso em uma rede corporativa cheia de navegadores obsoletos,
tornando necessária a implementação de hashbangs em vez da API de History do HTML 5.

# Brunch + Babel/ES6

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org)
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)