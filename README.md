# SitePerso

### Utilise : 
- Grunt
- Sass
- Compass

### Utilisation
- Première installation `npm install`
- Ensuite lancer `grunt watch`, qui effectue une surveillance des fichier `/sass/*` et `/public/src_*.html` qui a chaque modification :
    - compile (et minifie) les fichiers sass dans `/public/css`,
    - concatène les feuilles css dans un fichier unique `/public/css/style.css`,
    - génère de nouveaux fichiers `/public/*.html`, copies des fichiers `/public/src_*.html` incluant `/public/css/style.css` inline.