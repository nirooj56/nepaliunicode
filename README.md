<h1 align="center">  Unicode Converter </h1>

<p align="center">
<img height="256" width="256" src="https://github.com/nirooj56/unicode/blob/master/logo.png" title="Unicode Converter">
</p>

Unicode Converter is an Desktop Application aiming to help general user belonging from Nepal by providing an easy way to Convert English Word into Nepali words using Unicode system.

* This is an standalone Desktop Application created using Web Technologies like HTML/CSS, Javascript, NodeJS & [Electron](electron.github.io).
* We have online Unicode converter available as well at [Unicode Site](www.nepdict.com/unicode).

##Screenshot
<p align="center">
<img src="https://github.com/nirooj56/unicode/blob/master/screenshot.png" title="Screenshot">
</p>

## Installation

Download the latest version of Unicode Converter Desktop Application from [the official website](https://nepdict.com/download/) or the [GitHub releases](https://github.com/nirooj56/unicode/releases) page.

##Contribution

**Unicode Converter** is under very active development. You can try out the current (stable) development version by cloning or Forking the Git repo. See the instructions below in the "[How to Contribute](#how-to-contribute)" section.

### Get the code

```
$ git clone https://github.com/nirooj56/unicode.git
$ cd unicode
$ npm install
```

### Run the app

```
$ npm start
```

### Watch the code

Restart the app automatically every time code changes. Useful during development.

```
$ npm run watch
```

### Run linters

```
$ npm test
```
### Package the app

Builds app binaries for Mac, Linux, and Windows.

```
$ npm run package
```

To build for one platform:

```
$ npm run package -- [platform] [options]
```

Where `[platform]` is `darwin`, `linux`, `win32`, or `all` (default).

The following optional arguments are available:

- `--sign` - Sign the application (Mac, Windows)
- `--package=[type]` - Package single output type.
   - `deb` - Debian package
   - `zip` - Linux zip file
   - `dmg` - Mac disk image
   - `exe` - Windows installer
   - `portable` - Windows portable app
   - `all` - All platforms (default)

Note: Even with the `--package` option, the auto-update files (.nupkg for Windows, *-darwin.zip for Mac) will always be produced.

#### Windows build notes

The Windows app can be packaged from **any** platform.

Note: Windows code signing only works from **Windows**, for now.

Note: To package the Windows app from non-Windows platforms,
[Wine](https://www.winehq.org/) needs to be installed. For example on Mac, first install [XQuartz](http://www.xquartz.org/), then run:

```
brew install wine
```

(Requires the [Homebrew](http://brew.sh/) package manager.)

#### Mac build notes

The Mac app can only be packaged from **macOS**.

#### Linux build notes

The Linux app can be packaged from **any** platform.

## Version

* **Version 1.0.0**
 -> _First release with the ability to convert English Words into Nepali Unicode_
 
## Contact

* **Homepage**: www.nepdict.com/unicode/
* **E-Mail**: info@nepdict.com
* **Facebook**: [Nepdict](http://www.facebook.com/nepdict)
* **Twitter**: [Nepdict](http://www.twitter.com/nepdict)
 	* // Developer Info //
* **Name**: Nirooj Bista
* **Website**: http://www.nirojbista.com.np
* **E-mail**: info@nirojbista.com.np
* **[Facebook](https://www.facebook.com/niroj56) - [Twitter](https://www.twitter.com/nirooj56) - [Google+](https://plus.google.com/+bistanirooj) - [Linkedin](https://www.linkedin.com/in/nirooj56)**

## License

MIT. Copyright (c) [Nirooj Bista](http://nirojbista.com.np)
