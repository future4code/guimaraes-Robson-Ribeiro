
CREATE TABLE IF NOT EXISTS UserCookenu (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);


CREATE TABLE IF NOT EXISTS RecipeCookenu (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    data Date NOT NULL,
    idUser VARCHAR(64),
    FOREIGN KEY (idUserCookenu) REFERENCES UserCookenu(id)
);

CREATE TABLE IF NOT EXISTS FollowCookenu (
    id VARCHAR(64),
    idUser VARCHAR(64) NOT NULL,
    idUserFollow VARCHAR(64) NOT NULL,
    FOREIGN KEY (idUser) REFERENCES UserCookenu(id),
    FOREIGN KEY (idUserFollow) REFERENCES UserCookenu(id)
);

