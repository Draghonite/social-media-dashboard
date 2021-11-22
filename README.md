# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot
<img src="./public/screenshots/screenshot1.png" width="400" title="Dark Screenshot - Desktop" />
<img src="./public/screenshots/screenshot2.png" width="400" title="Light Screenshot - Desktop" />
<img src="./public/screenshots/screenshot3.png" width="400" title="Dark Screenshot - Mobile" />
<img src="./public/screenshots/screenshot4.png" width="400" title="Light Screenshot - Mobile" />

### Links

- Solution URL: [Calculator App](https://draghonite.github.io/social-media-dashboard/)

## My process

### Built with

- Flexbox
- CSS Grid
- [Vue.js](https://vuejs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/)

### What I learned

CSS linear-gradient and various tricks for obtaining the rounded, gradient-filled top-border boxes...a bit trickier than simple border-radius and background properties.

### Continued development

In the interest of time and to reduce the self-induced added scope/complexity, some values are hardcoded in the app but the intent was to write a production-ready application minus an external database.  With added interest and time, would finish rounding out those added issues and revisit a few TypeSCript decisions, as well as committing to TDD, though with very little functionality, did not TDD of significant enough need in this project.

## Acknowledgments

- (Gradient Borders in CSS)[https://css-tricks.com/gradient-borders-in-css/]
- (Base64 Image Encoder)[https://elmah.io/tools/base64-image-encoder/]
  - because, let's face it, dealing with SVG files in Vue+TypeScript (and from experience, other frameworks as well) is a bit of a nightmare.  This tool provides a simple conversion of individual *.svg files to base64 strings and the equivalent HTML or CSS syntax ready to use in your project.  Time-saver.
