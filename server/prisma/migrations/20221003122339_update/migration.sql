-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "small" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "authorId" TEXT,
    CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Blog" ("authorId", "body", "createdAt", "id", "small", "title", "updateAt") SELECT "authorId", "body", "createdAt", "id", "small", "title", "updateAt" FROM "Blog";
DROP TABLE "Blog";
ALTER TABLE "new_Blog" RENAME TO "Blog";
CREATE UNIQUE INDEX "Blog_authorId_key" ON "Blog"("authorId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
