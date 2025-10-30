/*
  Warnings:

  - Added the required column `cash` to the `DeliveryBillStatus` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[DeliveryBillStatus] DROP CONSTRAINT [DeliveryBillStatus_collection_id_fkey];

-- AlterTable
ALTER TABLE [dbo].[DeliveryBillStatus] ALTER COLUMN [collection_id] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[DeliveryBillStatus] ADD [cash] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[DeliveryBillStatus] ADD CONSTRAINT [DeliveryBillStatus_collection_id_fkey] FOREIGN KEY ([collection_id]) REFERENCES [dbo].[Collection]([collection_id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
