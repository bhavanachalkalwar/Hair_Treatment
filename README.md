# Kesh Sakhi - Hair Care Ayurvedic Companion

A responsive website for Ayurvedic hair care consultations built with HTML5, CSS3, and vanilla JavaScript.

## Project Structure

```
kesh-sakhi/
├── index.html              # Home page
├── about.html              # About Us page
├── services.html           # Services page
├── consultation.html       # Consultation booking page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── components/
│   │   ├── Navbar.js       # Navigation component
│   │   └── Footer.js       # Footer component
│   └── pages/
│       ├── HomePage.js     # Home page JavaScript
│       ├── AboutPage.js    # About page JavaScript
│       ├── ServicesPage.js # Services page JavaScript
│       ├── ConsultationPage.js # Consultation page JavaScript
│       └── ContactPage.js  # Contact page JavaScript
├── images/                 # Image assets (add your images here)
└── README.md               # This file
```

## Features

- **Responsive Design**: Mobile-first approach using Flexbox and CSS Grid
- **Ayurvedic Theme**: Clean, natural design with green and earthy tones
- **Smooth Animations**: Fade-in effects and hover animations
- **Google Form Integration**: Embedded consultation form that saves to Google Sheets
- **Page Object Model**: Organized JavaScript structure with reusable components

## Google Form Integration

The consultation page embeds a Google Form for collecting user data. The form includes fields for:
- Name
- Age
- Gender
- Hair Issues
- Contact Number

### Setting up Google Sheets Integration

1. Open your Google Form
2. Go to the "Responses" tab
3. Click the Google Sheets icon to create a new spreadsheet
4. Responses will automatically be saved to the connected Google Sheet

### Form URL
The embedded form URL is: `https://docs.google.com/forms/d/e/1FAIpQLSfCui4BWM8XVXTCYWsOTm2co4UEbymz6Y76-XOC0LD06cdg-Q/viewform?embedded=true`

## How to Run

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate through the site using the menu

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

### Colors
The theme uses green and earthy tones. Main colors:
- Primary Green: #4caf50
- Dark Green: #2e7d32
- Light Green: #c8e6c9

### Adding Images
Place your image files in the `images/` directory and update the CSS accordingly.

### Modifying Content
Edit the HTML files directly to change text content, or modify the JavaScript files for dynamic content.

## JavaScript Structure

The project uses a Page Object Model structure:
- **Components**: Reusable UI elements (Navbar, Footer)
- **Pages**: Page-specific logic and interactions

## Business Logic

1. Users visit the website and learn about Ayurvedic hair care
2. They book a consultation via the embedded Google Form
3. Form data is automatically saved to Google Sheets
4. Admin reviews the submissions and calls users for consultation

## Future Enhancements

- Backend integration for contact form
- User authentication and dashboard
- Payment integration for services
- Blog section for Ayurvedic tips
- Multilingual support

## License

This project is for educational purposes as part of an MCA final year project.