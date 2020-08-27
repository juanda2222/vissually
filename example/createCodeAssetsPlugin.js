
const path = require('path');
const fs = require('fs')

const CODE_FOLDER_FILES = path.join(__dirname, 'src', 'components', 'examples')
const CODE_ASSETS_FOLDER_FILES = path.join(__dirname, 'src', 'assets')

/**
 * this script will create all the example code as jsx string modules
 */
async function main () {

  // read all example files
  fs.readdirSync( CODE_FOLDER_FILES).forEach( file_name => {

    // get the code string (replace all the next line and a "\" to create a multi line string)
    let code_string = fs.readFileSync( path.join(CODE_FOLDER_FILES, file_name) )
    let jsx_asset_code = `
    export default {
      string: \`${ code_string}\` 
    }
    `
    // always write to file (overwrite existing)
    fs.writeFileSync( 
      path.join(CODE_ASSETS_FOLDER_FILES, file_name),  
      jsx_asset_code,
      { flag: 'w' }
    )
    console.log(`Code file named as: "${path.join(CODE_FOLDER_FILES, file_name)}" was created with the same name in ${CODE_ASSETS_FOLDER_FILES}`);
    console.log("File content: ", jsx_asset_code);
      
  });
}

main()