bEGIN TRANSACTION;

INSERT into users (name, email, entries, joined ) values ('John', 'john@email.com', 5, '2018-01-12');
INSERT into login (hash, email) values ('hash', 'john@email.com');

COMMIT;