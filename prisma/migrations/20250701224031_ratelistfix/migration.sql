BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[DailyRateList] ADD CONSTRAINT [DailyRateList_bulkRate_df] DEFAULT 0 FOR [bulkRate], CONSTRAINT [DailyRateList_consumerRate_df] DEFAULT 0 FOR [consumerRate];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
