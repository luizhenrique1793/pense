<template>
  <footer class="footer">
    <div class="container footer-main">
      <div class="footer-about">
        <h2>Pense Assim</h2>
        <p>Transformamos conteúdo em design, fotografia, vídeo, publicidade e comunicação de resultados. Pensamos o seu negócio para que seus potenciais clientes lembrem da sua marca nas decisões de consumo.</p>
        <div class="social-links" aria-label="Redes sociais">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="YouTube">▶</a>
          <a href="#" aria-label="LinkedIn">in</a>
        </div>
      </div>

      <nav class="footer-links" aria-label="Links do rodapé">
        <h2>Navegação</h2>
        <NuxtLink to="/cases">Cases</NuxtLink>
        <NuxtLink to="/solucoes">Soluções</NuxtLink>
        <NuxtLink to="/sobre">Sobre</NuxtLink>
        <NuxtLink to="/#contato">Contato</NuxtLink>
      </nav>

      <div class="footer-contact">
        <h2>Contatos</h2>
        <dl>
          <div><dt>WhatsApp</dt><dd><a href="https://wa.me/5543991619048" target="_blank" rel="noopener">+55 43 99161-9048</a></dd></div>
          <div><dt>Email</dt><dd><a href="mailto:fabio@penseassim.com.br">fabio@penseassim.com.br</a></dd></div>
          <div><dt>Endereço</dt><dd>Rua Dr. Elias Cesar, 55 -<br>sala 501, Londrina - PR</dd></div>
        </dl>
      </div>
    </div>

    <div class="footer-legal">
      <div class="container footer-bottom">
        <span>© Copyright 2025 by <strong>Pense</strong></span>
        <span class="developed">Desenvolvido por: <b class="mini-brand">PEN<br>SE</b></span>
        <span>Política de Privacidade · Relatório de Transparência e Igualdade Salarial</span>
      </div>
    </div>
  </footer>
</template>
