# JS Forms

## Events

### Event Bubbling

- Events werden im DOM Tree "hochgereicht", d.h. alle Elternelemente eines Elements bekommen das Event auch geschickt
- Man kann das Event Bubbling mit dem Befehl `event.stopPropagation()` unterbrechen

### Event Delegation

- Man kann Events für mehrere Elemente an einer höheren Stelle im DOM Tree behandeln, das jeweils auslösende Element erhalten wir übder den Parameter `event.target`

## Forms - ohne JS

- Das `action` - Attribut einer Form bestimmt, an welche URL die Formdaten geschickt werden sollen
- Ein `button` innerhalb einer Form löst automatisch den `submit` aus, d.h. die Form schickt ihre Werte an die angegebene URL
- Die `name` - Attribute der `input` - Elemente bestimmen, wie die Daten an den Server geschickt werden:
  ```
  <form action="/register">
     <input type="text" name"first-name"/>
     <input type="text" name"last-name"/>
     <button>Abschicken</button>
  </form>
  ```
  ergibt z.B. folgenden Aufruf: `.../register?first-name=Ralf&last-name=Siewert`

## Neuer `input` Type: "radio"

- Radiobuttons werden zu Gruppen zusammengefasst, indem man allen zusammengehörigen Inputs den gleichen Namen gibt:
  ```
   <input type="radio" value="option-1" name="group-1"/>
   <input type="radio" value="option-2" name="group-1"/>
  ```

## Formulardaten mittels JavaScript auslesen

- Reagiert auf den `submit` Event-Handler der Form. (**WICHTIG**: Nicht den Button verwenden)
- Verhindert zunächst den Standard-Flow (Verschicken der Daten an die URL in `action`), indem ihr `event.preventDefault()` aufruft
- Auf die einzelnen Inputs greift ihr mittels `form.<INPUT_NAME>.value` zu, z.B. `const email = form.email.value;`
- Ausnahme: Bei einer Checkbox steht der Wert in der Property `checked` (true/false)
- Mittels `form.reset()` setzt ihr ein Formular auf seine Anfangswerte zurück
