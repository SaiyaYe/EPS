
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 04/03/2018 17:09:13
-- Generated from EDMX file: E:\project\EPS\EPS.Model\DataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [EpsDb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_CompanyDepartment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Department] DROP CONSTRAINT [FK_CompanyDepartment];
GO
IF OBJECT_ID(N'[dbo].[FK_DepartmentGroup]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Group] DROP CONSTRAINT [FK_DepartmentGroup];
GO
IF OBJECT_ID(N'[dbo].[FK_GroupEmployee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_GroupEmployee];
GO
IF OBJECT_ID(N'[dbo].[FK_EmployeePatrolScheme]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolScheme] DROP CONSTRAINT [FK_EmployeePatrolScheme];
GO
IF OBJECT_ID(N'[dbo].[FK_UserEmployee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[User] DROP CONSTRAINT [FK_UserEmployee];
GO
IF OBJECT_ID(N'[dbo].[FK_EmployeeDepartment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_EmployeeDepartment];
GO
IF OBJECT_ID(N'[dbo].[FK_EmployeeCompany]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_EmployeeCompany];
GO
IF OBJECT_ID(N'[dbo].[FK_AcquisitionRecordDictionary]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AcquisitionRecord] DROP CONSTRAINT [FK_AcquisitionRecordDictionary];
GO
IF OBJECT_ID(N'[dbo].[FK_EmployeeAcquisitionRecord]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AcquisitionRecord] DROP CONSTRAINT [FK_EmployeeAcquisitionRecord];
GO
IF OBJECT_ID(N'[dbo].[FK_ProvinceCity]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[City] DROP CONSTRAINT [FK_ProvinceCity];
GO
IF OBJECT_ID(N'[dbo].[FK_CityCounty]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[County] DROP CONSTRAINT [FK_CityCounty];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolPointPatrolReport]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolReport] DROP CONSTRAINT [FK_PatrolPointPatrolReport];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolRoutePatrolReport]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolReport] DROP CONSTRAINT [FK_PatrolRoutePatrolReport];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolRoutePatrolScheme]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolScheme] DROP CONSTRAINT [FK_PatrolRoutePatrolScheme];
GO
IF OBJECT_ID(N'[dbo].[FK_DictionaryPatrolDefect]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolDefect] DROP CONSTRAINT [FK_DictionaryPatrolDefect];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolReportEmployee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolReport] DROP CONSTRAINT [FK_PatrolReportEmployee];
GO
IF OBJECT_ID(N'[dbo].[FK_CountyPatrolPoint]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolPoint] DROP CONSTRAINT [FK_CountyPatrolPoint];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolPoint_PatrolRoute_PatrolPoint]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolPoint_PatrolRoute] DROP CONSTRAINT [FK_PatrolPoint_PatrolRoute_PatrolPoint];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolPoint_PatrolRoute_PatrolRoute]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolPoint_PatrolRoute] DROP CONSTRAINT [FK_PatrolPoint_PatrolRoute_PatrolRoute];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolPointDictionary]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolPoint] DROP CONSTRAINT [FK_PatrolPointDictionary];
GO
IF OBJECT_ID(N'[dbo].[FK_PatrolReportDictionary]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolReport] DROP CONSTRAINT [FK_PatrolReportDictionary];
GO
IF OBJECT_ID(N'[dbo].[FK_DefectLevelId]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[PatrolReport] DROP CONSTRAINT [FK_DefectLevelId];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Company]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Company];
GO
IF OBJECT_ID(N'[dbo].[PatrolScheme]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PatrolScheme];
GO
IF OBJECT_ID(N'[dbo].[Dictionary]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Dictionary];
GO
IF OBJECT_ID(N'[dbo].[Menu]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Menu];
GO
IF OBJECT_ID(N'[dbo].[Department]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Department];
GO
IF OBJECT_ID(N'[dbo].[Group]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Group];
GO
IF OBJECT_ID(N'[dbo].[Employee]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Employee];
GO
IF OBJECT_ID(N'[dbo].[User]', 'U') IS NOT NULL
    DROP TABLE [dbo].[User];
GO
IF OBJECT_ID(N'[dbo].[AcquisitionRecord]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AcquisitionRecord];
GO
IF OBJECT_ID(N'[dbo].[PatrolReport]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PatrolReport];
GO
IF OBJECT_ID(N'[dbo].[Province]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Province];
GO
IF OBJECT_ID(N'[dbo].[City]', 'U') IS NOT NULL
    DROP TABLE [dbo].[City];
GO
IF OBJECT_ID(N'[dbo].[County]', 'U') IS NOT NULL
    DROP TABLE [dbo].[County];
GO
IF OBJECT_ID(N'[dbo].[PatrolPoint]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PatrolPoint];
GO
IF OBJECT_ID(N'[dbo].[PatrolRoute]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PatrolRoute];
GO
IF OBJECT_ID(N'[dbo].[PatrolDefect]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PatrolDefect];
GO
IF OBJECT_ID(N'[dbo].[PatrolPoint_PatrolRoute]', 'U') IS NOT NULL
    DROP TABLE [dbo].[PatrolPoint_PatrolRoute];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Company'
CREATE TABLE [dbo].[Company] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'PatrolScheme'
CREATE TABLE [dbo].[PatrolScheme] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Number] nvarchar(max)  NOT NULL,
    [EmployeeId] int  NOT NULL,
    [PatrolRouteId] int  NOT NULL,
    [SchemeDate] datetime  NOT NULL,
    [StartDate] datetime  NOT NULL,
    [EndDate] datetime  NOT NULL,
    [IsCompleted] bit  NOT NULL,
    [Remark] nvarchar(max)  NULL
);
GO

-- Creating table 'Dictionary'
CREATE TABLE [dbo].[Dictionary] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Code] nvarchar(max)  NOT NULL,
    [Type] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Menu'
CREATE TABLE [dbo].[Menu] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [ParentId] int  NOT NULL,
    [Link] nvarchar(max)  NULL,
    [IconUrl] nvarchar(max)  NULL
);
GO

-- Creating table 'Department'
CREATE TABLE [dbo].[Department] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [CompanyId] int  NOT NULL
);
GO

-- Creating table 'Group'
CREATE TABLE [dbo].[Group] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [DepartmentId] int  NOT NULL
);
GO

-- Creating table 'Employee'
CREATE TABLE [dbo].[Employee] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Age] int  NULL,
    [Gender] nvarchar(max)  NULL,
    [IsTeamLeader] bit  NOT NULL,
    [GroupId] int  NOT NULL,
    [DepartmentId] int  NOT NULL,
    [CompanyId] int  NOT NULL
);
GO

-- Creating table 'User'
CREATE TABLE [dbo].[User] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [UserName] nvarchar(max)  NOT NULL,
    [Password] nvarchar(max)  NOT NULL,
    [PictureUrl] nvarchar(max)  NULL,
    [CreateTime] datetime  NOT NULL,
    [Available] bit  NOT NULL,
    [EmployeeId] int  NOT NULL
);
GO

-- Creating table 'AcquisitionRecord'
CREATE TABLE [dbo].[AcquisitionRecord] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [DataUrl] nvarchar(max)  NOT NULL,
    [DataTypeId] int  NOT NULL,
    [AcquisitionTime] datetime  NOT NULL,
    [ReceptionTime] datetime  NULL,
    [Remark] nvarchar(max)  NULL,
    [EmployeeId] int  NOT NULL
);
GO

-- Creating table 'PatrolReport'
CREATE TABLE [dbo].[PatrolReport] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PatrolPointId] int  NOT NULL,
    [PatrolRouteId] int  NOT NULL,
    [ReportTime] datetime  NOT NULL,
    [ReportEmployeeId] int  NOT NULL,
    [DefectTypeId] int  NOT NULL,
    [DefectLevelId] int  NOT NULL
);
GO

-- Creating table 'Province'
CREATE TABLE [dbo].[Province] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'City'
CREATE TABLE [dbo].[City] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [ProvinceId] int  NOT NULL
);
GO

-- Creating table 'County'
CREATE TABLE [dbo].[County] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [CityId] int  NOT NULL
);
GO

-- Creating table 'PatrolPoint'
CREATE TABLE [dbo].[PatrolPoint] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Shape] geography  NOT NULL,
    [PoleTowerNumber] nvarchar(max)  NOT NULL,
    [Longitude] float  NOT NULL,
    [Latitude] float  NOT NULL,
    [CreateTime] datetime  NULL,
    [CountyId] int  NOT NULL,
    [PatrolPointTypeId] int  NOT NULL
);
GO

-- Creating table 'PatrolRoute'
CREATE TABLE [dbo].[PatrolRoute] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Shape] geography  NOT NULL,
    [Name] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'PatrolDefect'
CREATE TABLE [dbo].[PatrolDefect] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [DefectTypeId] int  NOT NULL
);
GO

-- Creating table 'PatrolPoint_PatrolRoute'
CREATE TABLE [dbo].[PatrolPoint_PatrolRoute] (
    [PatrolPoint_Id] int  NOT NULL,
    [PatrolRoute_Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Company'
ALTER TABLE [dbo].[Company]
ADD CONSTRAINT [PK_Company]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PatrolScheme'
ALTER TABLE [dbo].[PatrolScheme]
ADD CONSTRAINT [PK_PatrolScheme]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Dictionary'
ALTER TABLE [dbo].[Dictionary]
ADD CONSTRAINT [PK_Dictionary]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Menu'
ALTER TABLE [dbo].[Menu]
ADD CONSTRAINT [PK_Menu]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Department'
ALTER TABLE [dbo].[Department]
ADD CONSTRAINT [PK_Department]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Group'
ALTER TABLE [dbo].[Group]
ADD CONSTRAINT [PK_Group]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [PK_Employee]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'User'
ALTER TABLE [dbo].[User]
ADD CONSTRAINT [PK_User]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'AcquisitionRecord'
ALTER TABLE [dbo].[AcquisitionRecord]
ADD CONSTRAINT [PK_AcquisitionRecord]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PatrolReport'
ALTER TABLE [dbo].[PatrolReport]
ADD CONSTRAINT [PK_PatrolReport]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Province'
ALTER TABLE [dbo].[Province]
ADD CONSTRAINT [PK_Province]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'City'
ALTER TABLE [dbo].[City]
ADD CONSTRAINT [PK_City]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'County'
ALTER TABLE [dbo].[County]
ADD CONSTRAINT [PK_County]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PatrolPoint'
ALTER TABLE [dbo].[PatrolPoint]
ADD CONSTRAINT [PK_PatrolPoint]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PatrolRoute'
ALTER TABLE [dbo].[PatrolRoute]
ADD CONSTRAINT [PK_PatrolRoute]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'PatrolDefect'
ALTER TABLE [dbo].[PatrolDefect]
ADD CONSTRAINT [PK_PatrolDefect]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [PatrolPoint_Id], [PatrolRoute_Id] in table 'PatrolPoint_PatrolRoute'
ALTER TABLE [dbo].[PatrolPoint_PatrolRoute]
ADD CONSTRAINT [PK_PatrolPoint_PatrolRoute]
    PRIMARY KEY CLUSTERED ([PatrolPoint_Id], [PatrolRoute_Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [CompanyId] in table 'Department'
ALTER TABLE [dbo].[Department]
ADD CONSTRAINT [FK_CompanyDepartment]
    FOREIGN KEY ([CompanyId])
    REFERENCES [dbo].[Company]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CompanyDepartment'
CREATE INDEX [IX_FK_CompanyDepartment]
ON [dbo].[Department]
    ([CompanyId]);
GO

-- Creating foreign key on [DepartmentId] in table 'Group'
ALTER TABLE [dbo].[Group]
ADD CONSTRAINT [FK_DepartmentGroup]
    FOREIGN KEY ([DepartmentId])
    REFERENCES [dbo].[Department]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DepartmentGroup'
CREATE INDEX [IX_FK_DepartmentGroup]
ON [dbo].[Group]
    ([DepartmentId]);
GO

-- Creating foreign key on [GroupId] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [FK_GroupEmployee]
    FOREIGN KEY ([GroupId])
    REFERENCES [dbo].[Group]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_GroupEmployee'
CREATE INDEX [IX_FK_GroupEmployee]
ON [dbo].[Employee]
    ([GroupId]);
GO

-- Creating foreign key on [EmployeeId] in table 'PatrolScheme'
ALTER TABLE [dbo].[PatrolScheme]
ADD CONSTRAINT [FK_EmployeePatrolScheme]
    FOREIGN KEY ([EmployeeId])
    REFERENCES [dbo].[Employee]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_EmployeePatrolScheme'
CREATE INDEX [IX_FK_EmployeePatrolScheme]
ON [dbo].[PatrolScheme]
    ([EmployeeId]);
GO

-- Creating foreign key on [EmployeeId] in table 'User'
ALTER TABLE [dbo].[User]
ADD CONSTRAINT [FK_UserEmployee]
    FOREIGN KEY ([EmployeeId])
    REFERENCES [dbo].[Employee]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_UserEmployee'
CREATE INDEX [IX_FK_UserEmployee]
ON [dbo].[User]
    ([EmployeeId]);
GO

-- Creating foreign key on [DepartmentId] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [FK_EmployeeDepartment]
    FOREIGN KEY ([DepartmentId])
    REFERENCES [dbo].[Department]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_EmployeeDepartment'
CREATE INDEX [IX_FK_EmployeeDepartment]
ON [dbo].[Employee]
    ([DepartmentId]);
GO

-- Creating foreign key on [CompanyId] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [FK_EmployeeCompany]
    FOREIGN KEY ([CompanyId])
    REFERENCES [dbo].[Company]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_EmployeeCompany'
CREATE INDEX [IX_FK_EmployeeCompany]
ON [dbo].[Employee]
    ([CompanyId]);
GO

-- Creating foreign key on [DataTypeId] in table 'AcquisitionRecord'
ALTER TABLE [dbo].[AcquisitionRecord]
ADD CONSTRAINT [FK_AcquisitionRecordDictionary]
    FOREIGN KEY ([DataTypeId])
    REFERENCES [dbo].[Dictionary]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AcquisitionRecordDictionary'
CREATE INDEX [IX_FK_AcquisitionRecordDictionary]
ON [dbo].[AcquisitionRecord]
    ([DataTypeId]);
GO

-- Creating foreign key on [EmployeeId] in table 'AcquisitionRecord'
ALTER TABLE [dbo].[AcquisitionRecord]
ADD CONSTRAINT [FK_EmployeeAcquisitionRecord]
    FOREIGN KEY ([EmployeeId])
    REFERENCES [dbo].[Employee]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_EmployeeAcquisitionRecord'
CREATE INDEX [IX_FK_EmployeeAcquisitionRecord]
ON [dbo].[AcquisitionRecord]
    ([EmployeeId]);
GO

-- Creating foreign key on [ProvinceId] in table 'City'
ALTER TABLE [dbo].[City]
ADD CONSTRAINT [FK_ProvinceCity]
    FOREIGN KEY ([ProvinceId])
    REFERENCES [dbo].[Province]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProvinceCity'
CREATE INDEX [IX_FK_ProvinceCity]
ON [dbo].[City]
    ([ProvinceId]);
GO

-- Creating foreign key on [CityId] in table 'County'
ALTER TABLE [dbo].[County]
ADD CONSTRAINT [FK_CityCounty]
    FOREIGN KEY ([CityId])
    REFERENCES [dbo].[City]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CityCounty'
CREATE INDEX [IX_FK_CityCounty]
ON [dbo].[County]
    ([CityId]);
GO

-- Creating foreign key on [PatrolPointId] in table 'PatrolReport'
ALTER TABLE [dbo].[PatrolReport]
ADD CONSTRAINT [FK_PatrolPointPatrolReport]
    FOREIGN KEY ([PatrolPointId])
    REFERENCES [dbo].[PatrolPoint]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolPointPatrolReport'
CREATE INDEX [IX_FK_PatrolPointPatrolReport]
ON [dbo].[PatrolReport]
    ([PatrolPointId]);
GO

-- Creating foreign key on [PatrolRouteId] in table 'PatrolReport'
ALTER TABLE [dbo].[PatrolReport]
ADD CONSTRAINT [FK_PatrolRoutePatrolReport]
    FOREIGN KEY ([PatrolRouteId])
    REFERENCES [dbo].[PatrolRoute]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolRoutePatrolReport'
CREATE INDEX [IX_FK_PatrolRoutePatrolReport]
ON [dbo].[PatrolReport]
    ([PatrolRouteId]);
GO

-- Creating foreign key on [PatrolRouteId] in table 'PatrolScheme'
ALTER TABLE [dbo].[PatrolScheme]
ADD CONSTRAINT [FK_PatrolRoutePatrolScheme]
    FOREIGN KEY ([PatrolRouteId])
    REFERENCES [dbo].[PatrolRoute]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolRoutePatrolScheme'
CREATE INDEX [IX_FK_PatrolRoutePatrolScheme]
ON [dbo].[PatrolScheme]
    ([PatrolRouteId]);
GO

-- Creating foreign key on [DefectTypeId] in table 'PatrolDefect'
ALTER TABLE [dbo].[PatrolDefect]
ADD CONSTRAINT [FK_DictionaryPatrolDefect]
    FOREIGN KEY ([DefectTypeId])
    REFERENCES [dbo].[Dictionary]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DictionaryPatrolDefect'
CREATE INDEX [IX_FK_DictionaryPatrolDefect]
ON [dbo].[PatrolDefect]
    ([DefectTypeId]);
GO

-- Creating foreign key on [ReportEmployeeId] in table 'PatrolReport'
ALTER TABLE [dbo].[PatrolReport]
ADD CONSTRAINT [FK_PatrolReportEmployee]
    FOREIGN KEY ([ReportEmployeeId])
    REFERENCES [dbo].[Employee]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolReportEmployee'
CREATE INDEX [IX_FK_PatrolReportEmployee]
ON [dbo].[PatrolReport]
    ([ReportEmployeeId]);
GO

-- Creating foreign key on [CountyId] in table 'PatrolPoint'
ALTER TABLE [dbo].[PatrolPoint]
ADD CONSTRAINT [FK_CountyPatrolPoint]
    FOREIGN KEY ([CountyId])
    REFERENCES [dbo].[County]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CountyPatrolPoint'
CREATE INDEX [IX_FK_CountyPatrolPoint]
ON [dbo].[PatrolPoint]
    ([CountyId]);
GO

-- Creating foreign key on [PatrolPoint_Id] in table 'PatrolPoint_PatrolRoute'
ALTER TABLE [dbo].[PatrolPoint_PatrolRoute]
ADD CONSTRAINT [FK_PatrolPoint_PatrolRoute_PatrolPoint]
    FOREIGN KEY ([PatrolPoint_Id])
    REFERENCES [dbo].[PatrolPoint]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [PatrolRoute_Id] in table 'PatrolPoint_PatrolRoute'
ALTER TABLE [dbo].[PatrolPoint_PatrolRoute]
ADD CONSTRAINT [FK_PatrolPoint_PatrolRoute_PatrolRoute]
    FOREIGN KEY ([PatrolRoute_Id])
    REFERENCES [dbo].[PatrolRoute]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolPoint_PatrolRoute_PatrolRoute'
CREATE INDEX [IX_FK_PatrolPoint_PatrolRoute_PatrolRoute]
ON [dbo].[PatrolPoint_PatrolRoute]
    ([PatrolRoute_Id]);
GO

-- Creating foreign key on [PatrolPointTypeId] in table 'PatrolPoint'
ALTER TABLE [dbo].[PatrolPoint]
ADD CONSTRAINT [FK_PatrolPointDictionary]
    FOREIGN KEY ([PatrolPointTypeId])
    REFERENCES [dbo].[Dictionary]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolPointDictionary'
CREATE INDEX [IX_FK_PatrolPointDictionary]
ON [dbo].[PatrolPoint]
    ([PatrolPointTypeId]);
GO

-- Creating foreign key on [DefectTypeId] in table 'PatrolReport'
ALTER TABLE [dbo].[PatrolReport]
ADD CONSTRAINT [FK_PatrolReportDictionary]
    FOREIGN KEY ([DefectTypeId])
    REFERENCES [dbo].[Dictionary]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PatrolReportDictionary'
CREATE INDEX [IX_FK_PatrolReportDictionary]
ON [dbo].[PatrolReport]
    ([DefectTypeId]);
GO

-- Creating foreign key on [DefectLevelId] in table 'PatrolReport'
ALTER TABLE [dbo].[PatrolReport]
ADD CONSTRAINT [FK_DefectLevelId]
    FOREIGN KEY ([DefectLevelId])
    REFERENCES [dbo].[Dictionary]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DefectLevelId'
CREATE INDEX [IX_FK_DefectLevelId]
ON [dbo].[PatrolReport]
    ([DefectLevelId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------