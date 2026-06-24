# Pense — Home page

Landing page estática e responsiva baseada no protótipo do Figma.

## Rodar localmente

Abra `index.html` diretamente no navegador ou execute um servidor local:

```powershell
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Personalização

- Cores e largura máxima: variáveis no início de `styles.css`.
- Imagens provisórias: URLs em `index.html` e `styles.css`.
- Envio de formulários: hoje exibe uma confirmação local; conecte o evento `submit` de `script.js` ao endpoint desejado.
