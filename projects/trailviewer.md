---
layout: page
title: trailviewer
description: Eine selbst entwickelte interaktive Karten-App für Wandertouren — gebaut mit Python, Leaflet und Mapbox.
permalink: /projects/trailviewer/
---

<div class="showcase-hero">
  <div class="showcase-badge">✦ Eigenprojekt</div>
  <h1>trail<span>viewer</span></h1>
  <p>Eine interaktive Karten-App für Wandertouren — entwickelt mit Python/Flask, Leaflet.js und Mapbox. GPX-Dateien laden, Touren annotieren, als HTML-Seite teilen.</p>
</div>

<div class="screenshot-wrap">
  <img src="/images/trailviewer-screenshot.jpeg" alt="trailviewer App Screenshot">
  <div class="screenshot-caption">trailviewer — Berge-Seen Trail Juni 2026, Salzkammergut</div>
</div>

## Was ist trailviewer?

trailviewer ist eine persönliche Webanwendung die ich gemeinsam mit [Claude](https://claude.ai) entwickelt habe, um meine Wandertouren schön zu visualisieren und mit Freunden zu teilen. Ausgangspunkt war die Frage: wie kann ich GPX-Dateien aus Strava in eine interaktive, ansprechende Karte verwandeln — ohne auf kommerzielle Tools angewiesen zu sein?

Das Ergebnis ist eine Flask-App die lokal läuft, GPX-Dateien parst, und daraus selbstständige HTML-Seiten generiert die direkt im Blog eingebettet werden können.

## Features

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-card-icon">🗺️</div>
    <h3>Mehrere Kartenansichten</h3>
    <p>OpenTopoMap, Satellit, und Mapbox 3D-Gelände mit echtem Terrain-Extrusion.</p>
  </div>
  <div class="feature-card">
    <div class="feature-card-icon">📍</div>
    <h3>Wegpunkte</h3>
    <p>Unterkünfte, Highlights und Hütten mit Icon, Name, Höhe und Beschreibung — per Klick auf die Karte oder via Koordinaten.</p>
  </div>
  <div class="feature-card">
    <div class="feature-card-icon">📈</div>
    <h3>Höhenprofil</h3>
    <p>Interaktives Höhenprofil mit Hover-Cursor, und Tempo-Profil aus Strava-Zeitdaten.</p>
  </div>
  <div class="feature-card">
    <div class="feature-card-icon">▶️</div>
    <h3>3D Playback</h3>
    <p>Strava-ähnlicher Flyover: die Kamera folgt der Route in 3D, mit Pause, Seek und 1×/2×/4× Geschwindigkeit.</p>
  </div>
  <div class="feature-card">
    <div class="feature-card-icon">📤</div>
    <h3>HTML Export</h3>
    <p>Vollständig selbstständige HTML-Datei, einbettbar per iframe in jeden Blogpost.</p>
  </div>
  <div class="feature-card">
    <div class="feature-card-icon">💾</div>
    <h3>Session speichern</h3>
    <p>Touren als .tvjson speichern und wieder laden — inkl. Wegpunkte, Farben, Label-Positionen.</p>
  </div>
</div>

## Wie es funktioniert

<div class="howto-steps">
  <div class="howto-step">
    <p><strong>GPX-Dateien laden</strong>Strava-Export oder andere GPX-Dateien direkt in die App laden. Mehrere Tracks gleichzeitig möglich, jeder bekommt automatisch eine Farbe.</p>
  </div>
  <div class="howto-step">
    <p><strong>Tour annotieren</strong>Wegpunkte setzen (per Klick, Ortssuche oder Koordinaten), Tracks umbenennen, Farben anpassen, Labels positionieren.</p>
  </div>
  <div class="howto-step">
    <p><strong>HTML exportieren</strong>Mit einem Klick wird eine vollständige, selbstständige HTML-Datei generiert — mit Etappen-Sidebar, Höhenprofil, 3D-Karte und Playback.</p>
  </div>
  <div class="howto-step">
    <p><strong>In den Blog einbetten</strong>Die HTML-Datei in <code>/assets/tours/</code> ablegen und per <code>&lt;iframe&gt;</code> in jeden Blogpost einbetten.</p>
  </div>
</div>

## Tech Stack

| Komponente | Technologie |
|---|---|
| Backend | Python / Flask |
| Karte | Leaflet.js |
| 3D / Playback | Mapbox GL JS |
| Höhendaten | Open Elevation API |
| Ortssuche | Nominatim (OpenStreetMap) |
| Export | Vanilla JS, html2canvas |

## Beispiel-Einbettung

Die erste Tour die ich damit visualisiert habe — der Berge-Seen Trail im Salzkammergut, Juni 2026:

→ [Berge-Seen Trail Juni 2026](/wandern/2026/06/08/salzkammergut-wanderung.html)

---

*Entwickelt im Juni 2026 gemeinsam mit Claude (Anthropic). Der vollständige Code liegt privat auf GitHub.*
