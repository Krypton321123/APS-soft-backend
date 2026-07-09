BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[SecondaryRate] (
    [rate_id] NVARCHAR(1000) NOT NULL,
    [depotCd] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryRate_depotCd_df] DEFAULT '',
    [depotNm] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryRate_depotNm_df] DEFAULT '',
    [partyType] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryRate_partyType_df] DEFAULT '',
    [empId] NVARCHAR(1000),
    [empName] NVARCHAR(1000),
    [partyId] NVARCHAR(1000) NOT NULL,
    [partyName] NVARCHAR(1000) NOT NULL,
    [mobile] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryRate_mobile_df] DEFAULT '',
    [consumerRate] DECIMAL(18,2) NOT NULL,
    [bulkRate] DECIMAL(18,2) NOT NULL,
    [rateDate] DATETIME2 NOT NULL,
    [sentBy] NVARCHAR(1000) NOT NULL,
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryRate_status_df] DEFAULT 'pending',
    [responseId] NVARCHAR(1000),
    [errorMsg] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SecondaryRate_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [SecondaryRate_pkey] PRIMARY KEY CLUSTERED ([rate_id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryRate_depotCd_rateDate_idx] ON [dbo].[SecondaryRate]([depotCd], [rateDate]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryRate_partyId_idx] ON [dbo].[SecondaryRate]([partyId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryRate_status_idx] ON [dbo].[SecondaryRate]([status]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
