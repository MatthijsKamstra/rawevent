# RAW-event

https://www.npmjs.com/package/qrcode-svg

```bash
npm i qrcode-svg
```

```bash
haxelib install hxnodejs
npm install dts2hx --save-dev
npm install qrcode-svg --save
npm install @types/qrcode-svg --save

npx dts2hx qrcode-svg

# don't forget to add `--library qrcode-svg` to your build

```

<!--

## small adjustments

```haxe
@:jsRequire("qrcode-svg")
@:native('QRCode')
```

add `@:native('QRCode')`

1. we will use the npm install lib
2. we want to make sure it uses the name `QRCode` and not `QrcodeSvg`

-->

```bash
svgo -i nametag_v01.svg -o nametag_cleaner_v01.svg
```

## Inkscape

https://wiki.inkscape.org/wiki/Using_the_Command_Line

```bash
inkscape --version
```

convert svg to png

```bash
inkscape --export-type=png bin/test.svg
# or
inkscape --export-type=png --export-filename output.png -w=1024 test.svg
#
inkscape --export-type png -w 1024 bin/export/combo/00000_combo_slyvia_de_vries.svg

```

`// WARNING: Secure coding is not enabled for restorable state! Enable secure coding by implementing NSApplicationDelegate.applicationSupportsSecureRestorableState: and returning YES.`

# Install rsvg-convert.

```bash
brew install librsvg
```

```bash
rsvg-convert -h 32 icon.svg > icon-32.png
```
