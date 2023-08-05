CREATE DATABASE glpk;
CREATE USER glpk@localhost IDENTIFIED BY 'gnu';
GRANT ALL PRIVILEGES ON glpk.* TO glpk@localhost;
USE glpk;
DROP TABLE sudoku;
CREATE TABLE sudoku (
  ID   INT ,
  COL  INT ,
  LIN  INT ,
  VAL  INT ,
  PRIMARY KEY ( ID, COL, LIN )
  );
DROP TABLE sudoku_solution;
CREATE TABLE sudoku_solution (
  ID   INT ,
  COL  INT ,
  LIN  INT ,
  VAL  INT ,
  PRIMARY KEY ( ID, COL, LIN )
  );
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 1, 5);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 3, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 5, 4);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 7, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 1, 9, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 1, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 3, 3);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 7, 6);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 8, 2);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 2, 9, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 1, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 3, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 6, 9);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 7, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 3, 9, 4);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 1, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 3, 6);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 6, 7);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 7, 2);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 4, 9, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 1, 8);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 2, 1);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 3, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 7, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 8, 4);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 5, 9, 3);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 1, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 3, 9);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 4, 1);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 7, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 6, 9, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 1, 7);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 3, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 4, 5);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 7, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 7, 9, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 1, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 2, 9);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 3, 2);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 5, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 7, 8);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 8, 9, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 1, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 2, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 3, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 4, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 5, 3);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 6, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 7, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 8, 0);
INSERT INTO sudoku (ID, COL, LIN, VAL) VALUES (1, 9, 9, 6);
