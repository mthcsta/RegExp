# RegExp
Repositório destinado para minhas práticas com expressões regulares.

## Sumário

### Conteúdo
* [Links/Guias](#linksguias)
* [Metacaracteres](#metacaracteres)
    * [Representantes](#representantes)
    * [Quantificadores](#quantificadores)
    * [Âncoras](#âncoras)
    * [Outros](#outros)
* [Quantificadores](#quantificadores-1)
    * [Exemplos de Quantificadores](#exemplos-de-quantificadores)

### Exercitando RegExp em Linguagens
* [Javascript](ex-JS)

### Outros
* [Aulas](Aulas)


## Links/Guias
Para uso como guia, nada melhor que sites que ajudam a fazer uma expressão regular com mais facilidade.

__para praticar RegExp:__
<a href="https://regex101.com/" target="_blank" rel="noopener">https://regex101.com/</a>

__para ver os UNICODEs__
<a href="https://unicode-table.com/pt/" target="_blank" rel="noopener">https://unicode-table.com/pt/</a>


## Metacaracteres
### Representantes 
| Metacaractere     | Nome              | Significado                       |
|:------------------|:-----------------:|----------------------------------:|
| __.__             | Ponto             | Um caractere qualquer             |
| __[]__            | Conjunto          | Conjunto de caracteres permitidos |
| __[^]__           | Conjunto Negativo | Conjunto de caracteres proibidos  |

### Quantificadores
| Metacaractere     | Nome              | Significado                       |
|:------------------|:-----------------:|----------------------------------:|
| __?__             | Opcional          | Zero ou Um                        |
| __*__             | Asterisco         | Zero ou Mais                      |
| __+__             | Mais              | Um ou Mais                        |
| __{n,m}__         | Chaves            | De __n__ até __m__                |

### Âncoras
| Metacaractere     | Nome              | Significado                       |
|:------------------|:-----------------:|----------------------------------:|
| __^__             | Circunflexo       | Inicio de linha                   |
| __$__             | Cifrão            | Fim de linha                      |
| __\b__            | Borda             | Inicio ou fim de linha            |

### Outros
| Metacaractere     | Nome              | Significado                       |
|:------------------|:-----------------:|----------------------------------:|
| __\__             | Escape            | Uso de metacaracteres como literal|
| __|__             | Ou                | Operação de Ou                    |
| __( )__           | Grupo             | Define um Grupo                   |
| __\1...\9__       | Retrovisor        | Resgata grupos ja definidos       |


## Quantificadores
### Exemplos de Quantificadores
| Quantificador             | Significado                   |
|:-------------------------:|:-----------------------------:|
| __{2,3}__                 | De dois a três                |
| __{3,}__                  | Três ou mais                  |
| __{0,4}__                 | Até quatro                    |
| __{2}__                   | Exatamente dois               |
| __{0,1}__                 | Zero ou Um(semelhante ao ?)   |
| __{0,}__                  | Zero ou Mais(semelhante ao *) |
| __{1,}__                  | Um ou Mais(semelhante ao +)   |