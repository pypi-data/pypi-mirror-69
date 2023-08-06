# beancount_mnb
Az MNB hivatalos középárfolyamainak letöltését megvalósító beancount plugin.

## Telepítés
* A letöltött kódot olyan helyre kell tenni, ahonnan a futó Python scriptek automatikusan importálni tudnak
* Ha pl. a script a `D:\Documents\beancount_mnb` mappában lakik, akkor a `PYTHONPATH` környezeti változóhoz hozzá kell adni a `D:\Documents` mappát is

## Használata
Sztenderd `bean-price` parancsokkal:
* csomag neve: `beancount_mnb` 
* devizák nevei: hárombetűs ISO devizamegnevezések

### Példák
Aznapi USD árfolyam lekérése:
```bash
bean-price -e 'HUF:beancount_mnb/USD'
```

2018. január 10-i euró árfolyam lekérése:
```bash
bean-price --date 2018-01-10 -e 'HUF:beancount_mnb/EUR'
```

Ha a fentiek működnek, akkor a főkönyvbe fixen is beépíthetőek pl. az alábbi két devizanem árfolyamainak forrása:
```
1970-01-01 commodity USD
  price: "HUF:beancount_mnb/USD"
1970-01-01 commodity EUR
  price: "HUF:beancount_mnb/EUR"
```

Ezt követően már nem szükséges expliciten megadni a kívánt devizanemeket:
```bash
bean-price fokonyv.beancount
```

## Megjegyzések
Ünnepnapokon és hétvégén nincsenek hivatalos középárfolyamok. 

Ha ekkor is szeretnénk árfolyamokhoz jutni, akkor a beancount lehetőséget ad fallback adatforrás megadására is:

```
1970-01-01 commodity EUR
  price: "HUF:beancount_mnb/EUR,yahoo/EURHUF=X"
1970-01-01 commodity USD
  price: "HUF:beancount_mnb/USD"
```
