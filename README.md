# Area Card Elite

An enhanced area card for Home Assistant that displays comprehensive information about a selected area with a beautiful, customizable layout.

## Features

- 🎨 **Multiple Display Types**: Compact, Icon, Picture, and Camera modes
- 📐 **Flexible Layouts**: Vertical, Horizontal, and Compact layouts
- 🌡️ **Smart Sensor Display**: Temperature, humidity, illuminance, power, energy, and battery with color-coded icons
- 🎮 **Quick Controls**: Lights, climate, switches, fans, media players, and more
- 💡 **Smart Lights Toggle**: Automatic button that toggles all lights in the area - turns off when any are on, turns on when all are off, with dynamic icon feedback
- 🚨 **Alert Monitoring**: Motion, occupancy, door, window, and moisture sensors with visual alerts
- ✨ **Smart Alert Colors**: Main entity circle pulses with appropriate colors based on alert type (blue for water, orange for motion, purple for occupancy, red for doors)
- 🌡️ **Weather-Style Temperature Overlay**: Subtle colored gradient overlay based on room temperature (blue=cold, green=perfect, orange=warm, red=hot), with humidity-based intensity
- 🔄 **State-based Styling**: Customizable colors for active/inactive states
- 🎯 **Large Background Icons**: Eye-catching entity status display
- 📱 **Responsive Controls**: Buttons automatically scale down for smaller card sizes
- 🎨 **Full Customization**: Colors, icons, and positioning
- 🎛️ **Smart Positioning**: Area info automatically repositions to prevent overlap with controls

## Installation

### Via HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to "Frontend"
3. Click the three dots in the top right and select "Custom repositories"
4. Add `https://github.com/imCharlieB/area-card-elite` as a Lovelace repository
5. Click "Explore & Download Repositories"
6. Search for "Area Card Elite"
7. Click "Download"
8. Restart Home Assistant

### Manual Installation

1. Copy `area-card-elite.js` to your `config/www/` folder
2. Add the resource in your Lovelace dashboard settings:
   - Go to Settings → Dashboards → Resources
   - Click "Add Resource"
   - URL: `/local/area-card-elite.js`
   - Resource type: JavaScript Module

## Usage

### Basic Example

```yaml
type: custom:area-card-elite
area: living_room
display_type: icon
layout: vertical
features_position: right
```

### Complete Example (Vertical Layout Like Screenshot)

```yaml
type: custom:area-card-elite
area: master_bedroom
display_type: icon
layout: vertical
features_position: right

# Main entity for large background icon
main_entity: lock.master_bedroom

# State colors
state_active_color: '#4caf50'  # Green when on/locked
state_inactive_color: '#f44336'  # Red when off/unlocked

# Sensors
temperature_entity: sensor.master_bedroom_temperature
humidity_entity: sensor.master_bedroom_humidity

# Controls
features:
  - area-controls
light_entity: light.master_bedroom
climate_entity: climate.master_bedroom
media_player_entity: media_player.master_bedroom
show_lights_off_button: true  # Shows button to turn off all lights

# Alert Sensors
motion_sensor: binary_sensor.master_bedroom_motion
occupancy_sensor: binary_sensor.master_bedroom_occupancy
moisture_sensor: binary_sensor.master_bedroom_moisture

# Styling
area_name_color: '#ffffff'
color: 'rgba(0, 0, 0, 0.3)'
```

## Configuration Options

### Basic Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `area` | string | **Required** | Area ID to display |
| `name` | string | Area name | Custom name override |
| `icon` | string | Area icon | Custom icon override |
| `display_type` | string | `compact` | Display mode: `compact`, `icon`, `picture`, `camera` |
| `layout` | string | `compact` | Layout mode: `vertical`, `horizontal`, `compact` |
| `features_position` | string | `bottom` | Position of controls: `top`, `bottom`, `left`, `right`, `inline` |

### Display & Styling

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `color` | string | - | Card background color |
| `area_name_color` | string | - | Area name text color |
| `area_icon_color` | string | - | Area icon color |
| `state_active_color` | string | `#4caf50` | Color for active/on states |
| `state_inactive_color` | string | `#f44336` | Color for inactive/off states |
| `aspect_ratio` | string | `16:9` | Card aspect ratio: `16:9`, `4:3`, `1:1`, `3:2` |
| `theme` | string | - | Home Assistant theme name |

### Main Entity

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `main_entity` | string | - | Entity for large background icon (icon display type) |

### Sensors

Temperature and humidity sensors enable a subtle weather-style gradient overlay on the card background. The gradient color changes based on temperature (blue=cold, green=perfect, orange=warm, red=hot), and humidity affects the intensity of the overlay.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `temperature_entity` | string | - | Temperature sensor - enables temperature-based gradient overlay |
| `humidity_entity` | string | - | Humidity sensor - affects gradient overlay intensity |
| `illuminance_entity` | string | - | Light level sensor |
| `power_entity` | string | - | Power sensor |
| `energy_entity` | string | - | Energy sensor |
| `battery_entity` | string | - | Battery sensor |

### Controls

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `light_entity` | string | - | Main light entity |
| `climate_entity` | string | - | Climate control entity (opens more-info on click) |
| `switch_entity` | string | - | Main switch entity |
| `fan_entity` | string | - | Fan entity |
| `media_player_entity` | string | - | Media player entity (opens more-info on click) |
| `additional_controls` | list | - | Additional control entities |
| `show_lights_off_button` | boolean | `true` | Show button to toggle all lights in the area (smart toggle - turns off if any on, turns on if all off) |

### Alerts

Alert sensors display at the bottom of the card and trigger a colored pulsing glow effect on the main entity circle (when using icon display type). Each alert type automatically uses an appropriate color:

- **Moisture/Water**: Blue (#2196f3) - water-related alerts
- **Motion**: Orange (#ff9800) - movement/activity
- **Occupancy**: Purple (#9c27b0) - presence detection
- **Door/Window**: Red (#f44336) - security concerns
- **Smoke/Gas**: Red/Deep orange - danger alerts
- **Heat/Cold**: Orange/Light blue - temperature warnings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `motion_sensor` | string | - | Motion sensor - triggers orange glow when motion detected |
| `occupancy_sensor` | string | - | Occupancy sensor - triggers purple glow when occupied |
| `door_sensor` | string | - | Door sensor - triggers red glow when open |
| `window_sensor` | string | - | Window sensor - triggers red glow when open |
| `moisture_sensor` | string | - | Moisture sensor - triggers blue glow when moisture detected |
| `additional_alerts` | list | - | Additional binary sensor entities to monitor for alerts |
| `alert_color` | string | - | Override color for ALL alerts (otherwise uses smart device-class colors above) |

### Features

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `features` | list | `[]` | Features to enable: `area-controls`, `more-info`, `toggle-all` |

### Display Modes & Camera

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `camera_entity` | string | - | Camera entity (for camera display type) |
| `camera_view` | string | `auto` | Camera view mode: `auto`, `live` |
| `background_image` | string | - | Background image URL (for picture display type) |

### Advanced

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `exclude_entities` | list | `[]` | Entity IDs to exclude from display |
| `navigation_path` | string | - | Path to navigate to on card click |

## Development

This card is built using TypeScript, Lit, and Rollup.

### Prerequisites

- Node.js LTS
- npm

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

## Repository Structure

- `src/card.ts`: Main card component
- `src/editor.ts`: Configuration editor
- `src/common.ts`: Common types and constants
- `src/main.ts`: Entry point and registration

## License

MIT
