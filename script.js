// Airport coordinates (latitude, longitude)
// Add more airports as needed
const airportCoordinates = {
    'FLL': [26.0712, -80.1528],      // Fort Lauderdale
    'MCO': [28.4312, -81.3083],      // Orlando
    'EWR': [40.6895, -74.1745],      // Newark
    'SFO': [37.6213, -122.3790],     // San Francisco
    'SJU': [18.4394, -66.0018],      // San Juan, Puerto Rico
    'JFK': [40.6413, -73.7781],      // New York JFK
    'LAX': [33.9425, -118.4081],     // Los Angeles
    'ORD': [41.9742, -87.9073],      // Chicago O'Hare
    'ATL': [33.6407, -84.4277],      // Atlanta
    'DFW': [32.8998, -97.0403],      // Dallas/Fort Worth
    'DEN': [39.8561, -104.6737],     // Denver
    'SEA': [47.4502, -122.3088],     // Seattle
    'MIA': [25.7959, -80.2870],      // Miami
    'BOS': [42.3656, -71.0096],      // Boston
    'LHR': [51.4700, -0.4543],       // London Heathrow
    'CDG': [49.0097, 2.5479],        // Paris Charles de Gaulle
    'FRA': [50.0379, 8.5622],        // Frankfurt
    'DXB': [25.2532, 55.3657],       // Dubai
    'NRT': [35.7720, 140.3929],      // Tokyo Narita
    'SYD': [-33.9399, 151.1753],     // Sydney
    'YYZ': [43.6772, -79.6306],      // Toronto
    'YVR': [49.1947, -123.1792],     // Vancouver
};

// Flight data - Update this with your actual flight information
// Times should be in 24-hour format (HH:MM) - they will be displayed as 12-hour format automatically
// Add coordinates to departure/arrival if airport is not in airportCoordinates above
const flights = [
    {
        id: 1,
        flightNumber: 'NK 339',
        date: '2024-11-21',  // Fri, 21 Nov
        departure: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '16:59'  // Will display as "4:59 PM"
        },
        arrival: {
            code: 'SJU',
            name: 'San Juan',
            time: '20:27'  // Will display as "8:27 PM"
        },
        status: 'upcoming'
    },
    {
        id: 2,
        flightNumber: 'F9 3017',
        date: '2024-11-23',  // Sun, 23 Nov
        departure: {
            code: 'SJU',
            name: 'San Juan',
            time: '17:28'  // Will display as "5:28 PM"
        },
        arrival: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '19:20'  // Will display as "7:20 PM"
        },
        status: 'upcoming'
    },
    {
        id: 3,
        flightNumber: 'B6 577',
        date: '2024-11-26',  // Wed, 26 Nov
        departure: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '06:00'  // Will display as "6:00 AM"
        },
        arrival: {
            code: 'SFO',
            name: 'San Francisco',
            time: '09:19'  // Will display as "9:19 AM"
        },
        status: 'upcoming'
    },
    {
        id: 4,
        flightNumber: 'B6 378',
        date: '2024-11-30',  // Sun, 30 Nov
        departure: {
            code: 'SFO',
            name: 'San Francisco',
            time: '22:20'  // Will display as "10:20 PM"
        },
        arrival: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '06:37',  // Will display as "6:37 AM" (next day)
            nextDay: true   // Indicates arrival is next day
        },
        status: 'upcoming'
    },
    {
        id: 5,
        flightNumber: 'NK 466',
        date: '2024-12-06',  // Sat, 6 Dec
        departure: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '06:40'  // Will display as "6:40 AM"
        },
        arrival: {
            code: 'MCO',
            name: 'Orlando',
            time: '07:45'  // Will display as "7:45 AM"
        },
        status: 'upcoming'
    },
    {
        id: 6,
        flightNumber: 'NK 1894',
        date: '2024-12-07',  // Sun, 7 Dec
        departure: {
            code: 'MCO',
            name: 'Orlando',
            time: '06:39'  // Will display as "6:39 AM"
        },
        arrival: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '07:55'  // Will display as "7:55 AM"
        },
        status: 'upcoming'
    },
    {
        id: 7,
        flightNumber: 'NK 134',
        date: '2024-12-12',  // Fri, 12 Dec
        departure: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '20:54'  // Will display as "8:54 PM"
        },
        arrival: {
            code: 'EWR',
            name: 'Newark',
            time: '23:52'  // Will display as "11:52 PM"
        },
        status: 'upcoming'
    },
    {
        id: 8,
        flightNumber: 'NK 450',
        date: '2024-12-14',  // Sun, 14 Dec
        departure: {
            code: 'EWR',
            name: 'Newark',
            time: '05:46'  // Will display as "5:46 AM"
        },
        arrival: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '08:57'  // Will display as "8:57 AM"
        },
        status: 'upcoming'
    },
    {
        id: 9,
        flightNumber: 'UA 249',
        date: '2024-12-22',  // Mon, 22 Dec
        departure: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '17:10'  // Will display as "5:10 PM"
        },
        arrival: {
            code: 'SFO',
            name: 'San Francisco',
            time: '20:44'  // Will display as "8:44 PM"
        },
        status: 'upcoming'
    },
    {
        id: 10,
        flightNumber: 'B6 378',
        date: '2024-12-28',  // Sun, 28 Dec
        departure: {
            code: 'SFO',
            name: 'San Francisco',
            time: '23:59'  // Will display as "11:59 PM"
        },
        arrival: {
            code: 'FLL',
            name: 'Fort Lauderdale',
            time: '08:17',  // Will display as "8:17 AM" (next day)
            nextDay: true   // Indicates arrival is next day
        },
        status: 'upcoming'
    }
];

// Map variables
let map = null;
let markers = [];
let routes = [];
let selectedTimezone = 'local'; // 'local', 'EST', 'PST'

// Timezone offsets (in hours from UTC)
const timezoneOffsets = {
    'EST': -5,  // Eastern Standard Time (UTC-5)
    'PST': -8,  // Pacific Standard Time (UTC-8)
    'local': 0  // Will use browser's local timezone
};

// Convert 24-hour time to 12-hour format with AM/PM
function formatTime(time24) {
    if (!time24) return '';
    
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours, 10);
    const min = minutes || '00';
    
    if (hour === 0) {
        return `12:${min} AM`;
    } else if (hour < 12) {
        return `${hour}:${min} AM`;
    } else if (hour === 12) {
        return `12:${min} PM`;
    } else {
        return `${hour - 12}:${min} PM`;
    }
}

// Convert flight time to selected timezone
// Assumes flight times are stored in EST (FLL/SJU timezone)
function convertToTimezone(dateStr, timeStr, timezone) {
    if (timezone === 'local') {
        // Return original time if local timezone
        return formatTime(timeStr);
    }
    
    const [hours, minutes] = timeStr.split(':');
    let hour24 = parseInt(hours, 10);
    const mins = minutes || '00';
    
    // Calculate timezone offset from EST
    // EST is UTC-5, PST is UTC-8, so PST is 3 hours behind EST
    if (timezone === 'PST') {
        hour24 -= 3; // Subtract 3 hours
        if (hour24 < 0) {
            hour24 += 24; // Handle previous day
        } else if (hour24 >= 24) {
            hour24 -= 24; // Handle next day
        }
    }
    // If EST, no conversion needed (times are already in EST)
    
    // Format as 12-hour time
    if (hour24 === 0) {
        return `12:${mins} AM`;
    } else if (hour24 < 12) {
        return `${hour24}:${mins} AM`;
    } else if (hour24 === 12) {
        return `12:${mins} PM`;
    } else {
        return `${hour24 - 12}:${mins} PM`;
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMap();
    renderFlights('upcoming');
    setupFilters();
    setupTimezoneButtons();
    setupThemeToggle();
    updateMap('upcoming');
});

// Initialize the map
function initMap() {
    // Create map centered on Florida/Caribbean area (better for FLL/SJU routes)
    map = L.map('flightMap', {
        zoomControl: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        dragging: true,
        touchZoom: true
    }).setView([28.0, -82.0], 5); // Center on Florida/Caribbean region

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
}

// Get airport coordinates
function getAirportCoords(airportCode) {
    // Check if coordinates are provided in flight data
    if (airportCoordinates[airportCode]) {
        return airportCoordinates[airportCode];
    }
    // Return null if airport not found
    return null;
}

// Update map with flight routes
function updateMap(filter) {
    if (!map) return;

    // Clear existing markers and routes
    markers.forEach(marker => map.removeLayer(marker));
    routes.forEach(route => map.removeLayer(route));
    markers = [];
    routes = [];

    // Filter flights (same logic as renderFlights)
    const now = new Date();
    let filteredFlights = [];
    
    switch(filter) {
        case 'upcoming':
            filteredFlights = flights.filter(flight => {
                // Show flights marked as upcoming, or flights in the future
                return flight.status === 'upcoming' || (new Date(flight.date + 'T' + flight.departure.time) > now && flight.status !== 'completed');
            });
            break;
        default:
            filteredFlights = flights.filter(flight => {
                return flight.status === 'upcoming' || (new Date(flight.date + 'T' + flight.departure.time) > now && flight.status !== 'completed');
            });
    }

    if (filteredFlights.length === 0) return;

    const bounds = [];
    const airportMarkers = {};

    // Process each flight
    filteredFlights.forEach(flight => {
        const depCoords = getAirportCoords(flight.departure.code);
        const arrCoords = getAirportCoords(flight.arrival.code);

        if (!depCoords || !arrCoords) return;

        // Determine route color based on status
        const now = new Date();
        const flightDate = new Date(flight.date + 'T' + flight.departure.time);
        const arrivalDate = new Date(flight.date + 'T' + flight.arrival.time);
        
        let routeColor = '#64748b'; // Default gray
        let routeWeight = 2;
        
        if (flight.status === 'completed' || arrivalDate < now) {
            routeColor = '#10b981'; // Green for completed
            routeWeight = 2;
        } else if (now >= flightDate && now <= arrivalDate) {
            routeColor = '#2563eb'; // Blue for in-flight
            routeWeight = 4;
        } else {
            routeColor = '#f59e0b'; // Orange for upcoming
            routeWeight = 2;
        }

        // Draw route line
        const routeLine = L.polyline([depCoords, arrCoords], {
            color: routeColor,
            weight: routeWeight,
            opacity: 0.7,
            dashArray: routeColor === '#64748b' ? '5, 5' : null
        }).addTo(map);

        // Add arrow marker in the middle of the route
        const midLat = (depCoords[0] + arrCoords[0]) / 2;
        const midLng = (depCoords[1] + arrCoords[1]) / 2;
        const angle = Math.atan2(arrCoords[0] - depCoords[0], arrCoords[1] - depCoords[1]) * 180 / Math.PI;
        
        const arrowIcon = L.divIcon({
            className: 'route-arrow-icon',
            html: `<div style="transform: rotate(${angle}deg); color: ${routeColor}; font-size: 16px;">✈</div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
        
        L.marker([midLat, midLng], { icon: arrowIcon }).addTo(map);

        routes.push(routeLine);

        // Add departure airport marker (if not already added)
        if (!airportMarkers[flight.departure.code]) {
            const depIcon = L.divIcon({
                className: 'airport-marker',
                html: `<div style="background: ${routeColor}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${flight.departure.code}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const depMarker = L.marker(depCoords, { icon: depIcon })
                .bindPopup(`
                    <h3>${flight.departure.code}</h3>
                    <p><strong>${flight.departure.name}</strong></p>
                    <p>Departure Airport</p>
                `)
                .addTo(map);

            markers.push(depMarker);
            airportMarkers[flight.departure.code] = true;
            bounds.push(depCoords);
        }

        // Add arrival airport marker (if not already added)
        if (!airportMarkers[flight.arrival.code]) {
            const arrIcon = L.divIcon({
                className: 'airport-marker',
                html: `<div style="background: ${routeColor}; color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${flight.arrival.code}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const arrMarker = L.marker(arrCoords, { icon: arrIcon })
                .bindPopup(`
                    <h3>${flight.arrival.code}</h3>
                    <p><strong>${flight.arrival.name}</strong></p>
                    <p>Arrival Airport</p>
                `)
                .addTo(map);

            markers.push(arrMarker);
            airportMarkers[flight.arrival.code] = true;
            bounds.push(arrCoords);
        }
    });

    // Fit map to show all routes
    if (bounds.length > 0) {
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Render flights based on filter
function renderFlights(filter) {
    const container = document.getElementById('flightsContainer');
    
    // Filter flights
    const now = new Date();
    let filteredFlights = [];
    
    switch(filter) {
        case 'upcoming':
            filteredFlights = flights.filter(flight => {
                // Show flights marked as upcoming, or flights in the future
                return flight.status === 'upcoming' || (new Date(flight.date + 'T' + flight.departure.time) > now && flight.status !== 'completed');
            });
            break;
        default:
            filteredFlights = flights.filter(flight => {
                return flight.status === 'upcoming' || (new Date(flight.date + 'T' + flight.departure.time) > now && flight.status !== 'completed');
            });
    }
    
    // Sort flights: upcoming first, then by date
    filteredFlights.sort((a, b) => {
        const dateA = new Date(a.date + 'T' + a.departure.time);
        const dateB = new Date(b.date + 'T' + b.departure.time);
        return dateA - dateB;
    });
    
    // Clear container
    container.innerHTML = '';
    
    // Render flight cards
    filteredFlights.forEach(flight => {
        const card = createFlightCard(flight);
        container.appendChild(card);
    });
}

// Create a flight card element
function createFlightCard(flight) {
    const card = document.createElement('div');
    card.className = 'flight-card';
    
    const now = new Date();
    const flightDate = new Date(flight.date + 'T' + flight.departure.time);
    const arrivalDate = new Date(flight.date + 'T' + flight.arrival.time);
    
    // Determine if flight is past
    if (arrivalDate < now || flight.status === 'completed') {
        card.classList.add('past');
    }
    
    // Format date (e.g., "Fri, 21 Nov")
    const dateObj = new Date(flight.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short', 
        day: 'numeric'
    });
    
    // Determine status
    let statusClass = 'upcoming';
    let statusText = 'Upcoming';
    
    if (now >= flightDate && now <= arrivalDate) {
        statusClass = 'in-flight';
        statusText = 'In Flight';
    }
    
    const depTime = convertToTimezone(flight.date, flight.departure.time, selectedTimezone);
    let arrTime = convertToTimezone(flight.date, flight.arrival.time, selectedTimezone);
    // Add "+1" indicator for next day arrivals
    if (flight.arrival.nextDay) {
        arrTime += ' +1';
    }
    
    card.innerHTML = `
        <div class="flight-header">
            <div class="flight-number">${flight.flightNumber}</div>
            <div class="flight-date">${formattedDate}</div>
        </div>
        <div class="flight-route">
            <div class="airport">
                <div class="airport-code">${flight.departure.code}</div>
                <div class="airport-name">${flight.departure.name}</div>
                <div class="detail-value" style="margin-top: 0.5rem;">${depTime}</div>
            </div>
            <div class="route-arrow">→</div>
            <div class="airport">
                <div class="airport-code">${flight.arrival.code}</div>
                <div class="airport-name">${flight.arrival.name}</div>
                <div class="detail-value" style="margin-top: 0.5rem;">${arrTime}</div>
            </div>
        </div>
        <div class="flight-details">
            <div class="detail-item">
                <span class="detail-label">Departure</span>
                <span class="detail-value">${depTime}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Arrival</span>
                <span class="detail-value">${arrTime}</span>
            </div>
        </div>
        <div class="flight-status ${statusClass}">${statusText}</div>
    `;
    
    return card;
}

// Setup filter buttons
function setupFilters() {
    const buttons = document.querySelectorAll('.btn[data-filter]');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter flights
            const filter = button.getAttribute('data-filter');
            renderFlights(filter);
            updateMap(filter);
        });
    });
}

// Setup timezone buttons
function setupTimezoneButtons() {
    const timezoneButtons = document.querySelectorAll('.btn-timezone[data-timezone]');
    
    timezoneButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            timezoneButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update selected timezone
            selectedTimezone = button.getAttribute('data-timezone');
            
            // Re-render flights with new timezone
            const activeFilter = document.querySelector('.btn[data-filter].active');
            const filter = activeFilter ? activeFilter.getAttribute('data-filter') : 'upcoming';
            renderFlights(filter);
        });
    });
}

// Initialize theme from localStorage or system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
}

// Setup theme toggle button
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark);
    });
}

// Update theme icon
function updateThemeIcon(isDark) {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = isDark ? '☀️' : '🌙';
}


