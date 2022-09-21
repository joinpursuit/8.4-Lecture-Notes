\c bookmarks_dev

INSERT INTO bookmarks (name, url, category, is_favorite) VALUES
('MDN', 'https://developer.mozilla.org/en-US/', 'educational', true),
('Apartment Therapy', 'https://www.apartmenttherapy.com', 'inspirational', true),
('DMV', 'https://dmv.ny.gov', 'adulting', true);


INSERT INTO reviews (bookmark_id, reviewer, title, content, rating)
VALUES
('1', 'Evan', 'My Favorite', 'This website crushes it when it comes to awesome explainations', 3),
('2', 'Evan', 'My Favorite', 'This website crushes it when it comes to inspiring me', 3),
('3', 'Evan', 'My Least Favorite', 'This website crushes it when it comes to destroying my patience', 5),
('2', 'Juliana', 'I Love Going Here', 'I finally learned how to properly fold a fitted sheet', 5),
('2', 'David', 'Cool Site', 'But I got way into adding decorative pillows everywhere', 1),
('2', 'Mr. Mingo', 'So Helpful', 'I got some awesome recommendations for a ceiling fan and some spoons', 3),
('2', 'Alison', 'A lifesaver!','Helped me get my stove cleaner than I ever imagiend possible!', 4),
('3', 'Hannah', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV!', 4),
('3', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);

INSERT INTO users (email, username, admin, verified)
VALUES
('person1@gmail.com','Evan', true, true),
('person2@gmail.com','Juliana', true, true),
('person3@gmail.com','David', false, true),
('person4@gmail.com','Mr. Mingo', false, true),
('person5@gmail.com','Alison', false, true),
('person6@gmail.com','Hannah', false, true),
('person7@gmail.com','Gabi', false, true);

INSERT INTO users_bookmarks( bookmark_id, user_id)
VALUES
(1,1),
(2,1),
(3,1),
(2,2),
(1,3),
(2,4),
(2,5),
(3,6),
(2,7);