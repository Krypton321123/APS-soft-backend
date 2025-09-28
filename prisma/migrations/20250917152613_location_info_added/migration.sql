BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[employeeRouteMap] (
    [route_id] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [empName] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [employeeRouteMap_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [employeeRouteMap_pkey] PRIMARY KEY CLUSTERED ([route_id])
);

-- CreateTable
CREATE TABLE [dbo].[latLongitudeValues] (
    [latlong_id] NVARCHAR(1000) NOT NULL,
    [route_id] NVARCHAR(1000) NOT NULL,
    [lat_value] NVARCHAR(1000) NOT NULL,
    [long_value] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [latLongitudeValues_pkey] PRIMARY KEY CLUSTERED ([latlong_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[latLongitudeValues] ADD CONSTRAINT [latLongitudeValues_route_id_fkey] FOREIGN KEY ([route_id]) REFERENCES [dbo].[employeeRouteMap]([route_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
