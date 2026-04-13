BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Collection] ADD [verifiedBy] NVARCHAR(1000);

-- AddForeignKey
ALTER TABLE [dbo].[Collection] ADD CONSTRAINT [Collection_verifiedBy_fkey] FOREIGN KEY ([verifiedBy]) REFERENCES [dbo].[admin]([username]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
