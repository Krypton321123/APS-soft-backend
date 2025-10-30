BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[LocationNames] (
    [location_id] NVARCHAR(1000) NOT NULL,
    [locationName] NVARCHAR(1000) NOT NULL,
    [locationCode] NVARCHAR(1000) NOT NULL,
    [cityName] NVARCHAR(1000) NOT NULL,
    [stateName] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [LocationNames_pkey] PRIMARY KEY CLUSTERED ([location_id])
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
