/*
  Warnings:

  - Added the required column `adminName` to the `AcceptedOrders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bulkRate` to the `AcceptedOrders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `consumerRate` to the `AcceptedOrders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `AcceptedOrders` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[AcceptedOrders] ADD [AcceptedAt] DATETIME2,
[adminName] NVARCHAR(1000) NOT NULL,
[bulkRate] DECIMAL(18,2) NOT NULL,
[consumerRate] DECIMAL(18,2) NOT NULL,
[remarks] NVARCHAR(1000) NOT NULL CONSTRAINT [AcceptedOrders_remarks_df] DEFAULT '',
[status] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[AcceptedOrders] ADD CONSTRAINT [AcceptedOrders_adminName_fkey] FOREIGN KEY ([adminName]) REFERENCES [dbo].[admin]([username]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
