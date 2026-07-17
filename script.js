/* ============================================================
   NexEmpreende — Relatório CTMVida
   Interações: reveal, voltar ao topo, geração de PDF.
   ============================================================ */

/* ---------- Ano no rodapé ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Reveal on scroll (IntersectionObserver) ---------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

/* ---------- Botão voltar ao topo ---------- */
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backBtn.classList.add('visible');
  else backBtn.classList.remove('visible');
});
backBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- Geração de PDF resumido ----------
   Cria um HTML enxuto (apenas o essencial) e usa html2pdf.
   Isso evita capturar imagens pesadas e mantém o PDF profissional.
*/
document.getElementById('btnPdf').addEventListener('click', () => {
  const today = new Date().toLocaleDateString('pt-BR');

  const summary = document.createElement('div');
  summary.style.cssText = `
    font-family: Inter, Arial, sans-serif; color: #0F172A;
    padding: 40px; max-width: 800px; line-height: 1.6;
  `;
  summary.innerHTML = `
    <div style="border-bottom: 3px solid #2563EB; padding-bottom: 16px; margin-bottom: 24px;">
      <h1 style="font-size: 24px; margin: 0; color: #1E3A8A;">Relatório de Desenvolvimento Digital — CTMVida</h1>
      <p style="margin: 6px 0 0; color: #475569;">Evolução do Sistema Administrativo e Infraestrutura Digital</p>
      <p style="margin: 12px 0 0; font-size: 12px; color: #94A3B8;">Emitido em ${today} • NexEmpreende</p>
    </div>

    <h2 style="color:#2563EB; font-size:16px; margin: 20px 0 8px;">Visão Geral</h2>
    <p>A NexEmpreende está conduzindo a digitalização administrativa do CTMVida, desenvolvendo sistemas próprios para aumentar organização, segurança e eficiência operacional.</p>

    <h2 style="color:#2563EB; font-size:16px; margin: 20px 0 8px;">Entregas Realizadas</h2>
    <ul style="padding-left: 20px;">
      <li><strong>Sistema Administrativo iniciado</strong> — plataforma para organização de arquivos, usuários e setores.</li>
      <li><strong>Sistema de Login Seguro</strong> — login, cadastro, controle de acesso e segurança.</li>
      <li><strong>Organização por Setores</strong> — Direção, Secretaria, Financeiro, Coordenação, Professores e outros.</li>
      <li><strong>Armazenamento de Arquivos</strong> — upload, pastas, armazenamento seguro e compartilhamento interno.</li>
      <li><strong>Controle de Permissões</strong> — apenas o Diretor pode excluir arquivos.</li>
      <li><strong>Administração das Cantinas</strong> — módulo específico para o setor financeiro.</li>
      <li><strong>Cadastro de Produtos</strong> — cadastro, edição, exclusão e atualização.</li>
      <li><strong>Infraestrutura</strong> — hospedado na plataforma Render (gratuita, fácil manutenção, acesso online).</li>
    </ul>

    <h2 style="color:#2563EB; font-size:16px; margin: 20px 0 8px;">Próximas Etapas</h2>
    <ul style="padding-left: 20px;">
      <li>✔ Sistema Administrativo</li>
      <li>✔ Login Seguro</li>
      <li>✔ Gestão de Arquivos</li>
      <li>✔ Controle de Permissões</li>
      <li>✔ Administração das Cantinas</li>
      <li>⬜ Plataforma de Cursos</li>
      <li>⬜ Ambiente Virtual de Aprendizagem (AVA)</li>
      <li>⬜ Gestão Financeira Avançada</li>
      <li>⬜ Comunicação Institucional</li>
      <li>⬜ Integração entre Plataformas</li>
    </ul>

    <div style="margin-top: 40px; padding-top: 16px; border-top: 1px solid #E2E8F0; text-align:center; color:#475569; font-size:12px;">
      Desenvolvido por <strong>NexEmpreende</strong> — Transformando instituições através da tecnologia.
    </div>
  `;

  const opt = {
    margin: 0,
    filename: `Relatorio-CTMVida-${today.replaceAll('/', '-')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };

  const btn = document.getElementById('btnPdf');
  const original = btn.innerHTML;
  btn.innerHTML = '<span class="icon">⏳</span><span>Gerando PDF...</span>';
  btn.disabled = true;

  html2pdf().from(summary).set(opt).save().then(() => {
    btn.innerHTML = original;
    btn.disabled = false;
  }).catch(() => {
    btn.innerHTML = original;
    btn.disabled = false;
    alert('Não foi possível gerar o PDF. Tente novamente.');
  });
});
