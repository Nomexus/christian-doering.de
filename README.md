## Installation

.env Datei erstellen

```bash
cp .env.example .env
```

---------------

#### Docker Container erstmalig aufbauen

```bash
docker-compose build
```

#### Docker starten
Der erste start dauert etwas länger, da erst sämtliche Pakete
installiert werden müssen und Services gestartet werden.

```bash
docker-compose up -d
```

### SSH / SFTP

SFTP muss in PHP-Storm eingerichtet werden um Änderungen an Dateien hochzuladen.

> Host: localhost  
> Benutzer: docker   
> Passwort: docker


### Weitere Befehle

#### Ordner aus Docker kopieren

Dieser Befehl muss ggf. als Administrator ausgeführt werden
```bash
docker cp cd_php:/var/www/html/FOLDERNAME/ ./
```