const fs = require('fs')

const type = process.argv[2]

function writeFile(data, type) {
  let data_convert
  const convert = {
    up: () => {
      data_convert = data.toUpperCase()
    },
    low: () => {
      data_convert = data.toLowerCase()
    },
    underscore: () => {
      data_convert = data.split(/(?=[A-Z])/).join('_')
    },
    underscore_up: () => {
      data_convert = data
        .split(/(?=[A-Z])/)
        .join('_')
        .toUpperCase()
    },
  }
  if (convert[type]) {
    convert[type]()
  } else {
    throw 'Type Error'
  }

  fs.writeFile('./word_convert.txt', data_convert, (err) => {
    if (err) console.log(err)
    console.log('Successfully Written to File.')
  })
}

fs.readFile('./words.txt', 'utf8', (err, data) => {
  if (err) console.error(err)
  writeFile(data, type)
})
