# TODO

MVP / POC

- [x] create dummy data
- [x] create qr codes
- [x] create name tag with personal data
- [x] create name tag with personal data AND qr code
- [x] create Scribus document to create printing `.pdf`
- [x] add data to sqlite database
- [x] create base angular website
- [x] create github pages
- [x] add user/attendee page
- [x] add login page
- [x] add after login attendee page
- [ ] ....

## install

- js-sha256 <https://www.npmjs.com/package/js-sha256>
- qrcode-svg <https://www.npmjs.com/package/qrcode-svg>

```bash
npm i --save-dev @types/qrcode-svg
```

```bash
npm install js-sha256 qrcode-svg
```

## live server

create a file `settings.json` file het `.vscode` - folder

```json
{
  "liveServer.settings.root": "/dist/rawevent"
}
```

```bash
touch .vscode/settings.json
```

## Inspiration

Vergelijkbare oplossing aan de website kant: https://www.yellenge.nl/succesvol-event/

## Add content to index.html

- [x] change title in `src/index.html`
- [x] change svg icon in `src/index.html`
- [x] fix icons in `src/app/components/nav/nav.component.html`

## Update data

- [x] update `src/nav.route.ts`

## Misc

- [x] Delete this file `/setup_angular_v01.sh` use in terminal `rm setup_angular_v01.sh`

## Start developement

- [x] `ng serve --open`
