# Area Card Elite

An enhanced area card for Home Assistant that displays comprehensive information about a selected area, including entities, temperature, humidity, and more.

## Features

- Displays area icon and name
- Lists all entities associated with the area
- Shows temperature and humidity sensors if configured for the area
- Customizable display name
- Uses HA's built-in area selector for easy configuration

## Installation

### Via HACS (Recommended)

1. Add this repository to HACS as a custom repository.
2. Install "Area Card Elite" from the Frontend section.

### Manual Installation

1. Copy `area-card-elite.js` to your `www` folder in Home Assistant.
2. Add the resource in your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/area-card-elite.js
      type: module
```

## Usage

Add the card to your Lovelace dashboard:

```yaml
type: custom:area-card-elite
area: your_area_id
name: Optional custom name
```

### Configuration Options

- `area` (required): The ID of the area to display.
- `name` (optional): Custom name for the card header. If not provided, uses the area's name.

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
