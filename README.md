# I18nTranslatorFromDeepl
Etant développeur .NET/PHP, Angular je me suis souvent confronté a la traduction des applications en front. J'ai donc développé un outil vous permettant
de traduire un fichier json d'une langue source vers une ou plusieurs langues cibles disponibles dans le traducteur Deepl.
L'application vous généra le ou les fichiers JSON avec les mêmes clés mais où les valeurs sont traduite dans la ou les langues souhaitées.
# Deepl
DeepL est un service de traduction automatique en ligne de la société DeepL GmbH, lancé le 28 août 2017 par l'équipe de Linguee.
Le service permet de traduire 26 langues formant 650 combinaisons de langue à langue.
Ce service utilise des réseaux de neurones convolutifs constitués sur la base de données Linguee. 
À l’en croire, au moment de la publication, DeepL dépasserait ses concurrents dans des tests à l’aveugle, entre autres Google Traduction, Microsoft Traduction et Facebook. 
Il serait aussi plus précis et plus nuancé pour une rapidité égale à ses concurrents.
Depuis décembre 2018, les traductions vers le russe et le portugais sont également disponibles8.
Le 19 mars 2020, les traductions en chinois simplifié et en japonais ont été ajoutées.
Le 17 mars 2021, 13 langues européennes sont ajoutées dont le grec ou le suédois.
Son principe se fonde sur un robot d'indexation de collecte de traductions déjà existantes sur les sites internet. 
# Requis
Pour que l'application fonctionne il vous faut une clé d'API Deepl. Si vous voulez tester l'application sans forcément payer sachez que Deepl propose
, lors de la création d'une compte pro, une clé d'API a durée illimitée vous permettant de traduire 500k caractères par mois.
Il vous faut, pour executer l'application un système d'exploitation en 64 bits (macOs, Linux ou encore Windows).
L'application étant faite avec ElectronJs le gestionnaire de package NPM vous sera nécessaire.

# Installation
## Obtenir l'application
En premier récupérez le code complet de l'application depuis mon dépôt github.
## Installer les dépendances
Si vous ne possèdez pas encore NPM téléchargez le.
Rendez vous dans le dossier de l'application Deepl (là où se trouve le package.json).
Ouvrez un terminal de commande et lancez la commande `npm install`. Cette commande installera toutes les dépendances nécessaire au fonctionnement de l'application.
## Lancement de l'application
Une fois que toutes les dépendances sont installées dans le même terminal lancez la commande `npm start`. Cette commande exécutera le service Electron local
et lancera donc l'application.
# Utilisation
## Clé d'API Deepl
Premièrement obtenez une clé d'api deepl (gratuite ou payante)
Rendez vous sur l'application et cliquez en bas a droite sur la roue dentée pour acceder aux parametres.
Entrez votre clé d'API Deepl.
Sélectionnez votre langue source utilisée dans votre fichier JSON de traduction source.
Sélectionnez ensuite la ou les langues cibles dans lesquelles vous souhaitez obtenir les fichiers JSON de traduction.
Cliquez ensuite sur la petite maison en bas a droite pour revenir sur l'accueil.
## Fournir le fichier JSON source
Cliquez sur le petit nuage au centre de l'application pour télécharger votre fichiers JSON source.
/!\ Faites bien attention que votre fichier JSON soit bient formaté. Vous pouvez vérifier le formatage en suivant ce lien : https://jsonlint.com/
## Lancer la traduction
La traduction se lance automatiquement et vous fournit les fichiers JSON
/!\ Veuillez patienter quelques minutes en fonction du nombre de langues cibles choisies. Le temps de traitement peu varié de façon important en fonction du débit de votre connexion internet et des performances de votre machine.
## Obtenir les fichiers JSON
Pour télécharger le ou les fichiers JSON résultants cliquez sur le lien bleu qui apparait au centre de l'écran.
# Contact
Je suis ouvert aux suggestions et aux pull requests.
Vous pouvez me contacter sur contact@followupsystem.fr
# Licence
Ce programme est distribué sous licence GNU v3
