# Relatório de Desenvolvimento Digital — CTMVida

Site estático (One Page) desenvolvido pela **NexEmpreende** para apresentar à diretoria do CTMVida a evolução do sistema administrativo e da infraestrutura digital da instituição.

## 🚀 Tecnologias

- HTML5
- CSS3
- JavaScript puro (Vanilla JS)
- [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) via CDN — usado **apenas** para gerar o PDF resumido no navegador.

Sem frameworks, sem backend, sem banco de dados.

## 📂 Estrutura

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── logo.png
    ├── placeholder-dashboard.png
    ├── placeholder-login.png
    ├── placeholder-storage.png
    ├── placeholder-canteen.png
    ├── placeholder-video.jpg
    └── ... (demais placeholders)
```

## ▶️ Como usar

1. Baixe/clonar o repositório.
2. Substitua as imagens dentro da pasta `assets/` pelas versões reais (mantendo os mesmos nomes de arquivo).
3. Abra o `index.html` diretamente no navegador — pronto.

## 🌐 Publicando no GitHub Pages

1. Faça o push do projeto para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` (pasta `/root`).
4. Salve. O site ficará disponível em `https://<seu-usuario>.github.io/<repositorio>/`.

## 📄 Geração de PDF

O botão **"Baixar Relatório em PDF"** no topo gera automaticamente uma versão resumida e profissional do relatório, feita 100% no navegador via `html2pdf.js`.

## 🖼️ Imagens

Todas as imagens são **placeholders locais** dentro de `/assets`. Basta substituir cada arquivo mantendo o mesmo nome para que o site continue funcionando.

## ✨ Recursos

- Layout responsivo (desktop, notebook, tablet, celular)
- Animações discretas (fade-in, hover, botão animado)
- Scroll suave e botão "Voltar ao topo"
- Cabeçalho fixo com backdrop blur
- Identidade visual corporativa NexEmpreende (azul #2563EB)

---

**Desenvolvido por NexEmpreende** — Transformando instituições através da tecnologia.
