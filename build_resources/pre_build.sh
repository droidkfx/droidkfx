#!/bin/bash

echo "Running pre build script...";

# Update the footer build date to the current date
DATE=`date`;
echo "Replacing build date in footer as : $DATE";
sed -ri "s/~~~BUILD_DATE_REPLACE_SLOT~~~/$DATE/" src/templates/footer.js;