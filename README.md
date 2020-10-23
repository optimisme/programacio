# programació #

Aquest projecte recull exemples i exercicis de l'assignatura de programació

### Instal·lació ###

Si el node no està instal·lat, cal instal·lar el "NodeJS" que farà de servidor:
```
sudo apt install npm
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo n latest
```

### Codi del servidor ###

Per descarregar el codi del servidor
```
git clone https://github.com/optimisme/programacio.git
```

Per descarregar els mòduls necessaris:
```
cd programacio
npm install
```
Per actualitzar el codi des del servidor remot:
```
git pull origin main
```

### Actualitzar codi del servidor ###

Per descarregar el codi del servidor remot, mantenint els canvis locals:
```
git stash
git pull
git stash pop
```
Aleshores els arxius que heu modificat tindràn "conflictes", per mantenir els vostres canvis a tots els arxius amb conflictes podeu fer:
```
git pull -X theirs
```
Per mantenir els vostres canvis a només un arxiu amb conflictes, podeu fer:
```
git checkout --theirs -- exercici001.js
```
On "exercici001.js" és el nom de l'arxiu amb conflictes

Si cal, els conflictes també es poden editar a mà