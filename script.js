
// JavaScript gng

// guys guys, i know its not neatly (chaos)
// because i make this without other person helps
// i just make this with AI such like gpt and deepseek
// even with AI, i make this 90% by my hand, ai are just for debugging and ideas
// remember!
// i make this with just a phone, a cheap phone not iphone or smt else
// and my time is not infinite, ive gone to school and do other activities
// i started it ~september 8th 2025
// finished at today ~september 21st 2025
// im still 14 y.o and i have doin this (progtamming) for 3 months
// andd, lets get serious

// i'm zikri — for 9897 ❤

// const gng
const feedback = document.getElementById('messageFeedback')
const darkModeSlider = document.getElementById('slider-dark-mode')
const paste = document.getElementById('paste_content')
const swap = document.getElementById('swap')
const copy = document.getElementById('copy')
const download = document.getElementById('download-button')
const toastContent = document.getElementById('toastContent')
const reset = document.getElementById('reset')
const input = document.getElementById('display-input')
const output = document.getElementById('display-output')
const example = document.querySelectorAll('.btn-convert')
const exampleOutput = document.getElementById('example-output')
const faqItems = document.querySelectorAll('.faq-items')
const zoomIn = document.getElementById('zoom-in')
const zoomInOutput = document.getElementById('zoom-in-output')
const encoderFrom = document.getElementById('encoder-from')
const encoderTo = document.getElementById('encoder-to')
const convert = document.getElementById('convert-encoder')
const settingButton = document.getElementById('settings-button')
const sidebarSetting = document.getElementById('settingsSidebar')
const overlaySetting = document.getElementById('overlaySettings')
const closeButton = document.getElementById('closeButton')
const red = document.getElementById('red-theme')
const green = document.getElementById('green-theme')
const blue = document.getElementById('blue-theme')
const wordBreakSlider = document.getElementById('word-break-slider')
const upperSlider = document.getElementById('uppercase-slider')
const separatorSlider = document.getElementById('separator-slider')
const stackPaste = document.getElementById('stack-paste')
// const gng --end
// the syntax err0r hohoho,
// darkmodeee YIPPE~ :3 i love darkmode
function darkMode() {
  const dark = document.body
  const darkLogo = document.getElementById('dark-logo')

  dark.classList.toggle('dark')
  darkLogo.classList.add('oproscaleOut')

  setTimeout(() => {
    if (dark.classList.contains('dark')) {
      darkLogo.textContent = 'light_mode'
    } else {
      darkLogo.textContent = 'dark_mode'
    }

    darkLogo.classList.remove('oproscaleOut')
    darkLogo.classList.add('oproscaleIn')

    setTimeout(() => {
      darkLogo.classList.remove('oproscaleIn')
    }, 300)
  })

  darkModeSlider.checked = dark.classList.contains('dark')
  darkModeSlider.dispatchEvent(new Event("change"))
}

darkModeSlider.addEventListener("change", () => {
  if (darkModeSlider.checked) {
    // slider ON → dark mode activated
    if (!document.body.classList.contains('dark')) {
      darkMode()
    }
  } else {
    // slider OFF → dark mode dies, i mean deactivated
    if (document.body.classList.contains('dark')) {
      darkMode()
    }
  }
})

function closeSettings () {
  sidebarSetting.classList.remove('active')
  overlaySetting.classList.remove('active')
  document.body.style.overflow = 'auto'
}

settingButton.addEventListener("click", () => {
  sidebarSetting.classList.add('active')
  overlaySetting.classList.add('active')
  document.body.style.overflow = 'hidden'
})

closeButton.addEventListener("click", closeSettings)
overlaySetting.addEventListener("click", closeSettings)

red.addEventListener("click", () => {
  document.documentElement.classList.remove('blueTheme')
  document.documentElement.classList.remove('greenTheme')
  document.documentElement.classList.add('redTheme')
})
green.addEventListener("click", () => {
  document.documentElement.classList.remove('blueTheme')
  document.documentElement.classList.remove('redTheme')
  document.documentElement.classList.add('greenTheme')
})
blue.addEventListener("click", () => {
  document.documentElement.classList.remove('redTheme')
  document.documentElement.classList.remove('greenTheme')
  document.documentElement.classList.add('blueTheme')
})

const colorCircles = document.querySelectorAll('.color-circle')

colorCircles.forEach(circle => {
  circle.addEventListener("click", function () {
    colorCircles.forEach(c => c.classList.remove('active'))
    this.classList.add('active')
  })
})

wordBreakSlider.addEventListener("change", () => {
  const wordBreak = document.querySelectorAll('.wbabled')
  wordBreak.forEach(word => {
    if (wordBreakSlider.checked) {
      word.classList.add('word-break')
    }
    else {
      word.classList.remove('word-break')
    }
  })
})

separatorSlider.addEventListener("change", () => {
  separator = separatorSlider.checked ? " " : "";
})
separator = separatorSlider.checked ? " " : "";

paste.addEventListener("click", async function () {
  try {
    const permission = await navigator.permissions.query({ name: 'clipboard-read' })
    if (permission.state === 'denied') {
      showFeedback('Permission denied', 'error')
      console.error('Clipboard access permission denied. Please change your browser permission settings.')
      return
    }
   const readClipboard = await navigator.clipboard.readText()
   if (stackPaste.checked) {
     input.value += (input.value ? ' ' : '') + readClipboard
   } else {
   input.value = readClipboard
   }
   showFeedback('Paste success', 'success')
  } catch (err) {
    console.error('Failed to read clipboard:', err)
    showFeedback('Paste error', err)
  }
})

function showFeedback (text, type) {
  feedback.textContent = text
  feedback.className = 'message-feedback ' + type
  feedback.classList.add('show-feedback')
  
  setTimeout (() => {
    feedback.classList.remove('show-feedback')
  }, 2000)
}

copy.addEventListener("click", async () => {
  copy.disabled = true
  const outputVal = output.value
  setTimeout (() => {
    copy.disabled = false
  },3000) // no spamming
  if (!outputVal) {
    console.warn('Failed to copy: Output value was empty')
    showFeedback('Failed to copy', 'error')
    return
  }
  const toast = document.getElementById('toast')
  try {
    await navigator.clipboard.writeText(outputVal)
    showFeedback('Copied', 'success')
    copy.style.transform = 'translateX(-39px)'
    copy.style.boxShadow = '0 1px 15px var(--box-primary-color)'
    copy.style.background = 'var(--primary-color)'
    copy.style.color = 'white'
    toast.style.opacity = '1'
    
    setTimeout (() => {
      copy.style.transform = 'translateX(0)'
      toast.style.opacity = '0'
      setTimeout (() => {
        copy.style.transform = ''
        toast.style.opacity = ''
      }, 1400) // no bugs
    }, 1000)
    
    setTimeout (() => {
      copy.style.boxShadow = 'none'
      copy.style.background = 'none'
      copy.style.color = 'var(--primary-color)'
      setTimeout (() => {
        copy.style.boxShadow = ''
        copy.style.background = ''
        copy.style.color = ''
      }, 800) // no bugs
    }, 1600)
  } catch (err) {
    showFeedback('Failed to copy')
    console.error('Failed to copy the output:', err)
  }
}) // copppyyyyeeeeeeeee

download.addEventListener("click", () => {
  outputValt = output.value.trim()
  if (!outputValt) {
    console.error('Failed to download the file: Empty files')
    alert("Can't make the file because it's empty")
    return
  }
  try {
    const blob = new Blob([outputValt], { type: "text/plain"})
    const url = URL.createObjectURL(blob)
    const file = document.createElement('a')
    file.href = url
    file.download = "LexiChange-Convert.txt"
    document.body.appendChild(file)
    file.click()
    document.body.removeChild(file)
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error("Failed to make the file:", err)
  }
})

reset.addEventListener("click", () => {
  input.value = ''
  output.textContent= ''
}) // delete all the contents on the inputt

swap.addEventListener("click", () => {
  const temporary = encoderFrom.value
  encoderFrom.value = encoderTo.value
  encoderTo.value = temporary
})
/* ================
From Text Converter
================ */
let useUpper = true
upperSlider.addEventListener("change", upper => {
  useUpper = upper.target.checked
})

function textToBinary (text) {
  return text.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8,'0')
  }).join(separator)
}
function textToHex (text) {
  return text.split('').map(char => {
    let hex = char.charCodeAt(0).toString(16).toUpperCase().padStart(2,'0')
    return useUpper ? hex.toUpperCase() : hex.toLowerCase()
  }).join(separator)
}
function textToOctal (text) {
  return text.split('').map(char => {
    return char.charCodeAt(0).toString(8)
  }).join(separator)
}
function textToAscii (text) {
  return text.split('').map(char => {
    return char.charCodeAt(0)
  }).join(separator)
}
/* ================
From Binary Converter
================ */
function binaryToText (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,8}/g)
  return bytes.map(char => {
    return String.fromCharCode(parseInt(char, 2))
  }).join('')
}
function binaryToHex (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,8}/g)
  let convertingText = bytes.map(char => {
    return String.fromCharCode(parseInt(char, 2))
  })
  let resultConverter = convertingText.map(hex => {
    let binaryHex = hex.charCodeAt(0).toString(16).toUpperCase().padStart(2,'0')
    return useUpper ? binaryHex.toUpperCase() : binaryHex.toLowerCase()
  }).join(separator)
  return resultConverter
}
function binaryToOctal (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,8}/g)
  let convertingText = bytes.map(char => {
    return String.fromCharCode(parseInt(char, 2))
  })
  let resultConverter = convertingText.map(hex => {
    return hex.charCodeAt(0).toString(8)
  }).join(separator)
  return resultConverter
}
function binaryToAscii (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,8}/g)
  let convertingText = bytes.map(char => {
    return String.fromCharCode(parseInt(char, 2))
  })
  let resultConverter = convertingText.map(hex => {
    return hex.charCodeAt(0)
  }).join(separator)
  return resultConverter
}
/* ================
From Hex Converter
================ */
function hexToText (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,2}/g)
  return bytes.map(char => {
    return String.fromCharCode(parseInt(char, 16))
  }).join('')
}
function hexToBinary (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,2}/g)
  let convertingText = bytes.map(char => {
    return String.fromCharCode(parseInt(char, 16))
  })
  let resultConverter = convertingText.map(hex => {
    return hex.charCodeAt(0).toString(2).toUpperCase().padStart(8,'0')
  }).join(separator)
  return resultConverter
}
function hexToOctal (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,2}/g)
  let convertingText = bytes.map(char => {
    return String.fromCharCode(parseInt(char, 16))
  })
  let resultConverter = convertingText.map(hex => {
    return hex.charCodeAt(0).toString(8)
  }).join(separator)
  return resultConverter
}
function hexToAscii (text) {
  text = text.replace(/\s+/g, '')
  let bytes = text.match(/.{1,2}/g)
  let convertingText = bytes.map(char => {
    return String.fromCharCode(parseInt(char, 16))
  })
  let resultConverter = convertingText.map(hex => {
    return hex.charCodeAt(0)
  }).join(separator)
  return resultConverter
}
/* ================
From Octal Converter
================ */
function octalToText (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 8)
    if (code <= 255 && !isNaN(code)) {
      result += String.fromCharCode(code)
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 8)
      result += String.fromCharCode(code)
      i += 2
    }
  }
  return result
}
function octalToBinary (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 8)
    if (code <= 255 && !isNaN(code)) {
      result += code.toString(2).padStart(8, '0') + ' '
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 8)
      result += code.toString(2).padStart(8, '0') + ' '
      i += 2
    }
  }
  return result
}
function octalToHex (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 8)
    if (code <= 255 && !isNaN(code)) {
      let octalHex = code.toString(16).padStart(2, '0') + ' '
      result += (useUpper ? octalHex.toUpperCase() : octalHex.toLowerCase())
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 8)
      let octalHex = code.toString(16).padStart(2, '0') + ' '
      result += (useUpper ? octalHex.toUpperCase() : octalHex.toLowerCase())
      i += 2
    }
  }
  return result
}
function octalToAscii (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 8)
    if (code <= 255 && !isNaN(code)) {
      result += code + ' '
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 8)
      result += code + ' '
      i += 2
    }
  }
  return result
}
/* ================
From Ascii Converter
================ */
function asciiToText (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 10)
    if (code <= 255 && !isNaN(code)) {
      result += String.fromCharCode(code)
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 10)
      result += String.fromCharCode(code)
      i += 2
    }
  }
  return result
}
function asciiToBinary (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 10)
    if (code <= 255 && !isNaN(code)) {
      result += code.toString(2).padStart(8,'0') + ' '
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 10)
      result += code.toString(2).padStart(8, '0') + ' '
      i += 2
    }
  }
  return result
}
function asciiToHex (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 10)
    if (code <= 255 && !isNaN(code)) {
      asciiHex = code.toString(16).padStart(2, '0') + ' '
      result += (useUpper ? asciiHex.toUpperCase() : asciiHex.toLowerCase())
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 10)
      asciiHex = code.toString(16).padStart(2, '0') + ' '
      result += (useUpper ? asciiHex.toUpperCase() : asciiHex.toLowerCase())
      i += 2
    }
  }
  return result
}
function asciiToOctal (text) {
  text = text.replace(/\s+/g, '')
  let result = ''
  for (let i = 0; i < text.length;) {
    let code = parseInt(text.substr(i, 3), 10)
    if (code <= 255 && !isNaN(code)) {
      result += code.toString(8) + ' '
      i += 3
    } else {
      code = parseInt(text.substr(i, 2), 10)
      result += code.toString(8) + ' '
      i += 2
    }
  }
  return result
}

// Example "Hello, World!" xaxaxa
example.forEach(exampleButton => {
  exampleButton.addEventListener("click", function () {
    
    const exampleType = this.getAttribute('data-type')
    const exampleText = 'Hello, World!'
    let exampleResult;
    
    switch (exampleType) {
      case "binary":
        exampleResult = textToBinary(exampleText)
        break
      case "hex":
        exampleResult = textToHex(exampleText)
        break
      case "octal":
        exampleResult = textToOctal(exampleText)
        break
      case "ascii":
        exampleResult = textToAscii(exampleText)
        break
      default:
        exampleResult = textToBinary(exampleText)
    }
    
    exampleOutput.textContent = exampleResult
  })
})

example.forEach(button => {
    button.addEventListener("click", function () {
        example.forEach(btn => btn.classList.remove('selected'))
        this.classList.add('selected')
    })
})

// yk what is this? ↓ it's to make the example generate the output even whwn we aint click it
document.querySelector('[data-type="binary"]').classList.add('selected')
exampleOutput.textContent = textToBinary('Hello, World!')

zoomIn.addEventListener("click", () => {
  input.classList.toggle('zoom-in')
  
  zoomIn.classList.add('oprotateOut')
  setTimeout (() => {
    
    if (input.classList.contains('zoom-in')) {
      zoomIn.textContent = 'collapse_all'
    } else {
      zoomIn.textContent = 'expand_all'
    }
    
    zoomIn.classList.remove('oprotateOut')
    zoomIn.classList.add('oprotateIn')
    
    setTimeout (() => {
      zoomIn.classList.remove('oprotateIn')
    }, 300)
  })
}) //expand the content input
zoomInOutput.addEventListener("click", () => {
  output.classList.toggle('zoom-in')
  
  zoomInOutput.classList.add('oprotateOut')
  setTimeout (() => {
    
    if (output.classList.contains('zoom-in')) {
      zoomInOutput.textContent = 'collapse_all'
    } else {
      zoomInOutput.textContent = 'expand_all'
    }
    
    zoomInOutput.classList.remove('oprotateOut')
    zoomInOutput.classList.add('oprotateIn')
    
    setTimeout (() => {
      zoomInOutput.classList.remove('oprotateIn')
    }, 300)
  })
}) //expand the content output

faqItems.forEach(item => {
  const faqQuestions = item.querySelector('.faq-questions')
  
  faqQuestions.addEventListener("click", () => {
   faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active')
      }
    })
    item.classList.toggle('faq-active')
  })
}) // FAQ

convert.addEventListener("click", function () {
  const valueEncoder = input.value
  const valueOptionTo = encoderTo.value
  const valueOptionFrom = encoderFrom.value
  let valueOutput
  
  if (!valueEncoder) {
    output.textContent = ''
    return
  }
  
  // from text
  if (valueOptionFrom === 'text') {
    if (valueOptionTo === 'binary') {valueOutput = textToBinary(valueEncoder)}
    else if (valueOptionTo === 'hex') {valueOutput = textToHex(valueEncoder)}
    else if (valueOptionTo === 'octal') {valueOutput = textToOctal(valueEncoder)}
    else if (valueOptionTo === 'ascii') {valueOutput = textToAscii(valueEncoder)}
    else {valueOutput = valueEncoder}
  }
  // from binary
  if (valueOptionFrom == 'binary') {
    if (valueOptionTo === 'text') {valueOutput = binaryToText(valueEncoder)}
    else if (valueOptionTo === 'hex') {valueOutput = binaryToHex(valueEncoder)}
    else if (valueOptionTo === 'octal') {valueOutput = binaryToOctal(valueEncoder)}
    else if (valueOptionTo === 'ascii') {valueOutput = binaryToAscii(valueEncoder)}
    else {valueOutput = valueEncoder}
  }
  // from hex
  if (valueOptionFrom == 'hex') {
    if (valueOptionTo === 'text') {valueOutput = hexToText(valueEncoder)}
    else if (valueOptionTo === 'binary') {valueOutput = hexToBinary(valueEncoder)}
    else if (valueOptionTo === 'octal') {valueOutput = hexToOctal(valueEncoder)}
    else if (valueOptionTo === 'ascii') {valueOutput = hexToAscii(valueEncoder)}
    else {valueOutput = valueEncoder}
  }
  // from octal
  if (valueOptionFrom == 'octal') {
    if (valueOptionTo === 'text') {valueOutput = octalToText(valueEncoder)}
    else if (valueOptionTo === 'binary') {valueOutput = octalToBinary(valueEncoder)}
    else if (valueOptionTo === 'hex') {valueOutput = octalToHex(valueEncoder)}
    else if (valueOptionTo === 'ascii') {valueOutput = octalToAscii(valueEncoder)}
    else {valueOutput = valueEncoder}
  }
  // from ascii
  if (valueOptionFrom == 'ascii') {
    if (valueOptionTo === 'text') {valueOutput = asciiToText(valueEncoder)}
    else if (valueOptionTo === 'binary') {valueOutput = asciiToBinary(valueEncoder)}
    else if (valueOptionTo === 'hex') {valueOutput = asciiToHex(valueEncoder)}
    else if (valueOptionTo === 'octal') {valueOutput = asciiToOctal(valueEncoder)}
    else {valueOutput = valueEncoder}
  }
  
  
  output.textContent = valueOutput
})
