CREATE TABLE "User" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deletedAt" TIMESTAMP,
  CONSTRAINT "User_name_check" CHECK (name <> ''),
  CONSTRAINT "User_email_check" CHECK (email <> '')
);


-- CREATE TABLE "Room" (
--   "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   "name" VARCHAR(255) NOT NULL,
--   "createdBy" UUID NOT NULL,
--   "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "deletedAt" TIMESTAMP,
--   CONSTRAINT "Room_name_check" CHECK (name <> ''),
--   CONSTRAINT "Room_createdBy_fk" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE CASCADE
-- );


-- CREATE TABLE "Message" (
--   "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   "description" TEXT NOT NULL,
--   "createdBy" UUID NOT NULL,
--   "roomId" UUID NOT NULL,
--   "isRead" BOOLEAN NOT NULL DEFAULT FALSE,
--   "fileUrl" VARCHAR(255),
--   "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   CONSTRAINT "Message_description_check" CHECK (description <> ''),
--   CONSTRAINT "Message_createdBy_fk" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE CASCADE,
--   CONSTRAINT "Message_roomId_fk" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE
-- );


-- CREATE TABLE "RoomUser" (
--   "roomId" UUID NOT NULL,
--   "userId" UUID NOT NULL,
--   CONSTRAINT "RoomUser_pk" PRIMARY KEY ("roomId", "userId"),
--   CONSTRAINT "RoomUser_roomId_fk" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE,
--   CONSTRAINT "RoomUser_userId_fk" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
-- );