-- CreateTable
CREATE TABLE "species2" (
    "id" SERIAL NOT NULL,
    "specie" TEXT NOT NULL,
    "phylum" TEXT NOT NULL,
    "kingdom" TEXT NOT NULL,

    CONSTRAINT "species2_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "species2_specie_key" ON "species2"("specie");
