# Carrefour Tech Day - ecommerce
***⚠️ Pode ser que exista um problema com o CORS. Para isso utilizo o [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt-br), que pode ser encontrado no Chrome Web Store ⚠️***

## Site ecommerce baseado no site de compras Carrefour

## Resumo
Projeto desenvolvido para o Carrefour Tech Day.
Utilizando de uma das APIs do Carrefour para o desenvolvimento de um site ecommerce.

## Informações
A página inicial conta com um slide de imagens, alguns cards de promoções, e outros componentes.

O menu é totalmente interativo, com uma barra de pesquisa funcional e com os elementos de menu que levam para suas respectivas páginas.

A página de produtos pode ser filtrada por ordem de relevância, maior preço e menor preço, e também pode ser determinado um intervalo de valor passado pelo elemento de faixa de preço a esquerda. Se a busca por produtos não gerar nenhum produto, uma mensagem é mostrada para o usuário.

O menu é totalmente interativo, com uma barra de pesquisa funcional e com os elementos de menu que levam para suas respectivas páginas. O campo de pesquisa trás elementos cujo nome é igual ou contem elementos do campo.

O click no produto o leva para uma página que mostra as informações do produto, podendo adicioná-lo no carrinho. Os produtos adicionados no carrinho são armazenados no localStorage.
Os produtos do carrinho podem ser visto na página de carrinho que mostra todos os produtos adicionados, onde a quantidade de tal produto pode ser alterada, e também onde pode-se decidir a permanência do produto. Se o carrinho estiver vazio, uma mensagem é mostrada para o usuário informando que não há produtos no carrinho.

## Ferrmentas utilizadas
Feito com React. Neste projeto foram utilizados algumas ferramentas, como Styled Components para estilização dos elementos, Axios para buscar dados da API Carrefour, e Material UI para alguns elementos.
