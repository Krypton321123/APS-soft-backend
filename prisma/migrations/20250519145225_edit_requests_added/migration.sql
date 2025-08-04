BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[PartyEditRequest] (
    [request_id] NVARCHAR(1000) NOT NULL,
    [partyId] NVARCHAR(1000) NOT NULL,
    [partyName] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [updatedName] NVARCHAR(1000),
    [updatedAddress] NVARCHAR(1000),
    [updatedContactPerson] NVARCHAR(1000),
    [updatedMobileNumber] NVARCHAR(1000),
    [updatedEmailId] NVARCHAR(1000),
    [shopImage1] NVARCHAR(1000),
    [shopImage2] NVARCHAR(1000),
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [PartyEditRequest_status_df] DEFAULT 'pending',
    [adminComment] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [PartyEditRequest_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [PartyEditRequest_pkey] PRIMARY KEY CLUSTERED ([request_id])
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
