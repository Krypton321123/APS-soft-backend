/*
  Warnings:

  - A unique constraint covering the columns `[empId,date]` on the table `employeeRouteMap` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `employeeRouteMap` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[employeeRouteMap] ADD [date] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[employeeRouteMap] ADD CONSTRAINT [employeeRouteMap_empId_date_key] UNIQUE NONCLUSTERED ([empId], [date]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
