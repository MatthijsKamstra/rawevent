# RAW-event

https://www.npmjs.com/package/qrcode-svg

```bash
npm i qrcode-svg
```

```bash
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
