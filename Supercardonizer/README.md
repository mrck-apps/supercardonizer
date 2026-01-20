# Supercardonizer Luck Machine

## Deployment auf Vercel (Wichtige Korrektur)

Die vorherigen Konfigurationen, die wir für einen anderen Dienst versucht haben, sind die alleinige Ursache für die aktuellen Fehler auf Vercel.

**Die Lösung besteht darin, eine einzige Einstellung in Vercel zu korrigieren.**

### Vercel Projekt-Einstellungen

1.  Gehen Sie zu Ihrem Projekt auf Vercel.
2.  Öffnen Sie die **Project Settings**.
3.  Wählen Sie den Reiter **General**.
4.  Finden Sie die Einstellung **Root Directory**.
5.  **Stellen Sie sicher, dass dieses Feld komplett leer ist.** Wenn dort `src` oder etwas anderes steht, löschen Sie es. Die Standardeinstellung (leer) ist korrekt.

Vercel erkennt Ihr Next.js-Projekt dann automatisch im Hauptverzeichnis, wo die richtige `package.json` liegt.

Nachdem Sie diese Einstellung gespeichert haben, starten Sie das Deployment neu ("Redeploy"). Das wird den Fehler beheben.

## Lokale Entwicklung

Um die Anwendung lokal zu starten, führen Sie `npm install` und dann `npm run dev` aus.
