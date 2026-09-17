# Fotos

Jedes Foto ist in `lib/photos.ts` registriert — mit Herkunft und Lizenz. Bitte
keine Bilder direkt hier ablegen und im Code verlinken, sondern immer über den
Manifest-Eintrag und die `<Photo>`-Komponente einbinden. Nur so bleibt
nachvollziehbar, was wir verwenden dürfen.

## Aktueller Stand

| Datei | Motiv | Herkunft | Lizenz |
|---|---|---|---|
| `argus-wald-front-*` | ARGUS frontal auf einem Waldweg | Eigenes Material | Eigene Aufnahme, uneingeschränkt nutzbar |
| `argus-wald-seite-*` | ARGUS schräg auf Waldboden | Eigenes Material | Eigene Aufnahme, uneingeschränkt nutzbar |
| `wald-hero-*` | Nadelwald mit Bergkulisse (Hero) | Vom Team bereitgestellt | **ungeprüft** |
| `wald-erholung-*` | Wanderer im Laubwald | Vom Team bereitgestellt | **ungeprüft** |

> **Vor dem Livegang klären:** Für die beiden mit *ungeprüft* markierten Bilder
> ist nicht belegt, woher sie stammen und unter welcher Lizenz sie genutzt
> werden dürfen. Entweder Nachweis nachreichen (Quelle, Lizenz, ggf. nötiger
> Bildnachweis) oder ersetzen. `photosNeedingLicenceReview()` in
> `lib/photos.ts` gibt die betroffenen Einträge zurück.

Beim Foto mit den Wanderern kommt hinzu, dass Personen erkennbar sind. Ohne
Einwilligung der Abgebildeten ist das heikel — im Zweifel durch ein Motiv ohne
erkennbare Personen ersetzen.

## Neue Fotos hinzufügen

Varianten werden vorab erzeugt, damit die Seite statisch bleibt und keinen
Bild-Optimierer zur Laufzeit braucht:

```python
from PIL import Image
im = Image.open("original.jpg").convert("RGB")
ow, oh = im.size
for w in (800, 1200, 1600):
    if w > ow:
        continue
    im.resize((w, round(oh * w / ow)), Image.LANCZOS).save(
        f"public/images/photos/NAME-{w}.webp", "WEBP", quality=82, method=6
    )
```

Danach den Eintrag in `lib/photos.ts` ergänzen (Breiten, Originalmaße, Herkunft)
und den Alt-Text in `lib/i18n.ts` auf Deutsch **und** Englisch hinterlegen.

## Eigenes Material bevorzugen

Langfristiges Ziel laut Briefing ist möglichst viel eigenes Bildmaterial. Die
ARGUS-Aufnahmen sind bereits eigene Fotos — für die Waldmotive der Startseite
wären eigene Aufnahmen eines heimischen Misch- oder Laubwalds die bessere Lösung
als zugekaufte oder fremde Bilder.
