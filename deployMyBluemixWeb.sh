cd /Users/sujoyghosal/Desktop/apps/ADAPT/PersonalityWeb
rm -rf node_modules
bluemix api https://api.ng.bluemix.net
bluemix login -u sujoy.ghosal@gmail.com -o "sujoyghosal" -p "Kolkata39" -s dev
#bluemix app push freecycleapi
bluemix app push personality-analyser-sujoy-adapt

