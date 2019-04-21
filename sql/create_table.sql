create table events (
    id SERIAL not null,
    type VARCHAR(255) not null,
    created_at DATE not null,
    data VARCHAR not null,
    primary key (id)
);


