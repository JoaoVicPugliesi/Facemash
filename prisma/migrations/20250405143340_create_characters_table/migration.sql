-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 1400,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "characters_picture_key" ON "characters"("picture");
