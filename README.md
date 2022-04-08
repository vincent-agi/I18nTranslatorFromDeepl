# I18nTranslatorFromDeepl

Being a .NET/PHP, Angular developer I often had to deal with the translation of front-end applications. So I developed a tool that allows you to translate a json file from a source language to one or more target languages available in the Deepl translator. The application will generate the JSON file(s) with the same keys but where the values are translated into the desired language(s).
# Deepl

DeepL is an online machine translation service from DeepL GmbH, launched on August 28, 2017 by the Linguee team. The service translates 26 languages forming 650 language-to-language combinations. The service uses convolutional neural networks built on the Linguee database. According to the company, at the time of publication, DeepL would outperform its competitors in blind tests, including Google Translation, Microsoft Translation and Facebook. It would also be more accurate and nuanced for the same speed as its competitors. As of December 2018, translations to Russian and Portuguese are also available8. On March 19, 2020, translations to simplified Chinese and Japanese were added. On March 17, 2021, 13 European languages were added including Greek or Swedish. Its principle is based on an indexing robot that collects translations already existing on websites.
# Required

For the application to work, you need a Deepl API key. If you want to test the application without necessarily paying, Deepl offers, when you create a pro account, an API key for an unlimited period of time allowing you to translate 500k characters per month. To run the application, you need a 64-bit operating system (Mac OS, Linux or Windows). The application is made with ElectronJs and you will need the NPM package manager.
Installation
# Get the application

First get the complete code of the application from my github repository.
## Install the dependencies

If you don't have NPM yet, download it. Go to the Deepl application folder (where the .json package is). Open a command terminal and run the command npm install. This command will install all the dependencies necessary to run the application.
## Launching the application

Once all the dependencies are installed in the same terminal run the npm start command. This command will run the local Electron service and start the application.
Usage
## Deepl API key

First get a deepl api key (free or paid) Go to the application and click on the cogwheel at the bottom right to access the settings. Enter your Deepl API key. Select your source language used in your source translation JSON file. Then select the target language(s) in which you want to get the translation JSON files. Then click on the little house at the bottom right to return to the home page.
## Provide the source JSON file

Click on the little cloud in the center of the application to upload your source JSON file. /!Make sure your JSON file is properly formatted. You can check the formatting by following this link: https://jsonlint.com/
## Launch the translation

The translation starts automatically and provides you with the /!\ JSON files. Please wait a few minutes depending on the number of target languages selected. The processing time may vary significantly depending on the speed of your internet connection and the performance of your machine.
## Getting the JSON files

To download the resulting JSON file(s) click on the blue link that appears in the center of the screen.
# Contact

I am open to suggestions and pull requests. You can contact me at contact@followupsystem.fr
# License

This program is distributed under the GNU v3 license
