BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Stock] (
    [stock_id] NVARCHAR(1000) NOT NULL,
    [partyId] NVARCHAR(1000) NOT NULL,
    [partyName] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Stock_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Stock_pkey] PRIMARY KEY CLUSTERED ([stock_id])
);

-- CreateTable
CREATE TABLE [dbo].[StockItem] (
    [id] NVARCHAR(1000) NOT NULL,
    [stockId] NVARCHAR(1000) NOT NULL,
    [itemCode] NVARCHAR(1000) NOT NULL,
    [itemName] NVARCHAR(1000) NOT NULL,
    [quantity] INT NOT NULL,
    CONSTRAINT [StockItem_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[StockItem] ADD CONSTRAINT [StockItem_stockId_fkey] FOREIGN KEY ([stockId]) REFERENCES [dbo].[Stock]([stock_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
