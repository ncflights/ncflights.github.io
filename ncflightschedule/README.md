# Flight Schedule Tracker

A mobile-friendly website to track and display your flight schedule so people can see where you are.

## Features

- 📱 **Mobile & Laptop Friendly** - Responsive design optimized for all screen sizes
- 🗺️ **Interactive Map** - Visual flight routes with airport markers and route lines
- ✈️ **Current Status Display** - Shows your current location (in-flight, upcoming, or last location)
- 🔄 **Smart Filtering** - Filter flights by All or Upcoming (map updates automatically)
- 🎨 **Modern UI** - Clean, beautiful interface with smooth animations
- 🌙 **Dark Mode Support** - Automatically adapts to system preferences

## How to Use

1. Open `index.html` in a web browser
2. Update the flight data in `script.js` (see below)

## Updating Flight Data

Edit the `flights` array in `script.js` with your actual flight information:

```javascript
const flights = [
    {
        id: 1,
        flightNumber: 'AA123',
        date: '2024-01-15',  // Format: YYYY-MM-DD
        departure: {
            code: 'JFK',      // Airport code
            name: 'New York', // Airport name
            time: '08:00'     // 24-hour format (HH:MM) - will display as "8:00 AM"
        },
        arrival: {
            code: 'LAX',
            name: 'Los Angeles',
            time: '11:30'     // Will display as "11:30 AM"
        },
        status: 'completed'  // 'completed', 'upcoming', or 'in-flight'
    },
    // Add more flights...
];
```

### Flight Status Values:
- `'completed'` - Flight has finished
- `'upcoming'` - Flight is scheduled for the future
- `'in-flight'` - Currently in the air (optional, system can auto-detect)

## Adding Airport Coordinates

The map feature requires airport coordinates. Common airports are already included in the `airportCoordinates` object in `script.js`. To add a new airport:

```javascript
const airportCoordinates = {
    'JFK': [40.6413, -73.7781],  // [latitude, longitude]
    'YOUR_CODE': [lat, lng],      // Add your airport here
    // ...
};
```

You can find airport coordinates by searching for "[Airport Code] coordinates" or using Google Maps. The format is `[latitude, longitude]`.

## Deployment

You can host this website on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files (`index.html`, `styles.css`, `script.js`) to your hosting service. The map uses Leaflet.js loaded from a CDN, so no additional files are needed.

## Customization

- **Colors**: Edit the CSS variables in `styles.css` (lines starting with `--`)
- **Styling**: Modify `styles.css` to match your preferences
- **Functionality**: Extend `script.js` to add features like time zones, flight duration calculations, etc.

