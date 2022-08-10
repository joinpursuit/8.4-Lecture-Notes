DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

\c bookmarks_dev;

CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    category TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviewer TEXT,
    content TEXT,
    title TEXT,
    rating INTEGER,
    CHECK (rating >= 0 AND rating <= 5),
    bookmark_id INTEGER REFERENCES bookmarks (id)
    ON DELETE CASCADE
);
