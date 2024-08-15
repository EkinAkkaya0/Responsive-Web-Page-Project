# Website Overview

## 1. General HTML/CSS Structure

### 1.1 Entry or Home Page

The home page of our website is `index.html`, which contains images, links, and text that provide information about the site. The layout is organized using the following HTML elements and classes:

- **Header:** Contains the site’s navigation and branding.
- **Main:** The primary content area, excluding the header and footer.
- **Footer:** Includes additional information and site links.
- **Dialog:** An element with both an `id` and a `class` for information popups.
- **Active:** A class applied to indicate the current page in the header.
- **Banner:** A class that holds the banner image.
- **Container:** A class that groups event and gallery images.

### 1.2 Navigation Bar

Our website has a consistent navigation bar located in the header across all pages. Initially, there were two navigation bars, one in the header and one in the footer. We have since removed the footer navigation bar, ensuring the site now features a single navigation bar in the header.

### 1.3 Other Pages

All other pages on the website also include the navigation bar. These pages are as follows:

- **Events:** `events.html`
- **Gallery:** `gallery.html`
- **About Us:** `about.html`
- **Contact Us:** `contact.html`

These pages are designed to fulfill specific purposes such as showcasing events, displaying images, providing information about the organization, and offering contact details.

## 2. Interactivity

The website incorporates interactivity through the following:

### 2.1 jQuery Plugins

- **Header (h1) Color:** Set dynamically using jQuery.
- **Autofill City Text:** Automatically fills in the city field.
- **Remaining Characters Indicator:** Displays the remaining character count for textboxes.

### 2.2 jQuery-UI Widgets

- **Date Picker:** Provides a calendar widget for date selection.
- **Information Float Box:** A floating information box on the index page.

### 2.3 JavaScript

- **Custom Script:** `project.js` contains additional JavaScript functionality.

## 3. Ajax

Ajax requests are auto-loaded when the page loads. We’ve customized the requested text style by changing its color. The following data is fetched via Ajax:

- **President Names:** Fetched from an external file.
- **Team Slogan:** Loaded from an external file.
- **Event Images:** Sourced from another website.
