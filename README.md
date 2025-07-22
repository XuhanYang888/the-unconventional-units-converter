# The Unconventional Units Converter

A fun interactive web app that converts metric measurements into everyday objects for comparison. Ever wondered how many pencils tall you are or how many coffee mugs worth of volume something contains? **The Unconventional Units Converter** got you covered!

Try it yourself: [link](https://xuhanyang888.github.io/the-unconventional-units-converter/)

## Features

- **Multiple Unit Types**: Convert lengths, areas, volumes, and weights
- **Everyday Object Comparisons**: Results are expressed in terms of common objects
- **Surprise Me**: Generate random conversions for fun


## Unit Types Supported

### Length (centimeters)
Objects include: pencil, smartphone, credit card, ruler, toothbrush, fork, and more

### Area (square centimeters)
Objects include: sticky note, credit card, smartphone screen, A4 paper, cutting board, and more

### Volume (milliliters)
Objects include: water bottle, coffee mug, soup bowl, wine glass, beer bottle, and more

### Weight (grams)
Objects include: apple, banana, egg, smartphone, laptop, coffee mug, and more

## Customization

### Adding New Objects

To add new comparison objects, edit the `conversion_data` object in `script.js`. Each object needs:
- A name (use underscores for spaces)
- A value in the appropriate unit

Example:
```javascript
{ object: "new_object", cm: 25 }
```
