
::hipotetical deploy steps from a local computer
:: npm publish --access public
:: typedoc --out ./documentation/ src --exclude "**/*+(test|index).tsx" --allowJs --ignoreCompilerErrors
:: upload to aws s3 bucket the documentation
