/* Mejoras comunes de comportamiento para las páginas públicas */
function markImageAsFailed(image) {
    const source = image.getAttribute('src') || '';
    const fileName = source.split('/').pop();
    const fallback = window.LOGO_FALLBACKS?.[fileName];
    if (fallback && !image.dataset.fallbackTried) {
        image.dataset.fallbackTried = 'true';
        image.src = fallback;
        return;
    }
    image.setAttribute('aria-hidden', 'true');
    image.classList.add('image-failed');
    image.parentElement?.classList.add('image-missing');
}

window.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement) markImageAsFailed(event.target);
}, true);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button:not([type])').forEach(button => button.type = 'button');

    document.querySelectorAll('.news-card[onclick]').forEach(card => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
    });

    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    document.querySelectorAll('img:not([loading])').forEach(image => {
        if (!image.closest('.brand') && !image.closest('.hero-bg')) {
            image.setAttribute('loading', 'lazy');
        }
        image.setAttribute('decoding', 'async');
        image.addEventListener('error', () => markImageAsFailed(image), { once: true });
    });

    document.querySelectorAll('.social-link').forEach(link => {
        if (!link.getAttribute('aria-label')) {
            const icon = link.querySelector('i');
            const label = icon?.className.includes('whatsapp') ? 'Canal de WhatsApp' : 'Instagram de la liga';
            link.setAttribute('aria-label', label);
        }
    });

    document.querySelectorAll('[role="button"]').forEach(control => {
        control.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                control.click();
            }
        });
    });
});
