# Médias Realtivas

Autor: [Guilherme Alves Ceobaniuk Zaluchi](https://guilherme.zaluchi.com.br) <[guilherme@zaluchi.com.br](mailto:guilherme@zaluchi.com.br)>

Médias são um recurso estatístico muito útil para se medir uma tendência, inclinação ou o desvio de alguma função.
No entanto, são conhecidas por não possuírem precisão em representar dados.
Isso se dá por ser uma representação do todo, com suas variações, como se fosse um único elemento repetido várias vezes.

A solução proposta é o uso de _médias relativas_.
_Médias Relativas_ são médias relativas a própria média do conjunto.

+ A _média baixa_ é a média do conjunto dos números que são menores que a média do conjunto completo.
+ A _média alta_ é a média do conjunto dos números que são maiores que a média do conjunto completo.
+ A _média central_ é a média do conjunto dos números que são menores que a média alta, e maiores que a média baixa.

Com estas separações, e recursivamente reaplicando as definições, é possível se alcançar resultados mais aproximados para representações de grandes conjuntos de dados de alta variedade.

Segue exemplo de código (na pasta ```código```) para médias relativas nas seguintes linguagens:
+ JavaScript (CommonJS)
