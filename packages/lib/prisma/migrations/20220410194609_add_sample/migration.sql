/*
  Warnings:

  - The primary key for the `dataset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `dataset` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `dataset` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `dataset` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `dataset` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "dataset" DROP CONSTRAINT "dataset_authorId_fkey";

-- AlterTable
ALTER TABLE "dataset" DROP CONSTRAINT "dataset_pkey",
DROP COLUMN "authorId",
DROP COLUMN "content",
DROP COLUMN "id",
DROP COLUMN "published",
ADD COLUMN     "dataset_id" SERIAL NOT NULL,
ADD COLUMN     "user_id" INTEGER,
ADD CONSTRAINT "dataset_pkey" PRIMARY KEY ("dataset_id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
DROP COLUMN "id",
ADD COLUMN     "user_id" SERIAL NOT NULL,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("user_id");

-- CreateTable
CREATE TABLE "sample" (
    "sample_id" SERIAL NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "clinical_data" JSONB,
    "dataset_id" INTEGER,

    CONSTRAINT "sample_pkey" PRIMARY KEY ("sample_id")
);

-- AddForeignKey
ALTER TABLE "dataset" ADD CONSTRAINT "dataset_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sample" ADD CONSTRAINT "sample_dataset_id_fkey" FOREIGN KEY ("dataset_id") REFERENCES "dataset"("dataset_id") ON DELETE SET NULL ON UPDATE CASCADE;
