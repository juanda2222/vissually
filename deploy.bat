
::hipotetical deploy steps from a local computer

:: script to create the code files
npm publish --access public
typedoc --out ./documentation/ src
:: upload to aws s3 bucket the documentation
:: deploy to heroku