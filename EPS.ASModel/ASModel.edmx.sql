
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 06/06/2018 19:20:17
-- Generated from EDMX file: E:\project\EPS\EPS.ASModel\ASModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [AsDb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_AgriculturalStatisticCounty]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[AgriculturalStatistic] DROP CONSTRAINT [FK_AgriculturalStatisticCounty];
GO
IF OBJECT_ID(N'[dbo].[FK_CityCounty]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[County] DROP CONSTRAINT [FK_CityCounty];
GO
IF OBJECT_ID(N'[dbo].[FK_ProvinceCity]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[City] DROP CONSTRAINT [FK_ProvinceCity];
GO
IF OBJECT_ID(N'[dbo].[FK_CompanyDepartment]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Department] DROP CONSTRAINT [FK_CompanyDepartment];
GO
IF OBJECT_ID(N'[dbo].[FK_FertilizerStatisticCounty]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[FertilizerStatistic] DROP CONSTRAINT [FK_FertilizerStatisticCounty];
GO
IF OBJECT_ID(N'[dbo].[FK_DepartmentGroup]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Group] DROP CONSTRAINT [FK_DepartmentGroup];
GO
IF OBJECT_ID(N'[dbo].[FK_EmployeeUser]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[User] DROP CONSTRAINT [FK_EmployeeUser];
GO
IF OBJECT_ID(N'[dbo].[FK_GroupEmployee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_GroupEmployee];
GO
IF OBJECT_ID(N'[dbo].[FK_DepartmentEmployee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_DepartmentEmployee];
GO
IF OBJECT_ID(N'[dbo].[FK_CompanyEmployee]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Employee] DROP CONSTRAINT [FK_CompanyEmployee];
GO
IF OBJECT_ID(N'[dbo].[FK_CompanyGroup]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Group] DROP CONSTRAINT [FK_CompanyGroup];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[AgriculturalStatistic]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AgriculturalStatistic];
GO
IF OBJECT_ID(N'[dbo].[City]', 'U') IS NOT NULL
    DROP TABLE [dbo].[City];
GO
IF OBJECT_ID(N'[dbo].[Company]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Company];
GO
IF OBJECT_ID(N'[dbo].[County]', 'U') IS NOT NULL
    DROP TABLE [dbo].[County];
GO
IF OBJECT_ID(N'[dbo].[Department]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Department];
GO
IF OBJECT_ID(N'[dbo].[Dictionary]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Dictionary];
GO
IF OBJECT_ID(N'[dbo].[Employee]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Employee];
GO
IF OBJECT_ID(N'[dbo].[FertilizerStatistic]', 'U') IS NOT NULL
    DROP TABLE [dbo].[FertilizerStatistic];
GO
IF OBJECT_ID(N'[dbo].[Group]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Group];
GO
IF OBJECT_ID(N'[dbo].[Menu]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Menu];
GO
IF OBJECT_ID(N'[dbo].[Province]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Province];
GO
IF OBJECT_ID(N'[dbo].[User]', 'U') IS NOT NULL
    DROP TABLE [dbo].[User];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'AgriculturalStatistic'
CREATE TABLE [dbo].[AgriculturalStatistic] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [ArableLandArea] float  NULL,
    [FertilizerQuantity] float  NULL,
    [PotashFertilizerQuantity] float  NULL,
    [TotalGrainOutput] float  NULL,
    [CattleCount] float  NULL,
    [PigCount] float  NULL,
    [SheepCount] float  NULL,
    [PoultryCount] float  NULL,
    [Year] int  NOT NULL,
    [CountyId] int  NOT NULL,
    [ProvinceId] int  NOT NULL
);
GO

-- Creating table 'City'
CREATE TABLE [dbo].[City] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Code] nvarchar(max)  NOT NULL,
    [ProvinceId] int  NOT NULL
);
GO

-- Creating table 'Company'
CREATE TABLE [dbo].[Company] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Number] int  NOT NULL
);
GO

-- Creating table 'County'
CREATE TABLE [dbo].[County] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Code] nvarchar(max)  NOT NULL,
    [CityId] int  NOT NULL
);
GO

-- Creating table 'Department'
CREATE TABLE [dbo].[Department] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Number] int  NOT NULL,
    [CompanyId] int  NOT NULL
);
GO

-- Creating table 'Dictionary'
CREATE TABLE [dbo].[Dictionary] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Code] nvarchar(max)  NOT NULL,
    [Type] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Employee'
CREATE TABLE [dbo].[Employee] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Age] int  NULL,
    [Gender] nvarchar(max)  NULL,
    [IsTeamLeader] bit  NOT NULL,
    [Number] int  NOT NULL,
    [GroupId] int  NOT NULL,
    [DepartmentId] int  NOT NULL,
    [CompanyId] int  NOT NULL
);
GO

-- Creating table 'FertilizerStatistic'
CREATE TABLE [dbo].[FertilizerStatistic] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Quantity] float  NOT NULL,
    [Year] int  NOT NULL,
    [CountyId] int  NOT NULL
);
GO

-- Creating table 'Group'
CREATE TABLE [dbo].[Group] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Number] int  NOT NULL,
    [DepartmentId] int  NOT NULL,
    [CompanyId] int  NOT NULL
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

-- Creating table 'Province'
CREATE TABLE [dbo].[Province] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Code] nvarchar(max)  NOT NULL
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

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'AgriculturalStatistic'
ALTER TABLE [dbo].[AgriculturalStatistic]
ADD CONSTRAINT [PK_AgriculturalStatistic]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'City'
ALTER TABLE [dbo].[City]
ADD CONSTRAINT [PK_City]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Company'
ALTER TABLE [dbo].[Company]
ADD CONSTRAINT [PK_Company]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'County'
ALTER TABLE [dbo].[County]
ADD CONSTRAINT [PK_County]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Department'
ALTER TABLE [dbo].[Department]
ADD CONSTRAINT [PK_Department]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Dictionary'
ALTER TABLE [dbo].[Dictionary]
ADD CONSTRAINT [PK_Dictionary]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [PK_Employee]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'FertilizerStatistic'
ALTER TABLE [dbo].[FertilizerStatistic]
ADD CONSTRAINT [PK_FertilizerStatistic]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Group'
ALTER TABLE [dbo].[Group]
ADD CONSTRAINT [PK_Group]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Menu'
ALTER TABLE [dbo].[Menu]
ADD CONSTRAINT [PK_Menu]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Province'
ALTER TABLE [dbo].[Province]
ADD CONSTRAINT [PK_Province]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'User'
ALTER TABLE [dbo].[User]
ADD CONSTRAINT [PK_User]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [CountyId] in table 'AgriculturalStatistic'
ALTER TABLE [dbo].[AgriculturalStatistic]
ADD CONSTRAINT [FK_AgriculturalStatisticCounty]
    FOREIGN KEY ([CountyId])
    REFERENCES [dbo].[County]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_AgriculturalStatisticCounty'
CREATE INDEX [IX_FK_AgriculturalStatisticCounty]
ON [dbo].[AgriculturalStatistic]
    ([CountyId]);
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

-- Creating foreign key on [CountyId] in table 'FertilizerStatistic'
ALTER TABLE [dbo].[FertilizerStatistic]
ADD CONSTRAINT [FK_FertilizerStatisticCounty]
    FOREIGN KEY ([CountyId])
    REFERENCES [dbo].[County]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_FertilizerStatisticCounty'
CREATE INDEX [IX_FK_FertilizerStatisticCounty]
ON [dbo].[FertilizerStatistic]
    ([CountyId]);
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

-- Creating foreign key on [EmployeeId] in table 'User'
ALTER TABLE [dbo].[User]
ADD CONSTRAINT [FK_EmployeeUser]
    FOREIGN KEY ([EmployeeId])
    REFERENCES [dbo].[Employee]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_EmployeeUser'
CREATE INDEX [IX_FK_EmployeeUser]
ON [dbo].[User]
    ([EmployeeId]);
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

-- Creating foreign key on [DepartmentId] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [FK_DepartmentEmployee]
    FOREIGN KEY ([DepartmentId])
    REFERENCES [dbo].[Department]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DepartmentEmployee'
CREATE INDEX [IX_FK_DepartmentEmployee]
ON [dbo].[Employee]
    ([DepartmentId]);
GO

-- Creating foreign key on [CompanyId] in table 'Employee'
ALTER TABLE [dbo].[Employee]
ADD CONSTRAINT [FK_CompanyEmployee]
    FOREIGN KEY ([CompanyId])
    REFERENCES [dbo].[Company]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CompanyEmployee'
CREATE INDEX [IX_FK_CompanyEmployee]
ON [dbo].[Employee]
    ([CompanyId]);
GO

-- Creating foreign key on [CompanyId] in table 'Group'
ALTER TABLE [dbo].[Group]
ADD CONSTRAINT [FK_CompanyGroup]
    FOREIGN KEY ([CompanyId])
    REFERENCES [dbo].[Company]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CompanyGroup'
CREATE INDEX [IX_FK_CompanyGroup]
ON [dbo].[Group]
    ([CompanyId]);
GO

-- Creating foreign key on [ProvinceId] in table 'AgriculturalStatistic'
ALTER TABLE [dbo].[AgriculturalStatistic]
ADD CONSTRAINT [FK_ProvinceAgriculturalStatistic]
    FOREIGN KEY ([ProvinceId])
    REFERENCES [dbo].[Province]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProvinceAgriculturalStatistic'
CREATE INDEX [IX_FK_ProvinceAgriculturalStatistic]
ON [dbo].[AgriculturalStatistic]
    ([ProvinceId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------