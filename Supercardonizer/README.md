# Supercardonizer Luck Machine

## Lokale Entwicklung

Um die Anwendung lokal zu starten, führen Sie `npm install` und dann `npm run dev` aus.

## Deployment auf Render.com

Folgen Sie diesen Anweisungen, um die Anwendung erfolgreich auf Render.com zu deployen:

1.  Verbinden Sie Ihr GitHub-Repository mit einem neuen **Web Service** auf Render.
2.  Nehmen Sie in den Einstellungen die folgenden Konfigurationen vor:

    *   **Root Directory**: `src`
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm start`

3.  Speichern Sie die Einstellungen und starten Sie den Deploy.

Durch diese Konfiguration wird Render im `src`-Verzeichnis starten, die dortige `package.json` finden und das `postinstall`-Skript ausführen, das die Abhängigkeiten aus dem Hauptverzeichnis korrekt installiert.