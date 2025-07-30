# FPL UX Enhancer

A Chrome extension that enhances the UX/UI of the Fantasy Premier League website with custom styles and functionality.

## Features

- **Enhanced Navigation**: Improved styling for the main navigation
- **Better Player Cards**: Enhanced player card layouts with improved visual hierarchy
- **Improved Forms**: Better styling for form elements and inputs
- **Responsive Design**: Mobile-friendly improvements
- **Dark Mode Support**: Automatic dark mode detection and styling
- **Custom Controls**: Popup interface to control enhancement features

## Installation

### Development Setup

1. **Clone or download this repository**

   ```bash
   git clone <repository-url>
   cd fpl-chrome-extension
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the SCSS to CSS**

   ```bash
   npm run build
   ```

4. **For development with auto-compilation**
   ```bash
   npm run dev
   ```

### Loading the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right)
3. Click "Load unpacked"
4. Select the `fpl-chrome-extension` folder
5. The extension should now appear in your extensions list

## Usage

1. **Navigate to Fantasy Premier League**: Go to https://fantasy.premierleague.com/
2. **Extension Activation**: The extension will automatically activate on FPL pages
3. **Access Popup**: Click the extension icon in your Chrome toolbar to access controls
4. **Customize**: Use the popup to refresh styles or toggle enhancements

## Development

### File Structure

```
fpl-chrome-extension/
├── manifest.json          # Extension configuration
├── package.json           # Dependencies and scripts
├── README.md             # This file
├── scripts/
│   └── content.js        # Content script (runs on FPL pages)
├── styles/
│   ├── main.scss         # SCSS source file
│   └── main.css          # Compiled CSS (auto-generated)
├── popup/
│   ├── popup.html        # Extension popup interface
│   ├── popup.css         # Popup styles
│   └── popup.js          # Popup functionality
└── icons/                # Extension icons (you'll need to add these)
```

### SCSS Development

The extension uses SCSS for better CSS organization. To work with styles:

1. **Edit SCSS**: Modify `styles/main.scss`
2. **Auto-compile**: Run `npm run dev` to watch for changes
3. **Manual compile**: Run `npm run build` to compile once

### Adding New Features

1. **CSS Enhancements**: Add styles to `styles/main.scss`
2. **JavaScript Functionality**: Modify `scripts/content.js`
3. **Popup Controls**: Update `popup/popup.html` and `popup/popup.js`

### Content Script Communication

The content script can receive messages from the popup:

```javascript
// In content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "refreshStyles") {
    // Refresh styles logic
    sendResponse({ success: true });
  }
});
```

## Customization

### Colors and Variables

Edit the SCSS variables in `styles/main.scss`:

```scss
$fpl-primary-color: #37003c;
$fpl-secondary-color: #00ff85;
$fpl-accent-color: #ff2882;
```

### Adding New Enhancements

1. **Identify FPL elements**: Use browser dev tools to find selectors
2. **Add CSS**: Add styles to `styles/main.scss`
3. **Add JavaScript**: Enhance functionality in `scripts/content.js`
4. **Test**: Reload the extension and test on FPL pages

## Troubleshooting

### Extension Not Working

1. **Check Console**: Open dev tools and check for errors
2. **Reload Extension**: Go to `chrome://extensions/` and click reload
3. **Check Permissions**: Ensure the extension has proper permissions
4. **Verify URL**: Make sure you're on `fantasy.premierleague.com`

### Styles Not Applying

1. **Check CSS**: Ensure `styles/main.css` is up to date
2. **Run Build**: Execute `npm run build`
3. **Check Selectors**: Verify CSS selectors match FPL elements
4. **Inspect Elements**: Use dev tools to see if styles are applied

### SCSS Not Compiling

1. **Install Dependencies**: Run `npm install`
2. **Check Sass**: Ensure `sass` is installed globally or locally
3. **Check Syntax**: Verify SCSS syntax is correct

## Browser Compatibility

- Chrome 88+
- Edge 88+ (Chromium-based)
- Other Chromium-based browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on FPL pages
5. Submit a pull request

## License

MIT License - feel free to use and modify as needed.

## Support

If you encounter issues or have suggestions for improvements, please open an issue on the repository.

---

**Note**: This extension is not affiliated with the official Fantasy Premier League. It's a third-party enhancement tool created for educational and personal use.
