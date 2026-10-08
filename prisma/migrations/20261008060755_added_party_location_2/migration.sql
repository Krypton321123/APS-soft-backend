BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[PartyLocation] ADD [reviewNote] NVARCHAR(1000),
[reviewedAt] DATETIME2,
[reviewedBy] NVARCHAR(1000),
[status] NVARCHAR(1000) NOT NULL CONSTRAINT [PartyLocation_status_df] DEFAULT 'pending',
[submittedAt] DATETIME2 NOT NULL CONSTRAINT [PartyLocation_submittedAt_df] DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE NONCLUSTERED INDEX [PartyLocation_status_submittedAt_idx] ON [dbo].[PartyLocation]([status], [submittedAt]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
