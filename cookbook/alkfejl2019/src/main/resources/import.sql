INSERT INTO USER (id, username, password, email, role, enabled) VALUES (0, 'Admin', '$2a$04$pHM5ieJ/LXEV0zXg6IPeze9OQC.yGenCYuoQ6huqkoJaiki0eyabS', 'example0.com', 'ROLE_ADMIN', true);
INSERT INTO USER (id, username, password, email, role, enabled) VALUES (1, 'User01', '$2a$04$oAypge2qHD.Fi61EftOSg.ayMHUDmsufBljz1V8DAsVJsm93Qhieq', 'example1.com', 'ROLE_USER', true);
INSERT INTO USER (id, username, password, email, role, enabled) VALUES (2, 'User02', '$2a$04$oAypge2qHD.Fi61EftOSg.ayMHUDmsufBljz1V8DAsVJsm93Qhieq', 'example2.com', 'ROLE_USER', true);
INSERT INTO USER (id, username, password, email, role, enabled) VALUES (3, 'User03', '$2a$04$oAypge2qHD.Fi61EftOSg.ayMHUDmsufBljz1V8DAsVJsm93Qhieq', 'example3.com', 'ROLE_USER', true);
INSERT INTO USER (id, username, password, email, role, enabled) VALUES (4, 'User04', '$2a$04$oAypge2qHD.Fi61EftOSg.ayMHUDmsufBljz1V8DAsVJsm93Qhieq', 'example4.com', 'ROLE_USER', true);

insert into issue (title, ingredients, description, author, status, created_at, updated_at) values ('Cake with cocoa-cream', '6 eggs, 6 heaps of sugar,6 heaps of flour,Lemon peel obtained from 0.25 lemon,2 tbsp sugar, 1 pack of vanilla sugar, 5 gl milk, 20 dkg butter, 20 dkg powdered sugar, 2 tbsp unsweetened cocoa powder', 'description1', 'Admin', 'ADMIN', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (title, ingredients, description, author, status, created_at, updated_at) values ('pulled pork', 'hozzavalok1', 'description2', 'Admin', 'ADMIN', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (title, ingredients, description, author, status, created_at, updated_at) values ('soup1', 'hozzavalok1', 'description3', 'Admin', 'ADMIN', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (title, ingredients, description, author, status, created_at, updated_at) values ('beef1 mince', 'hozzavalok1', 'description4', 'Admin', 'ADMIN', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into message (issue_id, text, created_at, updated_at) values (1, 'message1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (2, 'message2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (3, 'message3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (3, 'message4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into label (text, created_at, updated_at) values ('label1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into issue_labels (issues_id, labels_id) values (1, 1);
insert into issue_labels (issues_id, labels_id) values (1, 2);
insert into issue_labels (issues_id, labels_id) values (1, 4);
insert into issue_labels (issues_id, labels_id) values (2, 1);
insert into issue_labels (issues_id, labels_id) values (2, 2);
insert into issue_labels (issues_id, labels_id) values (3, 2);

---tiw
