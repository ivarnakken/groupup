# GroupUp

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
