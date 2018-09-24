DROP TABLE people;
DROP TABLE marriages;
DROP TABLE aliases;
DROP TABLE children;

CREATE TABLE people (id INT, name varchar(MAX), gender varchar(1));
CREATE TABLE marriages (id INT, personID INT, spouseID INT);
CREATE TABLE aliases (id INT, personID INT, alias varchar(MAX));
CREATE TABLE children (id INT, parentID INT, childID INT);

-- Populate the people table
INSERT INTO "PUBLIC"."PEOPLE" ("ID", "NAME", "GENDER") VALUES (1, 'Peter Parker', 'M');
INSERT INTO "PUBLIC"."PEOPLE" ("ID", "NAME", "GENDER") VALUES (2, 'Richard Parker', 'M');
INSERT INTO "PUBLIC"."PEOPLE" ("ID", "NAME", "GENDER") VALUES (3, 'Mary Parker', 'F');
INSERT INTO "PUBLIC"."PEOPLE" ("ID", "NAME", "GENDER") VALUES (4, 'Ben Parker', 'M');
INSERT INTO "PUBLIC"."PEOPLE" ("ID", "NAME", "GENDER") VALUES (5, 'May Parker', 'F');
INSERT INTO "PUBLIC"."PEOPLE" ("ID", "NAME", "GENDER") VALUES (6, 'Grandpa Parker', 'M');

-- Populate the marriages table
INSERT INTO "PUBLIC"."MARRIAGES" ("ID", "PERSONID", "SPOUSEID") VALUES (1, 2, 3);
INSERT INTO "PUBLIC"."MARRIAGES" ("ID", "PERSONID", "SPOUSEID") VALUES (2, 3, 2);
INSERT INTO "PUBLIC"."MARRIAGES" ("ID", "PERSONID", "SPOUSEID") VALUES (3, 4, 5);
INSERT INTO "PUBLIC"."MARRIAGES" ("ID", "PERSONID", "SPOUSEID") VALUES (4, 5, 4);

-- Populate the aliases table
INSERT INTO "PUBLIC"."ALIASES" ("ID", "PERSONID", "ALIAS") VALUES (1, 1, 'Spider-Man');
INSERT INTO "PUBLIC"."ALIASES" ("ID", "PERSONID", "ALIAS") VALUES (2, 1, 'Spidey');

-- Populate the children table
INSERT INTO "PUBLIC"."CHILDREN" ("ID", "PARENTID", "CHILDID") VALUES (1, 2, 1);
INSERT INTO "PUBLIC"."CHILDREN" ("ID", "PARENTID", "CHILDID") VALUES (2, 3, 1);
INSERT INTO "PUBLIC"."CHILDREN" ("ID", "PARENTID", "CHILDID") VALUES (3, 6, 2);
INSERT INTO "PUBLIC"."CHILDREN" ("ID", "PARENTID", "CHILDID") VALUES (4, 6, 4);

-- Example query
SELECT a.alias, p.name, parent, grandparent, aunt_uncle, aunt_uncle_spouse
from aliases as a
join people  as p on a.personID = p.id
join (
       select (select name from people as n where n.id = c1.childid ) as child
              , (select name from people as n where n.id = c1.parentid) as parent
              , (select name from people as n where n.id = c2.parentid) as grandparent
              , (select name from people as n where n.id = c3.childid ) as aunt_uncle
              , (select name from people as n where n.id = m.spouseid) as aunt_uncle_spouse
              , c1.childid  as childid
               , c1.parentid as parentid
              , c2.parentid as grandparentid
              , c3.childid  as aunt_uncleid
              , m.spouseid  as aunt_uncle_spouseid
       from children as c1 -- parents
       join children as c2 on c2.childID = c1.parentID -- grandparents
       join children as c3 on c3.parentID = c2.parentID -- siblings of parents
                              and c2.childID != c3.childID -- not parents
       left join marriages as m on c3.childid = m.personID -- spouses of siblings of parents
) as aunt_uncle on aunt_uncle.childid = p.id
where a.alias = 'Spidey'