document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  // Accessible image lightbox for the academy gallery.
  const lightboxItems = document.querySelectorAll('[data-lightbox], .lightbox-image');
  if (lightboxItems.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox'; overlay.hidden = true;
    overlay.innerHTML = '<button type="button" aria-label="Close image">×</button><img alt="Expanded academy photograph">';
    document.body.appendChild(overlay);
    const largeImage = overlay.querySelector('img');
    const close = () => { overlay.hidden = true; largeImage.src = ''; };
    overlay.querySelector('button').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    lightboxItems.forEach(item => item.addEventListener('click', () => {
      const img = item.matches('img') ? item : item.querySelector('img');
      largeImage.src = item.dataset.lightbox || img.src;
      largeImage.alt = img ? img.alt : 'Academy photograph'; overlay.hidden = false;
    }));
  }

  // Search and filter the services cards dynamically.
  const search = document.getElementById('service-search');
  const filter = document.getElementById('service-filter');
  if (search && filter) {
    const cards = [...document.querySelectorAll('.service-card')];
    const status = document.getElementById('search-status');
    const empty = document.getElementById('no-results');
    const update = () => {
      const term = search.value.trim().toLowerCase(); let count = 0;
      cards.forEach(card => {
        const visible = (filter.value === 'all' || card.dataset.category === filter.value) && card.textContent.toLowerCase().includes(term);
        card.hidden = !visible; if (visible) count++;
      });
      status.textContent = `Showing ${count} ${count === 1 ? 'opportunity' : 'opportunities'}.`;
      empty.hidden = count !== 0;
    };
    search.addEventListener('input', update); filter.addEventListener('change', update);
  }

  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    const params = new URLSearchParams(location.search);
    const typeMap = {training:'Football training',development:'Player development',volunteer:'Volunteering',sponsor:'Sponsorship'};
    const typeSelect = document.getElementById('enq-type');
    if (params.has('type') && typeMap[params.get('type')]) typeSelect.value = typeMap[params.get('type')];
    enquiryForm.addEventListener('submit', async e => {
      e.preventDefault();
      const feedback = document.getElementById('enquiry-feedback');
      if (!validateForm(enquiryForm, feedback)) return;
      const data = Object.fromEntries(new FormData(enquiryForm).entries());
      data._subject = `Academy enquiry: ${data.type}`;
      feedback.textContent = 'Sending your enquiry…';
      try {
        await sendFormAjax(enquiryForm.action, data);
        feedback.textContent = `Thank you, ${data.name}. Your ${data.type.toLowerCase()} enquiry has been sent. The academy will need to confirm current availability, arrangements and any costs directly with you.`;
        enquiryForm.reset();
      } catch (error) {
        feedback.textContent = 'We could not send the enquiry online. Please email info@dlalisamoyenifoundation.org.za or call 012 881 1475. If this is the first submission, the recipient email may still need to be activated with FormSubmit.';
      }
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const feedback = document.getElementById('contact-feedback');
    if (!validateForm(contactForm, feedback)) return;
    const data = Object.fromEntries(new FormData(contactForm).entries());
    data._subject = `Website ${data.type} from ${data.name}`;
    feedback.textContent = 'Sending your message…';
    try {
      await sendFormAjax(contactForm.action, data);
      feedback.textContent = 'Thank you. Your message has been sent to Dlalisa Moyeni Academy.';
      contactForm.reset();
    } catch (error) {
      feedback.textContent = 'We could not send your message online. Please email info@dlalisamoyenifoundation.org.za or call 012 881 1475. If this is the first submission, the recipient email may still need to be activated with FormSubmit.';
    }
  });

  async function sendFormAjax(endpoint, data) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Form submission failed');
    const result = await response.json();
    if (result.success === 'false' || result.success === false) throw new Error('Form service rejected submission');
    return result;
  }

  function validateForm(form, feedback) {
    let valid = true;
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.setAttribute('aria-invalid', String(!field.checkValidity()));
      if (!field.checkValidity()) valid = false;
    });
    if (!valid) {
      feedback.textContent = 'Please check the highlighted fields. Complete all required information using the correct format.';
      const firstInvalid = form.querySelector(':invalid'); if (firstInvalid) firstInvalid.focus();
      return false;
    }
    feedback.textContent = ''; return true;
  }

  // Interactive Leaflet map. If geocoding fails, the text address remains available.
  const mapElement = document.getElementById('academy-map');
  if (mapElement && window.L) {
    fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=' + encodeURIComponent('Cnr Mosaic Road and Dekgras Street, Silvertondale, Pretoria, South Africa'))
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(results => {
        if (!results.length) throw new Error('Location not found');
        const lat = Number(results[0].lat), lon = Number(results[0].lon);
        const map = L.map(mapElement).setView([lat, lon], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; OpenStreetMap contributors'}).addTo(map);
        L.marker([lat, lon]).addTo(map).bindPopup('Dlalisa Moyeni Academy').openPopup();
      }).catch(() => { mapElement.innerHTML = '<p>Map preview could not load. Please use the OpenStreetMap link below to view the address.</p>'; });
  } else if (mapElement) mapElement.innerHTML = '<p>Map library could not load. Please use the OpenStreetMap link below to view the address.</p>';

  document.querySelectorAll('main > section').forEach(section => section.classList.add('fade-in'));
});
