# 🐦 AvianAcoustics Archive

> **Quantifying the Ecological Cost of Human Expansion**
>
> An open-source citizen science database measuring how urban architecture reshapes birdsong — comparing vertical (Hangzhou) vs. horizontal (Washington DC) acoustic environments.

## 🎯 What This Is

A cross-city field study that treats urban birdsong adaptation as a **quantifiable proxy for ecological disruption**. By measuring two key vocal parameters — **minimum frequency (Hz)** and **inter-syllable interval (ms)** — across contrasting urban morphologies, we test the hypothesis that:

- **Vertical cities** (high-rise canyons) induce **temporal adaptation** — birds widen syllable gaps to avoid reverberant overlap
- **Horizontal cities** (sprawling traffic corridors) induce **spectral adaptation** — birds raise pitch to overcome broadband ground-level noise

## 📊 Dataset

| Recording | City | Group | Min Freq (Hz) | ISI (ms) | Ambient (dB) |
|-----------|------|-------|---------------|----------|---------------|
| HZ-001 | Hangzhou 杭州 | Vertical Reverb | 2,847 | 312 | 62.3 |
| HZ-002 | Hangzhou 杭州 | Vertical Reverb | 2,962 | 287 | 58.7 |
| DC-001 | Washington DC | Horizontal Noise | 3,614 | 198 | 67.1 |
| DC-002 | Washington DC | Horizontal Noise | 3,891 | 176 | 71.2 |

## 🛠 Tech Stack

- **Frontend**: HTML5 + [Tailwind CSS v4](https://tailwindcss.com/) (CDN) + Vanilla JavaScript
- **Hosting**: [GitHub Pages](https://pages.github.com/) (zero-cost, open-source-native)
- **Analysis**: [Cornell Raven Pro 1.6](https://ravensoundsoftware.com/)
- **Recording**: Zoom H5 + SGH-6 Shotgun Capsule

## 📁 Project Structure

```
AvianAcoustics/
├── index.html              ← Main single-page site
├── style.css               ← Custom animations & styles
├── script.js               ← Interactive logic
├── data/
│   └── recordings.json     ← Structured recording metadata
├── assets/
│   ├── spectrograms/       ← Raven Pro spectrogram exports
│   └── audio/              ← WAV field recordings
└── README.md               ← This file
```

## 🚀 How to Add New Recordings (5-Minute SOP)

1. **Record** — Capture WAV audio in the field. Note GPS, ambient dB, time, and species.
2. **Analyze** — Import into Raven Pro. Generate spectrogram. Measure min frequency (Hz) and inter-syllable interval (ms).
3. **Export** — Save spectrogram screenshot → `assets/spectrograms/`. Save WAV clip → `assets/audio/`.
4. **Update HTML** — Open `index.html`. Find the `<!-- TEMPLATE -->` comment. Copy an existing data card block and replace the values (location, date, dB, Hz, ms, file paths).
5. **Publish** — Open GitHub Desktop → Commit → Push. The site updates globally within minutes.

## 📜 License

**Data & Content**: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — Free for non-commercial academic use with attribution.

**Code**: [MIT License](https://opensource.org/licenses/MIT)

---

*Built with ♥ for Open Science*
