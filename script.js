document.addEventListener('DOMContentLoaded', function(){
  const printBtn = document.getElementById('printBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const poemEl = document.getElementById('poem');

  printBtn.addEventListener('click', function(){
    // déclenche la boîte d'impression : l'utilisateur pourra choisir "Enregistrer au format PDF"
    window.print();
  });

  downloadBtn.addEventListener('click', function(){
    // Récupère le texte affiché dans la carte
    const parts = Array.from(poemEl.querySelectorAll('p')).map(p => p.textContent.trim());
    const txt = parts.join('\n');
    const blob = new Blob([txt], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'message-pour-mon-amour.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 5000);
  });

});
