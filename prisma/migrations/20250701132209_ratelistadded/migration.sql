BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[DailyRateList] (
    [rate_id] NVARCHAR(1000) NOT NULL,
    [untcd] NVARCHAR(1000) NOT NULL CONSTRAINT [DailyRateList_untcd_df] DEFAULT '',
    [date] DATETIME2 NOT NULL,
    [bulkRate] INT NOT NULL,
    [consumerRate] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [DailyRateList_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [DailyRateList_untcd_date_key] UNIQUE NONCLUSTERED ([untcd],[date])
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
