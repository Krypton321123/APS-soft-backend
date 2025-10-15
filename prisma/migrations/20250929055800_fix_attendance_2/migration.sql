BEGIN TRY

BEGIN TRAN;

-- DropIndex
DROP INDEX [Attendance_date_idx] ON [dbo].[Attendance];

-- DropIndex
ALTER TABLE [dbo].[Attendance] DROP CONSTRAINT [Attendance_userId_date_key];

-- AlterTable
ALTER TABLE [dbo].[Attendance] ALTER COLUMN [date] NVARCHAR(1000) NOT NULL;

-- CreateIndex
CREATE NONCLUSTERED INDEX [Attendance_date_idx] ON [dbo].[Attendance]([date]);

-- CreateIndex
ALTER TABLE [dbo].[Attendance] ADD CONSTRAINT [Attendance_userId_date_key] UNIQUE NONCLUSTERED ([userId], [date]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
