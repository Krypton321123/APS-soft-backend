/*
  Warnings:

  - Added the required column `adminName` to the `RejectedOrders` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[RejectedOrders] ADD [adminName] NVARCHAR(1000) NOT NULL,
[remarks] NVARCHAR(1000) NOT NULL CONSTRAINT [RejectedOrders_remarks_df] DEFAULT '';

-- AddForeignKey
ALTER TABLE [dbo].[RejectedOrders] ADD CONSTRAINT [RejectedOrders_adminName_fkey] FOREIGN KEY ([adminName]) REFERENCES [dbo].[admin]([username]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
