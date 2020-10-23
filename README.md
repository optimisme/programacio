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

### Actualitzar codi del servidor mantenint canvis locals ###

Per descarregar el codi del servidor remot, mantenint els canvis locals:
```
git reset --hard HEAD 
git stash
git pull --rebase origin main
git stash pop
```
Els arxius que heu modificat, tindràn conflictes, aleshores:

- Per quedar-vos amb els tots els vostres arxius modificats:
```
git checkout --theirs .
```
- Per quedar-vos amb només amb arxius modificats específics:
```
git checkout --theirs -- exercici001.js
git checkout --theirs -- exercici002.js
git checkout --ours 
```
### Actualitzar codi del servidor esborrant canvis locals ###

Per descarregar el codi del servidor remot, esborrant els canvis locals:
```
git fetch --all
git reset --hard origin/main
```