BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Attendance] (
    [attendance_id] NVARCHAR(1000) NOT NULL,
    [userId] INT NOT NULL,
    [date] DATE NOT NULL,
    [status] NVARCHAR(1000) NOT NULL CONSTRAINT [Attendance_status_df] DEFAULT 'not_marked',
    [markedAt] DATETIME2,
    [markedBy] NVARCHAR(1000),
    [absentReason] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Attendance_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Attendance_pkey] PRIMARY KEY CLUSTERED ([attendance_id]),
    CONSTRAINT [Attendance_userId_date_key] UNIQUE NONCLUSTERED ([userId],[date])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Attendance_userId_idx] ON [dbo].[Attendance]([userId]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [Attendance_date_idx] ON [dbo].[Attendance]([date]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
