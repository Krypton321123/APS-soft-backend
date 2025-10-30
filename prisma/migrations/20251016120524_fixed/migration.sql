/*
  Warnings:

  - You are about to drop the column `collection_id` on the `DeliveryBillStatus` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[DeliveryBillStatus] DROP CONSTRAINT [DeliveryBillStatus_collection_id_fkey];

-- DropIndex
ALTER TABLE [dbo].[DeliveryBillStatus] DROP CONSTRAINT [DeliveryBillStatus_collection_id_key];

-- AlterTable
ALTER TABLE [dbo].[DeliveryBillStatus] DROP COLUMN [collection_id];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
