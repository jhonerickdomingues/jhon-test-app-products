# Aplicação teste de produtos

Loja de produtos.

Para esse teste, fiz o aplicativo web principal consumir duas dependencias (libs) que criei, que estão devidamente listadas no package.json, essas libs são:

**design system:** [repositório github](https://github.com/jhonerickdomingues/jhon-test-design-system) | [lib npm](https://www.npmjs.com/package/jhon-test-design-system) | [Storybook components](http://jhon-test-design-system.jhonerick.me/?path=/docs/ds-layout--docs)

**utils:** [repositório github](https://github.com/jhonerickdomingues/jhon-test-utils) | [lib npm](https://www.npmjs.com/package/jhon-test-utils)

#### Abaixo segue uma imagem da arquitetura:

![App Screenshot](https://uploaddeimagens.com.br/images/004/649/918/full/arquitetura.jpeg?1698442811)

## Instalação

Instale as dependencias

```bash
  npm install
```

Crie um arquivo chamado ".env" com conteudo de ".env.example" e altere se quiser:

```bash
  cp .env.example .env
```

Rode o projeto

```bash
  npm run dev
```

## Exemplos:

- [Aplicação Front online](http://jhon-test-app-products.jhonerick.me)
- [Aplicação Back online](http://jhon-test-api-products.jhonerick.me)
- [Storybook components](http://jhon-test-design-system.jhonerick.me/?path=/docs/ds-layout--docs)
