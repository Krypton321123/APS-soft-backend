BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[NewPartyOrder] (
    [new_party_order_id] NVARCHAR(1000) NOT NULL,
    [partyName] NVARCHAR(1000) NOT NULL,
    [partyMobile] NVARCHAR(1000) NOT NULL,
    [empId] NVARCHAR(1000) NOT NULL,
    [photoUrl] NVARCHAR(1000) NOT NULL,
    [totalAmount] DECIMAL(18,2) NOT NULL,
    [consumerRate] DECIMAL(18,2),
    [bulkRate] DECIMAL(18,2),
    [paymentMode] NVARCHAR(1000) NOT NULL CONSTRAINT [NewPartyOrder_paymentMode_df] DEFAULT '',
    [creditDays] INT,
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [NewPartyOrder_status_df] DEFAULT 'pending',
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [NewPartyOrder_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [NewPartyOrder_pkey] PRIMARY KEY CLUSTERED ([new_party_order_id])
);

-- CreateTable
CREATE TABLE [dbo].[NewPartyOrderItem] (
    [id] NVARCHAR(1000) NOT NULL,
    [newPartyOrderId] NVARCHAR(1000) NOT NULL,
    [itemCode] NVARCHAR(1000) NOT NULL,
    [itemName] NVARCHAR(1000) NOT NULL,
    [quantity] INT NOT NULL,
    [rate] DECIMAL(18,2) NOT NULL,
    [amount] DECIMAL(18,2) NOT NULL,
    [packType] NVARCHAR(1000) NOT NULL CONSTRAINT [NewPartyOrderItem_packType_df] DEFAULT '',
    CONSTRAINT [NewPartyOrderItem_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [NewPartyOrder_empId_idx] ON [dbo].[NewPartyOrder]([empId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [NewPartyOrder_createdAt_idx] ON [dbo].[NewPartyOrder]([createdAt]);

-- AddForeignKey
ALTER TABLE [dbo].[NewPartyOrderItem] ADD CONSTRAINT [NewPartyOrderItem_newPartyOrderId_fkey] FOREIGN KEY ([newPartyOrderId]) REFERENCES [dbo].[NewPartyOrder]([new_party_order_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
