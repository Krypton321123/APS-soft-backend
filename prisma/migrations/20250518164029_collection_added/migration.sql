/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `partyImages` table. All the data in the column will be lost.
  - Added the required column `profileImageUrl` to the `partyImages` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[partyImages] DROP COLUMN [imageUrl];
ALTER TABLE [dbo].[partyImages] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [partyImages_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[imageUrl2] NVARCHAR(1000),
[imageUrl3] NVARCHAR(1000),
[profileImageUrl] NVARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[Collection] (
    [collection_id] NVARCHAR(1000) NOT NULL,
    [partyId] NVARCHAR(1000) NOT NULL,
    [partyName] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [amount] DECIMAL(18,2) NOT NULL,
    [paymentMethod] NVARCHAR(1000) NOT NULL,
    [chequeNumber] NVARCHAR(1000),
    [chequeDate] NVARCHAR(1000),
    [bankName] NVARCHAR(1000),
    [upiId] NVARCHAR(1000),
    [transactionId] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Collection_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Collection_pkey] PRIMARY KEY CLUSTERED ([collection_id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
