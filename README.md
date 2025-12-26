# English–Persian Word Database (Academic Batch)

This project provides an open-source bilingual dictionary of English–Persian academic vocabulary in **JSON format**.  
It aims to support learners, translators, developers, and language model builders working with Persian (Farsi) data.

---

## 📘 Overview

Each entry in the JSON file includes:
- **translation** — Persian equivalent (in Persian script)
- **pos** — Part of speech (noun, verb, adjective, etc.)
- **pronunciation** — Romanized Farsi for easier reading
- **example_en** — Example sentence in English
- **example_fa** — Example sentence in Persian
- **synonyms** — Related words
- **frequency** — How common the word is in typical academic usage (1–5 scale)

### Example Entry
"university": {
"translation": "دانشگاه",
"pos": "noun",
"pronunciation": "daaneshgaah",
"example_en": "She studies at the university.",
"example_fa": "او در دانشگاه درس می‌خواند.",
"synonyms": ["college", "institution"],
"frequency": 4
}


---

## 🧠 Frequency Scale

| Value | Description | Examples |
|--------|--------------|-----------|
| **5** | Very common academic/core word | exam, student, research |
| **4** | Common; discipline-wide vocabulary | university, professor |
| **3** | Specific to academic settings | thesis, conference |
| **2** | Specialized or technical | algorithm, experiment |
| **1** | Rare or advanced academic term | epistemology, morphology |

---

## 🗂️ File Structure
│
├── academic-batch.json # Core bilingual dataset
├── README.md # Project description and usage guide
