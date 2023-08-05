﻿# chistesESP-py
Script de Python que te permite obtener un chiste al azar de miles con un comando.

## Utilidad
```python
import chistesESP

chiste = get_random_chiste()
print(chiste)
```

## Documentación
La única función, **get_random_chiste()**, devuelve como string el texto de un div [en esta página](http://www.chistes.com/ChisteAlAzar.asp?n=3).

## Créditos
1. La página _chistes.com_ porque de ahí saco los chistes.
2. El módulo _BeautifulSoup_