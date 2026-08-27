# Sorgenti dei documenti generati

Qui stanno gli HTML da cui nascono alcuni PDF di `public/documents/`.
Gli altri documenti del sito arrivano già in PDF da chi li redige e non hanno un sorgente qui.

| sorgente | PDF prodotto |
|---|---|
| `quote-2026-2027.html` | `public/documents/subscriptions/quote-2026-2027.pdf` |
| `dati-bonus-nido.html` | `public/documents/subscriptions/dati-bonus-nido.pdf` |

Lo stile comune è in `documento.css` e riprende i colori di `app/_variables.scss`.

## Rigenerare un PDF

Serve WeasyPrint (`pipx install weasyprint` oppure `pip install weasyprint`):

```bash
weasyprint documents-src/quote-2026-2027.html public/documents/subscriptions/quote-2026-2027.pdf
```

I comandi vanno lanciati dalla radice del repository, così i percorsi relativi al logo restano validi.

## Quando aggiornare

Le quote cambiano ogni anno insieme al regolamento: la fonte è l'articolo 17,
da cui arrivano anche le riduzioni e la scadenza del 10 del mese.
Cambiando anno vanno aggiornati il titolo, gli importi e la data di revisione citata in fondo,
poi si rigenera il PDF e si cambia l'etichetta in `app/modulistica/page.tsx`.

L'IBAN invece non sta nel regolamento: è quello stampato a pagina 1 del modulo di iscrizione,
dove però è indicato per la quota di iscrizione. Prima di aggiornarlo conviene farselo confermare
dalla segreteria.
