const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database/university.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to university.db');
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      courseCode TEXT NOT NULL,
      title TEXT NOT NULL,
      credits INTEGER,
      description TEXT,
      semester TEXT
    )
  `, (err) => {
    if (err) console.error(err.message);
    else console.log('Courses table created successfully.');
  });
});

db.close();
