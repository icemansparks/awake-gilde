## Awake Gilden-Homepage

Dieses Repo ist Basis für die Gilden Homepage der Gilde <Awake> auf dem deutschen WoW Classic Server Dragon's Call.

https://www.awake-gilde.de



Wenn Du mir eine Tasse Kaffee spendieren willst nehme ich diese gerne über PayPal entgegen: https://paypal.me/DennisHerrmann



### Anleitung zur Mitarbeit

https://help.github.com/en/articles/editing-files-in-your-repository



### Recruitment / Rekrutierungs-Status anpassen

Die Daten für das Recruitment befinden sich in der index.html Datei ab Zeile 169.

Hierzu muss lediglich der folgende Part angepasst werden:

```javascript
var data2 = {
 recruitment:[
  {class:'druid', klasse:'Druide', spec:'- Wiederherstellung', status:'Mittel'},
  ...
````


### Mitgliederliste / Rooster anpassen

Die Daten für die Mitgliederliste befinden sich ebenfalls in der index.html Datei ab Zeile 210.

Hierzu muss lediglich der folgende Part angepasst werden:

```javascript
var data = {
 members:[
  {name:'Charaktername', class:'priest', klasse:'Priester', title:'Klassenleitung', council:'Gildenrat'},
  ...
```
