<h1 align="center">
  <br>
  <img height="256" width="256" src="https://github.com/nirooj56/nepaliunicode/blob/master/logo.png" alt="Unicode Converter">
  <br>
  Unicode Converter
  <br>
   <a href="https://travis-ci.org/nirooj56/nepaliunicode"><img src="https://travis-ci.org/nirooj56/unicode.svg?branch=master" alt="Travis"></a>
  <a href="https://github.com/nirooj56/nepaliunicode/releases"><img src="https://img.shields.io/github/release/nirooj56/unicode.svg" alt="Release"></a>
  <a href="https://github.com/nirooj56/nepaliunicode/blob/master/Licence"><img src="https://img.shields.io/github/license/nirooj56/unicode.svg" alt="Release"></a>
  <br>
</h1>

Unicode Converter is an Open Source Desktop Application aiming to help general user belonging from Nepal by providing an easy way to Convert English Word into Nepali words using Unicode system.

* This is an standalone Desktop Application created using Web Technologies like HTML/CSS, Javascript, NodeJS & [Electron](http://electron.atom.io/).

## Screenshot
<p align="center">
<img src="https://github.com/nirooj56/nepaliunicode/blob/master/screenshot.png" title="Screenshot">
</p>

## Installation

### Linux

    1. Download the AppImage based on your Architecture of OS(32-bit or 64-bit) from [Unicode releases page](https://github.com/nirooj56/nepaliunicode/releases/tag/v1.2.2).
    2. Make it executable with ``` $ sudo chmod a+x unicode_*.AppImage ```
    3. And Run by Double Clicking or ``` $ sudo ./unicode_*.AppImage ```

### OS-X

* Download the latest Realese from [Unicode releases page](https://github.com/nirooj56/nepaliunicode/releases/tag/v1.2.2).

### Windows

* Download the latest [Unicode installer](https://github.com/nirooj56/nepaliunicode/releases/tag/v1.2.2). ```Unicode-Setup_32bit.exe``` is for 32-bit, ```Unicode-Setup_x64.exe``` for 64-bit systems.
*  If you want the portable version and not have to install, then download ```win-ia32.zip```(32-bit) or ```win-x64.zip```(64-bit) from [Releases page](https://github.com/nirooj56/unicode/releases/tag/v1.2.2).

## Contribution

**Unicode Converter** is under very active development. You can try out the current (stable) development version by cloning or Forking the Git repo. See the instructions below in the "[How to Contribute](#how-to-contribute)" section.

### Get the code

```
$ git clone https://github.com/nirooj56/nepaliunicode.git
$ cd nepaliunicode
$ npm install
```

### Run the app

```
$ npm start
```

## Changelogs

* **Version 1.2.2**

    * _Various GUI Improvements_
    * Unused code has been cleared out.
    * New Logo updated.
    * Removed the Debian based packaging format (.deb) for Linux and replaced with AppImage, Snap and Flatpak. 
    * Thinking of adding Snap and/or Flatpak as a default installation option for linux. Will update soon on it.

* **Version 1.2.1**

    * _Various GUI Improvements_
    * _'index.html, about,html, help.html' has been moved inside 'app' directory for cleaner code compilation_
    * _Various Improvements in 'Package.json & main.js' files_
    * _Icon for the respective OS has been moved from 'assets/icons' to 'build/' directory_
    * _Finally been available to Port to different OS, mainly Linux, OSx and Windows_
    * _For Linux, **AppImage** has been choosen for packaging because it is ideal for upstream packaging and distribution. So no need to package in different ways for different distros (Which is a huge pain in the ass by the way, so Kudos to [AppImage](http://appimage.org/) Team)_


* **Version 1.0.0**
    * _First release with the ability to convert English Words into Nepali Unicode_
 
## Contact

* **Name**: Nirooj Bista
* **Website**: http://www.nirojbista.com.np
* **E-mail**: info@nirojbista.com.np
* **[Facebook](https://www.facebook.com/nirooj56) - [Twitter](https://www.twitter.com/nirooj56) - [Google+](https://plus.google.com/+bistanirooj) - [Linkedin](https://www.linkedin.com/in/nirooj56)**

## License

MIT. Copyright (c) [Nirooj Bista](http://nirojbista.com.np)
