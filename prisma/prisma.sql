CREATE TABLE "public"."User" (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
CREATE TABLE "public"."Post" (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
    body TEXT,
    "authorId" INTEGER NOT NULL,
    FOREIGN KEY ("authorId") REFERENCES "public"."User"(id)
);