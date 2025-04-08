/*
  Warnings:

  - You are about to drop the `characters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "characters";

-- CreateTable
CREATE TABLE "women" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 1400,

    CONSTRAINT "women_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "men" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 1400,

    CONSTRAINT "men_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "women_picture_key" ON "women"("picture");

-- CreateIndex
CREATE UNIQUE INDEX "men_picture_key" ON "men"("picture");
