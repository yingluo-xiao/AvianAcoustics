# AvianAcoustics Archive

**Quantifying the Ecological Cost of Human Expansion**

An open-source citizen science acoustic database comparing avian vocal adaptation in varying urban environments. This repository serves as the public data archive for raw audio recordings, spectrograms, and associated ecological metadata.

🌍 **Live Database Viewer**: [https://yingluo-xiao.github.io/AvianAcoustics](https://yingluo-xiao.github.io/AvianAcoustics)

---

## 📊 Core Hypothesis

Urban development induces measurable behavioral displacement in avian populations:
- **Vertical Cities (e.g., Hangzhou)** induce temporal adaptation (extended inter-syllable pauses to avoid reverberant overlap in urban canyons).
- **Horizontal Cities (e.g., Washington DC)** induce spectral adaptation (raised minimum frequency to overcome broadband ground-level traffic noise).

These acoustic adaptations serve as a quantifiable proxy for ecological disruption—a biological externality that current ESG (Environmental, Social, and Governance) frameworks often fail to capture.

## 📂 Repository Structure

This repository houses the raw data collected during field observations. 

```text
AvianAcoustics/
├── assets/
│   ├── audio/           # Uncompressed raw WAV recordings (.wav)
│   └── spectrograms/    # Generated 512-point FFT spectrograms (.png)
├── data/
│   └── recordings.json  # Structured metadata (Location, Date, Min Freq, ISI, Ambient Noise)
└── index.html           # Static frontend for the Database Viewer
```

*Note: While the lightweight HTML frontend is included here for ease of access and GitHub Pages hosting, the primary purpose of this repository is the open distribution of the acoustic data.*

## 🔬 Field Protocol & Methodology

1. **Capture**: Audio is captured at dawn (05:30–07:00 local time) using a Zoom H5 Handy Recorder equipped with a Zoom SGH-6 Shotgun Capsule. Ambient noise (dB) is measured using a calibrated NIOSH SLM application.
2. **Preprocessing**: Levels are normalized in Audacity. A high-pass filter is applied at 500 Hz to isolate the avian vocal range and remove low-frequency mechanical rumble.
3. **Analysis**: Processed audio is imported into Cornell Lab's Raven Pro 1.6. Spectrograms are generated using a Hann window with a 512-point FFT.
4. **Extraction**: Minimum frequency (Hz) and Inter-Syllable Intervals (ISI, ms) are manually measured via selection tables.

## 📄 License and Usage

We believe in open science and the democratization of ecological data. 

- **Acoustic Data & Images**: All WAV files and spectrogram images in the `assets/` directory are released under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/) license. You are free to use this data for academic and non-commercial research provided proper attribution is given.
- **Source Code**: The frontend visualization code (HTML/CSS/JS) is released under the [MIT License](https://opensource.org/licenses/MIT).

---
*A Citizen Science Initiative — Exploring the intersection of Urban Planning, ESG, and Bioacoustics.*
