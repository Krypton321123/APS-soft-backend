/*
  Warnings:

  - Added the required column `bulkRate` to the `RejectedOrders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumerRate` to the `RejectedOrders` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[RejectedOrders] ADD [bulkRate] DECIMAL(18,2) NOT NULL,
[consumerRate] DECIMAL(18,2) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
