<h1 align="center">
  <br>
  <img height="256" width="256" src="https://github.com/nirooj56/nepaliunicode/blob/master/logo.png" alt="Unicode Converter">
  <br>
  Unicode Converter
  <br>
   <a href="https://travis-ci.org/nirooj56/nepaliunicode"><img src="https://travis-ci.org/nirooj56/unicode.svg?branch=master" alt="Travis"></a>
  <a href="https://github.com/nirooj56/nepaliunicode/releases"><img src="https://img.shields.io/github/release/nirooj56/unicode.svg" alt="Release"></a>
  <a href="https://github.com/nirooj56/nepaliunicode/blob/master/Licence"><img src="https://img.shields.io/github/license/nirooj56/unicode.svg" alt="Release"></a>
  <a href="https://snapcraft.io/nepaliunicode">
<img alt="nepaliunicode" src="https://snapcraft.io/nepaliunicode/badge.svg" />
</a>
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

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/nepaliunicode)
[![Get it as Appimage](https://i.imgur.com/EKFupJW.png)](https://github.com/nirooj56/nepaliunicode/releases/download/v1.2.2/NepaliUnicode.AppImage)


### MacOS
[![Get it as DMG (MacOS)](https://i.imgur.com/fwLy2G8.png)](https://github.com/nirooj56/nepaliunicode/releases/download/v1.2.1/Unicode-1.2.1.dmg)

### Windows
[![Get it as Execuatable](https://i.imgur.com/hNXhjPA.png)](https://github.com/nirooj56/nepaliunicode/releases/download/v1.2.1/Unicode-Setup_x64.exe)


## Contribution

**Unicode Converter** is NOT under active development. This project is archieved. I don't even know if it still works. You can try out the current (stable) development version by cloning or Forking the Git repo. See the instructions below in the "[How to Contribute](#how-to-contribute)" section.

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
    * Removed the Debian based packaging format (.deb) for Linux and replaced with [AppImage](https://appimage.org/) and [Snap](https://snapcraft.io/) for Universal Packaging among every Linux Distros.

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

## License

MIT. Copyright (c) [Nirooj Bista](http://nirojbista.com.np)
