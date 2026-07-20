/*
  Warnings:

  - Added the required column `source` to the `NewPartyOrder` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[NewPartyOrder] ADD [address] NVARCHAR(1000) NOT NULL CONSTRAINT [NewPartyOrder_address_df] DEFAULT '',
[gstNumber] NVARCHAR(1000),
[parentLedcd] NVARCHAR(1000),
[pincode] NVARCHAR(1000) NOT NULL CONSTRAINT [NewPartyOrder_pincode_df] DEFAULT '',
[source] NVARCHAR(1000) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
