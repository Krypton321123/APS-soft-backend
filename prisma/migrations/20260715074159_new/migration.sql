BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[SecondaryOrder] (
    [secondary_order_id] NVARCHAR(1000) NOT NULL,
    [vendId] NVARCHAR(1000) NOT NULL,
    [parentLedcd] NVARCHAR(1000) NOT NULL,
    [vendName] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [totalAmount] DECIMAL(18,2) NOT NULL,
    [discountAmount] DECIMAL(18,2) NOT NULL CONSTRAINT [SecondaryOrder_discountAmount_df] DEFAULT 0,
    [discountAmountBulk] DECIMAL(18,2) NOT NULL CONSTRAINT [SecondaryOrder_discountAmountBulk_df] DEFAULT 0,
    [paymentMode] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryOrder_paymentMode_df] DEFAULT '',
    [creditDays] INT,
    [consumerRate] DECIMAL(18,2),
    [bulkRate] DECIMAL(18,2),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SecondaryOrder_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [SecondaryOrder_pkey] PRIMARY KEY CLUSTERED ([secondary_order_id])
);

-- CreateTable
CREATE TABLE [dbo].[SecondaryOrderItem] (
    [id] NVARCHAR(1000) NOT NULL,
    [secondaryOrderId] NVARCHAR(1000) NOT NULL,
    [itemCode] NVARCHAR(1000) NOT NULL,
    [itemName] NVARCHAR(1000) NOT NULL,
    [quantity] INT NOT NULL,
    [rate] DECIMAL(18,2) NOT NULL,
    [amount] DECIMAL(18,2) NOT NULL,
    [packType] NVARCHAR(1000) NOT NULL CONSTRAINT [SecondaryOrderItem_packType_df] DEFAULT '',
    CONSTRAINT [SecondaryOrderItem_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SecondaryStock] (
    [secondary_stock_id] NVARCHAR(1000) NOT NULL,
    [vendId] NVARCHAR(1000) NOT NULL,
    [parentLedcd] NVARCHAR(1000) NOT NULL,
    [vendName] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SecondaryStock_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [SecondaryStock_pkey] PRIMARY KEY CLUSTERED ([secondary_stock_id])
);

-- CreateTable
CREATE TABLE [dbo].[SecondaryStockItem] (
    [id] NVARCHAR(1000) NOT NULL,
    [secondaryStockId] NVARCHAR(1000) NOT NULL,
    [itemCode] NVARCHAR(1000) NOT NULL,
    [itemName] NVARCHAR(1000) NOT NULL,
    [quantity] INT NOT NULL,
    CONSTRAINT [SecondaryStockItem_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryOrder_vendId_idx] ON [dbo].[SecondaryOrder]([vendId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryOrder_parentLedcd_idx] ON [dbo].[SecondaryOrder]([parentLedcd]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryOrder_empId_idx] ON [dbo].[SecondaryOrder]([empId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryStock_vendId_idx] ON [dbo].[SecondaryStock]([vendId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryStock_parentLedcd_idx] ON [dbo].[SecondaryStock]([parentLedcd]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [SecondaryStock_empId_idx] ON [dbo].[SecondaryStock]([empId]);

-- AddForeignKey
ALTER TABLE [dbo].[SecondaryOrderItem] ADD CONSTRAINT [SecondaryOrderItem_secondaryOrderId_fkey] FOREIGN KEY ([secondaryOrderId]) REFERENCES [dbo].[SecondaryOrder]([secondary_order_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SecondaryStockItem] ADD CONSTRAINT [SecondaryStockItem_secondaryStockId_fkey] FOREIGN KEY ([secondaryStockId]) REFERENCES [dbo].[SecondaryStock]([secondary_stock_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
