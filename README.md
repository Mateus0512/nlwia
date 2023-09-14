# Shorts Summary - NLW IA

## Descrição

O **Shorts Summary** é uma aplicação web inovadora desenvolvida como parte do evento NLW IA da Rocketseat. Esta aplicação utiliza inteligência artificial para gerar resumos de vídeos curtos do YouTube a partir do áudio dos vídeos. Com o Shorts Summary, você pode obter rapidamente um resumo em texto do conteúdo de vídeos curtos, economizando tempo e tornando o conteúdo mais acessível.

## Funcionalidades

- **Conversão de Áudio para Texto:** O Shorts Summary utiliza a tecnologia Xenova/Transformers para converter o áudio dos vídeos em texto de forma precisa e eficiente.

- **Geração de Resumos Automáticos:** Com base no conteúdo do áudio, a aplicação gera automaticamente resumos que destacam os principais pontos do vídeo.

- **Compatibilidade com Diversos Vídeos:** O Shorts Summary suporta a análise de shorts do YouTube usando a biblioteca `ytdl-core`, tornando-o compatível com uma ampla variedade de conteúdo.

## Tecnologias Utilizadas

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Processamento de Áudio: Xenova/Transformers, FFmpeg
- Requisições HTTP: Axios
- Controle de Acesso: CORS
- Manipulação de Vídeo e Áudio: Fluent-FFmpeg, Node-Wav
- Recuperação de Vídeos do YouTube: ytdl-core
