BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[PartyLocation] (
    [location_id] NVARCHAR(1000) NOT NULL,
    [partyId] VARCHAR(250) NOT NULL,
    [latitude] FLOAT(53) NOT NULL,
    [longitude] FLOAT(53) NOT NULL,
    [accuracy] FLOAT(53),
    [setBy] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [PartyLocation_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [PartyLocation_pkey] PRIMARY KEY CLUSTERED ([location_id]),
    CONSTRAINT [PartyLocation_partyId_key] UNIQUE NONCLUSTERED ([partyId])
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
