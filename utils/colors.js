///////////////////////////////////////////////////////////////////////////////
// Convert hex to rgb object
///////////////////////////////////////////////////////////////////////////////
export function hexToRgbObject(hex) {
  const sanitizedHex = hex.replaceAll("##", "#")
  const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    sanitizedHex
  );

  if (!colorParts) {
    return null
  }

  const [, r, g, b] = colorParts

  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16)
  }
}

///////////////////////////////////////////////////////////////////////////////
// Convert hex to rgb string
///////////////////////////////////////////////////////////////////////////////
export function hextToRgbString(hex) {
  const rgbObject = hexToRgbObject(hex)
  const r = rgbObject.r
  const g = rgbObject.g
  const b = rgbObject.b

  return `${r} ${g} ${b}`
}

///////////////////////////////////////////////////////////////////////////////
// Lighten a color by specified intensity
///////////////////////////////////////////////////////////////////////////////
function lighten(hex, intensity) {
  const color = hexToRgbObject(`#${hex}`)

  if (!color) {
    return ""
  }

  const r = Math.round(color.r + (255 - color.r) * intensity)
  const g = Math.round(color.g + (255 - color.g) * intensity)
  const b = Math.round(color.b + (255 - color.b) * intensity)

  return `${r} ${g} ${b}`
}

///////////////////////////////////////////////////////////////////////////////
// Darken a color by specified intensity
///////////////////////////////////////////////////////////////////////////////
function darken(hex, intensity) {
  const color = hexToRgbObject(hex)

  if (!color) {
    return ""
  }

  const r = Math.round(color.r * intensity)
  const g = Math.round(color.g * intensity)
  const b = Math.round(color.b * intensity)

  return `${r} ${g} ${b}`
}

///////////////////////////////////////////////////////////////////////////////
// Generate palette from a single color
// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
///////////////////////////////////////////////////////////////////////////////
export function generatePalette(color) {
  const response = {
    500: hextToRgbString(color)
  }

  const intensityMap = {
    50: 0.95,
    100: 0.9,
    200: 0.75,
    300: 0.6,
    400: 0.3,
    600: 0.9,
    700: 0.75,
    800: 0.6,
    900: 0.49
  }

  const lightShades = [50, 100, 200, 300, 400]
  const darkShades = [600, 700, 800, 900]

  lightShades.forEach(level => {
    response[level] = lighten(color, intensityMap[level]);
  })

  darkShades.forEach(level => {
    response[level] = darken(color, intensityMap[level]);
  })

  return response
}

///////////////////////////////////////////////////////////////////////////////
// Determine the accessible color of text
///////////////////////////////////////////////////////////////////////////////
export const getAccessibleColor = (hex) => {
  let color = hex.replace(/#/g, "")
  // if shorthand notation is passed in
  if (color.length !== 6) {
    color = `${color}${color}`
  }
  // rgb values
  var r = parseInt(color.substr(0, 2), 16)
  var g = parseInt(color.substr(2, 2), 16)
  var b = parseInt(color.substr(4, 2), 16)
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "#000000" : "#FFFFFF"
}