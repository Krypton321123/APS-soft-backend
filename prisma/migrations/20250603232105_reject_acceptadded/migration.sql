BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[AcceptedOrders] (
    [accept_id] NVARCHAR(1000) NOT NULL,
    [order_id] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [AcceptedOrders_pkey] PRIMARY KEY CLUSTERED ([accept_id]),
    CONSTRAINT [AcceptedOrders_order_id_key] UNIQUE NONCLUSTERED ([order_id])
);

-- CreateTable
CREATE TABLE [dbo].[RejectedOrders] (
    [reject_id] NVARCHAR(1000) NOT NULL,
    [order_id] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [RejectedOrders_pkey] PRIMARY KEY CLUSTERED ([reject_id]),
    CONSTRAINT [RejectedOrders_order_id_key] UNIQUE NONCLUSTERED ([order_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[AcceptedOrders] ADD CONSTRAINT [AcceptedOrders_order_id_fkey] FOREIGN KEY ([order_id]) REFERENCES [dbo].[Order]([order_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[RejectedOrders] ADD CONSTRAINT [RejectedOrders_order_id_fkey] FOREIGN KEY ([order_id]) REFERENCES [dbo].[Order]([order_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
