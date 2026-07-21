// ========================================
// DOCKER - Interactividad
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initAccordions();
    initTabs();
    initCopyButtons();
});

/* --- Acordeones --- */
function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            const wasOpen = accordion.classList.contains('open');

            // Cerrar todos los acordeones del mismo grupo
            const group = accordion.parentElement;
            if (group) {
                group.querySelectorAll('.accordion').forEach(a => a.classList.remove('open'));
            }

            // Toggle el acordeón clickeado
            if (!wasOpen) {
                accordion.classList.add('open');
            }
        });
    });
}

/* --- Tabs --- */
function initTabs() {
    document.querySelectorAll('.tabs').forEach(tabContainer => {
        const buttons = tabContainer.querySelectorAll('.tab-btn');
        const contents = tabContainer.querySelectorAll('.tab-content');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.tab;

                // Desactivar todos
                buttons.forEach(b => b.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // Activar el seleccionado
                btn.classList.add('active');
                const targetContent = tabContainer.querySelector(`[data-content="${target}"]`);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}

/* --- Copiar código --- */
function initCopyButtons() {
    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('code');

            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    btn.textContent = 'Copiado!';
                    btn.classList.add('copied');

                    setTimeout(() => {
                        btn.textContent = 'Copiar';
                        btn.classList.remove('copied');
                    }, 2000);
                });
            }
        });
    });
}
