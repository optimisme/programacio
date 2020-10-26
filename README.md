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

### Crear una branca per fer els exercicis

Per crear una branca per fer els exercicis
```
git branch exercicis
git checkout exercicis

```
Ara podeu fer els canvis oportuns al codi

### Guardar els canvis

Cal guardar els canvis que es van fent al git, amb una explicació del què es modifica
```
git checkout exercicis
git commit -a -m "Explicació de les modificacions"
```

### Descarregar canvis remots i barrejar-los amb els vostres exercicis

Per descarregar el nou codi sense afectar als exercicis que has fet
```
git checkout main
git pull
git checkout exercicis
git merge main --strategy-option ours -m "Merge"
```

Caldrà resoldre els conflictes, es fa editant el codi i arreglant a mà el codi en conflicte
