const fs = require('fs')
//Get all sections and themes from freeCodeCamp
const {themes} = require('./constants')
//For every section create a directory, for every subject create a javascript file
Object.keys(themes).forEach((section) => {
    console.log(section)
    //If directory not exists - create it!
    if (!fs.existsSync(section)) {
        console.log('Not exist!')
        fs.mkdirSync(section
        );
    }
    const extension = ['React', 'ReactAndRedux', 'Redux'].includes(section) ? 'js' : 'html'
    //When directory is truly created - for every subject of this section we create separate javascript file
    themes[section].forEach(subject => {
        const filePath = `./${section}/${subject}.${extension}`
        fs.writeFile(filePath, '', {flag: 'wx'}, function (err) {
            // if (err) console.error(err)
            // console.log("It's saved!");
        });
    })
})
