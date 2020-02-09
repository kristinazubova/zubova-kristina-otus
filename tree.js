const path = require('path')
const fs = require('fs')

function tree(folderPath) {
  let result = {
    files: [],
    dirs: []
  }

  getFiles(folderPath, path.basename(folderPath)).then(() => {
    console.log(result)
  })

  function getFiles(folderPath, currentDir) {
    return new Promise(resolve => {
      fs.readdir(folderPath, (err, inFolder) => {
        if (err) {
          console.error(err)
        }

        if (inFolder.length) {
          let innerDirCounter = 0

          inFolder.forEach((elem, index) => {
            let elementPath = folderPath + '/' + elem

            fs.stat(elementPath, (err, stats) => {
              if (err) {
                console.error(err)
              }

              let newElem = currentDir + '/' + elem

              if (stats.isFile()) {
                result.files.push(newElem)
              }

              if (stats.isDirectory()) {
                innerDirCounter++
                getFiles(elementPath, newElem)
                  .then(() => {
                    innerDirCounter--

                    if (innerDirCounter === 0)
                      resolve()
                  })

                result.dirs.push(newElem)
              }

              if (innerDirCounter === 0 && index === inFolder.length - 1) {
                resolve()
              }
            })
          })
        } else {
          resolve()
        }
      })
    })
  }
}

tree('E:/Microsoft.SkypeApp_kzf8qxf38zg5c!App/Home tasks')