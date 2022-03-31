# GroupUp

> GroupUp: Project in TDT4140 - Software Engineering

https://user-images.githubusercontent.com/69514187/161054432-2f1a1d71-2834-4ebf-bf13-3477aa93c4a7.mp4

# Starte applikasjonen
### Klient (frontend)

Gå først til mappen `./app`

```shell
$ npm start
```

### Tjener (backend + database)

Gå først til mappen `./server`

```shell
$ npm run dev
```


## CI

CI sjekker _prettier_ og _eslint_. For å sjekke dette manuelt lokalt på datamaskinen kan en kjøre kommandoene under:

```sh
$ npm run prettier # Fikser alt av prettier for deg 
$ npm run lint # Sjekker etter eslint-feil, men vil ikke fikse det for deg
```
