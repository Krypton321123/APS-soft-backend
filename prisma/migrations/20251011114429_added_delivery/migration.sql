BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[DeliveryBillStatus] (
    [bill_id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [billNo] NVARCHAR(1000) NOT NULL,
    [otp] NVARCHAR(1000) NOT NULL,
    [collection_id] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [DeliveryBillStatus_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [DeliveryBillStatus_pkey] PRIMARY KEY CLUSTERED ([bill_id]),
    CONSTRAINT [DeliveryBillStatus_collection_id_key] UNIQUE NONCLUSTERED ([collection_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[DeliveryBillStatus] ADD CONSTRAINT [DeliveryBillStatus_collection_id_fkey] FOREIGN KEY ([collection_id]) REFERENCES [dbo].[Collection]([collection_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
