/**
 * UI Controller for Info Modal
 * =============================
 * Aquest fitxer s'encarrega d'obrir i tancar la finestreta d'informació (modal).
 * Ara llegeix de window.cardData si hi ha un ID!
 */

// Populate cards on page load
function populateCards() {
    if (!window.cardData) return;

    document.querySelectorAll('[data-id]').forEach(card => {
        const id = card.getAttribute('data-id');
        const data = window.cardData[id];

        if (data) {
            // Update Title
            const titleEl = card.querySelector('h3');
            if (titleEl) titleEl.textContent = data.title;

            // Update Description
            const descEl = card.querySelector('.desc');
            if (descEl) descEl.textContent = data.description; // We use the short description for the card

            // Update Image
            const imgEl = card.querySelector('.guia-img img');
            if (imgEl && data.image) {
                imgEl.src = data.image;
                imgEl.alt = data.title;
            }
        }
    });
}

// Funció principal per mostrar la info
function showInfo(triggerElement) {
    // 1. Busquem la targeta pare
    const card = triggerElement.closest('.tarjeta') || triggerElement.closest('.guia-item');
    if (!card) return;

    // 2. Mirem si té un ID de dades (data-id="...")
    const dataId = card.dataset.id;
    let title = '';
    let contentHTML = '';

    // 3. Si tenim ID i existeix a la nostra "base de dades" JS...
    if (dataId && window.cardData && window.cardData[dataId]) {
        const entry = window.cardData[dataId];
        title = entry.title;

        // Image in Modal
        let imageHTML = '';
        if (entry.image) {
            imageHTML = `
                <figure style="margin: 0 0 20px 0; width: 100%;">
                    <img src="${entry.image}" alt="${title}" style="width: 100%; border-radius: 8px; max-height: 300px; object-fit: cover;">
                    ${entry.imageAuthor ? `<figcaption style="font-size: 0.8em; color: #666; margin-top: 5px; text-align: right;">📷 ${entry.imageAuthor}</figcaption>` : ''}
                </figure>
            `;
        }

        let sourcesHTML = '';
        if (entry.sources && entry.sources.length > 0) {
            sourcesHTML = `
                <div style="background-color: var(--blanco-roto); padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <h4 style="margin-top: 0; color: var(--azul-oscuro); display: flex; align-items: center; gap: 10px;">
                        <i class="fa-solid fa-book-open"></i> Fonts i Referències
                    </h4>
                    <ul style="margin-bottom: 0; padding-left: 20px;">
                        ${entry.sources.map(s => `<li><a href="${s.url}" target="_blank">${s.name}</a></li>`).join('')}
                    </ul>
                </div>`;
        }

        contentHTML = `
            <div id="info-content" style="line-height: 1.6; color: #333;">
                ${imageHTML}
                ${entry.fullContent || '<p>Informació no disponible.</p>'}
                ${sourcesHTML}
            </div>
        `;

    } else {
        // FALLBACK: Si no hi ha ID o no trobem dades, fem el mètode antic (HTML ocult)
        // Així no es trenca res si encara no hem migrat totes les targetes!
        title = card.querySelector('h3') ? card.querySelector('h3').innerText : 'Informació';
        const customContentDiv = card.querySelector('.info-data');

        if (customContentDiv) {
            contentHTML = customContentDiv.innerHTML;
        } else {
            contentHTML = `<p>Informació no disponible per a <strong>${title}</strong>.</p>`;
        }
    }

    // 4. Creem/Recuperem el modal (COSA DE SEMPRE)
    let modal = document.getElementById('info-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'info-modal';
        Object.assign(modal.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '2000',
            opacity: '0',
            transition: 'opacity 0.3s'
        });

        modal.innerHTML = `
            <div class="modal-content" style="background: white; padding: 2rem; border-radius: 16px; max-width: 500px; width: 90%; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.2); transform: translateY(20px); transition: transform 0.3s; max-height: 80vh; overflow-y: auto;">
                <button onclick="closeInfo()" style="position: absolute; top: 15px; right: 15px; border: none; background: none; font-size: 1.5rem; cursor: pointer; color: #666;" title="Tancar">&times;</button>
                <h2 id="modal-title" style="margin-top: 0; color: var(--azul-oscuro); border-bottom: 2px solid var(--ocre); padding-bottom: 10px; margin-bottom: 15px;"></h2>
                <div id="modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeInfo();
        });
    }

    // 5. Omplim
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = contentHTML;

    // 6. Ensenyem
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateCards();

    // Animate cards sequentially
    const cards = document.querySelectorAll('.tarjeta, .guia-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.1}s`;
    });
});

function closeInfo() {
    const modal = document.getElementById('info-modal');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(20px)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

window.showInfo = showInfo;
window.closeInfo = closeInfo;
