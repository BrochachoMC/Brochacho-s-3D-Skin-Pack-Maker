// Gera www/ (ou a pasta passada em --out) a partir de src/app.html:
// troca as URLs de CDN por cópias locais (o APK funciona offline) e
// envolve o conteúdo em um documento HTML completo.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outIdx = process.argv.indexOf('--out');
const out = path.resolve(root, outIdx > -1 ? process.argv[outIdx + 1] : 'www');

const libs = [
  { cdn: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', from: 'node_modules/three/build/three.min.js', to: 'lib/three.min.js' },
  { cdn: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js', from: 'node_modules/jszip/dist/jszip.min.js', to: 'lib/jszip.min.js' },
];

let html = fs.readFileSync(path.join(root, 'src/app.html'), 'utf8');
fs.mkdirSync(path.join(out, 'lib'), { recursive: true });
for (const l of libs) {
  fs.copyFileSync(path.join(root, l.from), path.join(out, l.to));
  html = html.split(l.cdn).join(l.to);
}
// Fontes do Google ficam de fora no APK (usa as fontes do sistema)
html = html.replace(/<link[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>\s*/g, '');

const head = '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">' +
  '<style>:root{color-scheme:light;padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}' +
  'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>';
fs.writeFileSync(path.join(out, 'index.html'), head + html + '</body></html>');
console.log('Gerado em', out);
