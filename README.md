# Bröllopssida med privat fotoalbum i Google Drive

Den här sidan är statisk och kan ligga gratis på GitHub Pages. QR-koden leder till den vackra startsidan. Albumknappen öppnar en privat Google Drive-mapp där Joel och Elvira kan se fotona i rutnätsvy med miniatyrer. Själva sidan visar inte privata Drive-bilder som egna thumbnails: det skulle kräva Google-inloggning i sidan eller en serverdel.

## Förbered innan kortet trycks

1. Skapa en Drive-mapp. Låt **General access / Allmän åtkomst** vara **Restricted / Begränsad**. Kopiera mappens länk och klistra in den mellan citattecknen i `config.js` som `window.ALBUM_URL`. Sidan visar då albumknappen även medan mappen är tom.
2. Skapa ett publikt GitHub-repo och lägg **filerna i den här mappen** i repots rot. I **Settings → Pages → Build and deployment**, välj **Deploy from a branch**, `main`, `/ (root)` och **Save**. Öppna sidans adress på mobilen och skapa QR-koden till den exakta GitHub Pages-adressen.

## På eller efter bröllopet

3. Lägg foton direkt i Drive-mappen, från mobilen eller datorn. Du behöver inte ändra eller publicera om webbplatsen; QR-kodens adress är densamma.
4. Dela Drive-mappen med **Joel och Elviras Google-adresser** som **Viewer / Läsbehörig**. Behåll allmän åtkomst som **Begränsad**. Om Drive öppnas som lista kan de välja **rutnätsvy** för miniatyrer.

Den offentliga webbsidan innehåller bara text och länken till mappen. Andra som öppnar länken får inte se bilderna utan Drive-behörighet. När du fyllt i mappens länk visas albumknappen i stället för “Bilderna kommer snart ❤️”. Om mappen ännu inte finns kan du publicera först och fylla i `config.js` senare; sidans QR-adress ändras inte.
