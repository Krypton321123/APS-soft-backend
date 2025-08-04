BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Attendance] DROP CONSTRAINT [Attendance_userId_date_key];

-- DropIndex
DROP INDEX [Attendance_userId_idx] ON [dbo].[Attendance];

-- AlterTable
ALTER TABLE [dbo].[Attendance] ALTER COLUMN [userId] NVARCHAR(1000) NOT NULL;

-- CreateIndex
CREATE NONCLUSTERED INDEX [Attendance_userId_idx] ON [dbo].[Attendance]([userId]);

-- CreateIndex
ALTER TABLE [dbo].[Attendance] ADD CONSTRAINT [Attendance_userId_date_key] UNIQUE NONCLUSTERED ([userId], [date]);

-- AddForeignKey
ALTER TABLE [dbo].[Attendance] ADD CONSTRAINT [Attendance_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([username]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
