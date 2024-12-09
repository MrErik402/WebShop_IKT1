# WebShop_IKT1
Ez a webshop az első féléves projektmunka feladatunk lesz. Résztvevő csapattagok: Nagyapáti Szilárd, Dóczi Adrián Márk, Bujáki Erik Attila

# Fontos linkek

## JIRA 

https://webshop.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?cloudId=5365291c-8e97-44b1-87c2-9c854e7ddf4d&atlOrigin=eyJwIjoiaiIsImkiOiIyZTNkOGY2OTRkYjY0YmM1OWI2MDUzYzVkNjNiMzM1ZCJ9

### SZÓTÁR

    [d.f.] -> Dokumentumos forma
    [g.f.] -> Grafikus forma 

## FIGMA

https://www.figma.com/design/I0WaHb0w6Ov6pzfRF52PkY/Untitled?node-id=0-1&node-type=canvas&t=balBgaWABajXEAEH-0

## Specifikáció

A weboldal felépítése és alapja egy olyan webshop lesz, amely játékok árusításával foglalkozik. A weboldal háromféle grafikai nézettel fog dolgozni, amelyek a következők: számítógépes (1024 px-től felfele), tabletes (1023 px – 768 px között), telefonos (767 px – 360 px). Egy általános oldalon található lesz egy Navbar, ami számítógépes nézeten folyamatosan megjelenik, míg tabletes vagy telefonos nézetben egy hamburger menü lesz.

### A weboldalon a következő oldalak lesznek megtalálhatók: 
-	**Főoldal** -> Itt az éppen legkelendőbb kategóriák jelennek meg.
-	**Navbar** -> Itt található meg egy weboldal logo a bal felső sarokban, amelyre kattintva                             a főoldalra vezet vissza. A jobb oldaltól a bal oldal fele a következő sorrendben jelennek meg a címkék: Rólunk, Játékok [Ebből fog lenyílni egy dropdown amiben a következő menüpontok lesznek elérhetőek: Társas játékok, Elektronikus játékok, Műanyag játékok, Fegyverek], Airsoft [Ebből fog lenyílni egy dropdown amiben a következő menüpontok lesznek elérhetőek: Fegyverek, Ruha, Kiegészítők, Töltények]. Amennyiben egy terméknél a „Kosárba” gombra kattintva akkor a weboldal logója mellett található kosár ikon jobb felső sarkában jelenik meg egy számláló, amely jelzi, hogy jelenleg mennyi termék található a kosárban, amennyiben erre a kosárra kattintunk akkor részletes láthatjuk, hogy jelenleg mi van a kosárban. Amennyiben a kosár tartalma nem üres és jelenleg számítógépes nézetben vagyunk, akkor a képernyő jobb oldalán megjelenik egy sáv, ahol az általad kiválasztott termékek jelennek meg és módosítási lehetőséget kapsz, ahol a termék mennyiségét tudod választani űrlapelemen keresztül, illetve e mellett egy kuka ikonnal el tudod távolítani a kosaradból. 
-	**Az árusító weblapokon**, mint például a **„Társas játékok, Elektronikus játékok, Műanyag játékok, Fegyverek - Fegyverek, Ruha, Kiegészítők, Töltények”** oldalak elrendezése a következő lesz, az oldal tartalmi része két része lesz osztva az egyik maga a tartalom lesz baloldalon, ahol is a termékek lesznek felsorolva, egy sorba a rendelkezésre álló területet maximálisan feltöltő termék lesz található. Jobb oldalon, illetve a tartalom és a navbar között szűrőpanel lesz megtalálható.
-	**Szűrőpanel** -> A tartalom jobb oldalán található az ár alapján szűrő, ahol is egy double range és manuális beírás áll rendelkezésünkre a megfelelő ár határokat belőni, ez alatt egy rövid leírás van az adott termék kategóriáról, hogy mi is az a kategória és mire szolgál,ez alatt pedig a legkedveltebb termékek jelennek meg. A tartalom és a navbar között egy szűrő és rendező felület található, ez nem; korosztály; termékek rendezése a következő szempontok alapján: Alapértelmezett (Ahogy a javasciptben fel van töltve) Legolcsóbb (Ár alapján) Legdrágább (Ár alapján) A-Z (ABC sorrend név alapján) Z-A (ABC sorrend név alapján visszafelé)
-	**Rólunk** -> Található a fejlesztőkről egy-egy kép illetve rövid leírás.
-	**Lábléc** -> Balról jobbra haladva lesz egy hírlevélre feliratkozó lehetőség. Ez mellett található az Adatvédelem, ÁSZF és az Elérhetőség.
-	**Fizetés** -> Az oldalon a felhasználó által a kosárba rakott termékek lesznek felsorolva, és egy hosszabb, ismertető leírást láthat a termékről, valamint a termék árát, képét. A jobb oldalon lévő négyzetben pedig az X termék áráról, a szállítási költségről, és a végösszegről kap ismertetést a felhasználó. Kettő checkbox áll rendelkezésre, ahol kötelezően el kell fogadni az ászf -et, és egy opcionálisan elfogadható hírlevélre iratkozhat fel a felhasználó. A "Fizetés" gomb lenyomása a checkboxot alatt arra szolgál, hogy a felhasználó megadhatja szállítási (település, irányítószám, utca, házszám), illetve saját adatait (név, e-mail, telefonszám) valamint, hogy milyen módon szeretne fizetni. Ha minden adatot megadott a felhasználó, az "ok" gombra kattintva véglegesítheti rendelését.

### Színpaletták
Világos mód: https://colorhunt.co/palette/867070d5b4b4e4d0d0f5ebeb

Sötét mód: https://colorhunt.co/palette/49243e704264bb8493dbafa0 
