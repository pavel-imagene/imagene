/*
  Warnings:

  - Added the required column `title` to the `sample` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sample" ADD COLUMN     "title" TEXT NOT NULL;
