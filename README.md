# CustomOptions
Módulo para Magento 2 responsável por adicionar as opções personalizadas dos produtos dentro de um dropdown 

## Requitos 

* Pasta BUZZ dentro da app/code (obrigatorio);
* Preferencialmente modulo <a href="https://github.com/Buzz-Dev-Web/Base">Base</a> instalado (nao obrigatorio)

## Compatibilidade

- [x] Testado em Magento 2.2.x
- [x] Testado em Magento 2.3.x
- [x] Testado em Magento 2.4.1

## Manual de instalação:

1 -> Faça download deste módulo em seu computador;

2 -> Extraia o conteúdo do módulo de modo que crie uma pasta chamada **CustomOptions**, caso não extraia com este nome, altere para que fique!

3 -> Mova a pasta CustomOptions para dentro da pasta Buzz, o caminho do diretorio deve ser app/code/Buzz;

4 -> Certifique-se que a loja encontra-se em modo desenvolvimento. Via terminal digite:

```

bin/magento deploy:mode:show

```

5 -> Caso a loja não esteja em modo desenvolvimento, digite este comando para habilitar o modo developer:

```

bin/magento deploy:mode:set developer

```

6 -> Estando em modo desenvolvimento proceda com o comando abaixo.

7 -> Via terminal prossiga com a instalação através do comando.

```

bin/magento setup:upgrade

```

8 -> Por segurança recompile a loja e execute o deploy, comandos abaixo.

```

bin/magento setup:di:compile

bin/magento setup:static-content:deploy -f pt_BR

```

9 -> O módulo já está instalado e não necessita de configuração.

## Instalação via composer

Em Desenvolvimento!

### Dúvidas/Suporte:
Entre em contato com o nosso departamento de suporte.