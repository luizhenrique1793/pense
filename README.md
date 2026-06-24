# Pense Assim — site institucional

Site institucional da Pense Assim desenvolvido em Nuxt, com páginas estáticas, cases, formulário com envio para WhatsApp e estrutura pronta para deploy em hospedagem convencional.

## Requisitos

- Node.js 18 ou superior
- npm

## Instalação

```powershell
npm install
```

## Rodar localmente

```powershell
npm run dev
```

Depois acesse:

```text
http://127.0.0.1:8080/
```

## Gerar build estática

```powershell
npm run generate
```

A versão pronta para hospedagem será gerada em:

```text
.output/public
```

Para publicar em cPanel/FTP, envie o conteúdo de `.output/public` para o `public_html` da hospedagem.

## Estrutura principal

- `pages/`: páginas do site
- `components/`: componentes reutilizáveis
- `data/`: dados dos cases e informações do site
- `assets/css/main.css`: estilos globais
- `public/imagens/`: imagens públicas usadas pelo site

## Deploy

Este projeto está configurado para gerar um site estático. A hospedagem final não precisa rodar Node.js; basta servir os arquivos gerados em `.output/public`.
