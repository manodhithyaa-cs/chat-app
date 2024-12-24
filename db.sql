create database whatsapp_clone;
use whatsapp_clone;

create table users (
    id int not null,
    name varchar(255) not null,
    phno int not null,
    email varchar(255) not null,
    password varchar(255) not null,
    date_time datetime not null,
);

create table chats (
    msg_id int not null,
    from_id int not null,
    to_id int not null,
    message_type int not null, -- 0 -> text 1 -> image 2 -> video 3-> document
    text varchar(255),
    image_name varchar(255),
    video_name varchar(255),
    document_name varchar(255)
);
