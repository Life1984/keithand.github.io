# Artwork Portfolio README
# Name: Keith Anderson  
# Class: CS463# Keith Anderson Portfolio

---

## Deployed Site

Add deployed GitHub Pages link here:

```text
https://USERNAME.github.io/REPOSITORY-NAME/
```

## GitHub Repository

Add repository link here:

```text
https://github.com/USERNAME/REPOSITORY-NAME
```

## Project Description

This website is an online portfolio for displaying my artwork and related work.

The homepage focuses on a large artwork gallery. A fixed sidebar on the left provides navigation between the main sections of the site.

The main sections are:

```text
Work
About
Previous Work
Projects
Contact
```

## Features

- Fixed left-side navigation
- Gallery-focused Work section
- Artwork categories
- Pen/Pencil gallery filter
- Digital gallery filter
- Paint gallery filter for future artwork
- Light gray hover effect on artwork images
- Clickable lightbox image preview
- About section
- Previous Work section
- Projects section
- Contact form
- JavaScript form validation
- Responsive layout for smaller screens

## Artwork Categories

The artwork is organized into these categories:

```text
All
Pen/Pencil
Digital
Paint
```

Current image categories:

```text
Pen/Pencil: pen01.jpg through pen09.jpg
Digital: MS_Paint01.png through MS_Paint04.png
Paint: future artwork category
```

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Pages

## Files

```text
index.html
styles.css
script.js
README.md
images/
```

## How to Run Locally

Clone the repository:

```bash
git clone git@github.com:USERNAME/REPOSITORY-NAME.git
```

Move into the project folder:

```bash
cd REPOSITORY-NAME
```

Start a local web server:

```bash
python3 -m http.server 8000
```

Open the site in a browser:

```text
http://localhost:8000
```

## How to Deploy with GitHub Pages

1. Push the project to GitHub.
2. Open the repository on GitHub.
3. Go to Settings.
4. Go to Pages.
5. Choose Deploy from a branch.
6. Select the `main` branch.
7. Select the root folder.
8. Save the settings.
9. Copy the deployed site URL into this README.

## Outside Sources and References

### Visual Inspiration

Courtney Poy portfolio website:

```text
https://www.courtneypoy.com/
```

I use this site as visual inspiration for the simple left-side navigation, white space, and image-focused portfolio layout. I do not copy the site's code.

### Course Example Files

I use these course examples as references:

```text
01-grid.html
04-navbar.html
06-cards.html
07-buttons.html
```

How they connect to this project:

```text
01-grid.html: inspires the gallery layout idea
04-navbar.html: inspires the navigation structure
06-cards.html: inspires the artwork and project card structure
07-buttons.html: inspires the filter buttons and contact form button
```

### Project Rubric

Final project rubric:

```text
Final_Project_Rubric.pdf
```

I use the rubric to check that the site includes the required sections, JavaScript interaction, documentation, and deployment information.

## Notes

The contact form is currently front-end only. It validates the form fields with JavaScript, but it does not send messages to a server.

The Paint category is included for future artwork. It currently displays an empty-category message if no painting images are added.

## Future Improvements

- Add real project repository links
- Add final deployed GitHub Pages link
- Add more artwork descriptions
- Add painting images
- Improve image alt text
- Add more detailed project cards
- Test accessibility with an automated checker
- Test the layout on mobile devices
