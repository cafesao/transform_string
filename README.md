## Transform String

Para utilizar basta ter o node instalado na sua maquina.

Então faça um `git clone` depois entre na pasta do projeto `cd transform_string`

Agora execute o comando `touch words.txt` e coloque as palavras no arquivo (Lembre de pular linha)

Você pode ver um exemplo no arquivo [example_words](https://github.com/cafesao/transform_string/blob/master/example_words.txt)

Depois de feita as alterações, execute o comando `node index.js '<Command>'`

Substitua `<Command>` por um dos abaixo:

- **up**: Transforma tudo em Maiúscula
- **low**: Transforma tudo em Minúscula
- **underscore**: Transforma as palavras inicias com underscore, exemplo: "TesteNumero" >> "Teste_Numero"
- **underscore_up**: Transforma as palavras inicias com underscore e coloca tudo em Maiúscula, exemplo: "TesteNumero" >> "TESTE_NUMERO"
