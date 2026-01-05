{/* 
    Node.js script to geenrate a .db file:

- Create a SQLite database (sqlite format 3)
- Insert 40 sample words (you can expand later)
- Save it as german-persiandictionary.db


HOW TO RUN IT:

Install Node.js if you don’t have it.
Install SQLite package: npm install sqlite3

Run the script: node generate-dictionary.js

Output: german-persian-dictionary.db in the same folder — SQLite format 3
    
    */}

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// ----- CONFIG -----
const DB_FILE = 'german-persian-dictionary.db';

// Delete existing DB if exists
if (fs.existsSync(DB_FILE)) {
    fs.unlinkSync(DB_FILE);
}

// Open new DB
const db = new sqlite3.Database(DB_FILE);

// ----- SCHEMA -----
db.serialize(() => {
    db.run(`CREATE TABLE words (
        wort TEXT PRIMARY KEY,
        uebersetzung TEXT,
        id TEXT,
        lautschrift TEXT,
        wortart TEXT,
        haeufigkeit INTEGER,
        definitionDeutsch TEXT,
        definitionPersisch TEXT,
        beispielDeutsch TEXT,
        beispielPersisch TEXT,
        synonyme TEXT
    )`);

    // ----- SAMPLE WORDS -----
    const baseWord = {
        uebersetzung: "دانشگاه",
        lautschrift: "daaneshgaah",
        wortart: "Nomen",
        haeufigkeit: 4,
        definitionDeutsch: "In mehrere Fachbereiche gegliederte [die Gesamtheit der Wissenschaften umfassende] Anstalt für wissenschaftliche Ausbildung und Forschung; Hochschule",
        definitionPersisch: "«دانشگاه» مؤسسه آموزش عالی است که در آن آموزش پیشرفته و پژوهش انجام می‌شود و مدارک دانشگاهی اعطا می‌گردد.",
        beispielDeutsch: "Sie studiert an der Universität.",
        beispielPersisch: "او در دانشگاه درس می‌خواند.",
        synonyme: ["Hochschule", "Institution"]
    };

    // Insert 40 words
    for (let i = 1; i <= 40; i++) {
        const wort = `universitaet_${i}`;
        const stmt = db.prepare(`INSERT INTO words 
            (wort, uebersetzung, id, lautschrift, wortart, haeufigkeit, definitionDeutsch, definitionPersisch, beispielDeutsch, beispielPersisch, synonyme)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

        stmt.run(
            wort,
            baseWord.uebersetzung,
            i.toString(),
            baseWord.lautschrift,
            baseWord.wortart,
            baseWord.haeufigkeit,
            baseWord.definitionDeutsch,
            baseWord.definitionPersisch,
            baseWord.beispielDeutsch,
            baseWord.beispielPersisch,
            JSON.stringify(baseWord.synonyme)
        );

        stmt.finalize();
    }

    console.log("SQLite database 'dictionary.db' created with 40 words!");
});

db.close();
