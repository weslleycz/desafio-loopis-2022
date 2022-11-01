/*
  Warnings:

  - Added the required column `hour` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dayId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    CONSTRAINT "Tasks_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Days" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tasks" ("dayId", "description", "id", "name") SELECT "dayId", "description", "id", "name" FROM "Tasks";
DROP TABLE "Tasks";
ALTER TABLE "new_Tasks" RENAME TO "Tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
