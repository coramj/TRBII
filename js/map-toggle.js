document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    const toggleBtn = document.getElementById('map-toggle-btn');
    const mapElement = document.getElementById('map');

    // Initialize Leaflet Map
    // Centra a ciutadella
    const defaultCenter = [40.00087282519633, 3.836137145243966];
    const map = L.map('map').setView(defaultCenter, 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    const splitLayout = document.querySelector('.split-layout');

 
    toggleBtn.addEventListener('click', () => {
        splitLayout.classList.toggle('map-collapsed');
        const icon = toggleBtn.querySelector('i');
        if (splitLayout.classList.contains('map-collapsed')) {
            icon.classList.remove('fa-chevron-right  ');
            icon.classList.add('fa-map');
            toggleBtn.title = "Mostrar Mapa";
        } else {
            icon.classList.remove('fa-map');
            icon.classList.add('fa-chevron-right');
            toggleBtn.title = "Amagar Mapa";
        }
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    });
    window.appMap = map;

    // Creador marcador de colors
    window.addMapMarker = (lat, lng, color, popupContent, iconClass = 'fa-map-marker-alt') => {
        const customIcon = L.divIcon({
            className: 'custom-pin-container',
            html: `<div class="custom-marker" style="background-color: ${color}; width: 30px; height: 30px;">
                     <i class="fa-solid ${iconClass}"></i>
                   </div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 30],
            popupAnchor: [0, -30]
        });

        L.marker([lat, lng], { icon: customIcon }).addTo(map)
            .bindPopup(popupContent);
    };

    window.focusOnMap = (lat, lng, zoom = 15) => {
        const splitLayout = document.querySelector('.split-layout');
        if (splitLayout.classList.contains('map-collapsed')) {
            splitLayout.classList.remove('map-collapsed');
            const toggleBtn = document.getElementById('map-toggle-btn');
            const icon = toggleBtn.querySelector('i');
            icon.classList.remove('fa-map');
            icon.classList.add('fa-chevron-right');
            toggleBtn.title = "Amagar Mapa";
            setTimeout(() => {
                map.invalidateSize();
                map.setView([lat, lng], zoom);
            }, 300);
        } else {
            map.setView([lat, lng], zoom);
        }
    };
});
