BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[partyImages] DROP CONSTRAINT [partyImages_userId_fkey];

-- AlterTable
ALTER TABLE [dbo].[partyImages] ALTER COLUMN [userId] NVARCHAR(1000) NULL;

-- AddForeignKey
ALTER TABLE [dbo].[partyImages] ADD CONSTRAINT [partyImages_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([username]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
