use AsDb
--truncate table Menu
--TRUNCATE TABLE DICTIONARY
--TRUNCATE TABLE AgriculturalStatistic
--TRUNCATE TABLE COMPANY
--TRUNCATE TABLE DEPARTMENT
--TRUNCATE TABLE [GROUP]
--TRUNCATE TABLE EMPLOYEE
--TRUNCATE TABLE [USER]
--TRUNCATE TABLE DICTIONARY

insert into Menu(Name,ParentId) values('地籍信息系统',0)
insert into Menu(Name,ParentId) values('精准农业报告',0)
insert into Menu(Name,ParentId) values('农产品价格',0)
insert into Menu(Name,ParentId) values('农业保险insurance',0)
insert into Menu(Name,ParentId) values('农业大数据分析',0)
insert into Menu(Name,ParentId) values('农业大数据平台建设',0)
insert into Menu(Name,ParentId) values('农业干旱遥感监测',0)
insert into Menu(Name,ParentId) values('农作物病虫害智能诊断',0)
insert into Menu(Name,ParentId) values('三维仿真系统',0)
insert into Menu(Name,ParentId) values('食品追溯平台',0)
insert into Menu(Name,ParentId) values('土地资源与耕地交易',0)

insert into Menu(Name,ParentId,link) values('地籍信息',1,'')
insert into Menu(Name,ParentId,link) values('土地条件',1,'')
insert into Menu(Name,ParentId,link) values('土地利用现状',1,'')
insert into Menu(Name,ParentId,link) values('土地登记',1,'')
insert into Menu(Name,ParentId,link) values('土地统计',1,'')
insert into Menu(Name,ParentId,link) values('地籍档案管理',1,'')

insert into Menu(Name,ParentId,link) values('区域农产品统计',2,'Analysis/ChinaMapDemo')
insert into Menu(Name,ParentId,link) values('百度地图demo',2,'Analysis/BaiduMapDemo')

insert into Menu(Name,ParentId,link) values('农产品价格',3,'')
insert into Menu(Name,ParentId,link) values('农业保险insurance',4,'')
insert into Menu(Name,ParentId,link) values('农业大数据分析',5,'')
insert into Menu(Name,ParentId,link) values('农业大数据平台建设',6,'')
insert into Menu(Name,ParentId,link) values('农业干旱遥感监测',7,'')
insert into Menu(Name,ParentId,link) values('农作物病虫害智能诊断',8,'')
insert into Menu(Name,ParentId,link) values('三维仿真系统',9,'')
insert into Menu(Name,ParentId,link) values('食品追溯平台',10,'')
insert into Menu(Name,ParentId,link) values('土地资源与耕地交易',11,'')

--dictionary
--巡检点类型
insert into Dictionary(Code,Type) values('P10101','电塔')
insert into Dictionary(Code,Type) values('P10102','电杆')
insert into Dictionary(Code,Type) values('P10103','电线路')
insert into Dictionary(Code,Type) values('P10104','变电站')
--缺陷类型
insert into Dictionary(Code,Type) values('D10101','跳线')
insert into Dictionary(Code,Type) values('D10102','杆塔')
insert into Dictionary(Code,Type) values('D10103','绝缘子')
insert into Dictionary(Code,Type) values('D10104','防震锤')
insert into Dictionary(Code,Type) values('D10105','线夹')
insert into Dictionary(Code,Type) values('D10106','导线')
insert into Dictionary(Code,Type) values('D10107','地面环境')
--缺陷等级（紧急程度1月、1周、1天）
insert into Dictionary(Code,Type) values('D20101','无缺陷')
insert into Dictionary(Code,Type) values('D20102','一般缺陷')
insert into Dictionary(Code,Type) values('D20103','严重缺陷')
insert into Dictionary(Code,Type) values('D20104','危急缺陷')

--organization
insert into Company(Name,Number) values('阿里巴巴',1)

insert into Department(Name,CompanyId,Number) values('销售部',1,1)
insert into Department(Name,CompanyId,Number) values('技术部',1,2)

insert into [Group](Name,DepartmentId,Number,CompanyId) values('销售一组',1,1,1)
insert into [Group](Name,DepartmentId,Number,CompanyId) values('销售二组',1,2,1)
insert into [Group](Name,DepartmentId,Number,CompanyId) values('技术一组',2,3,1)
insert into [Group](Name,DepartmentId,Number,CompanyId) values('技术二组',2,4,1)

insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('叶烨星',1,1,1,1,1)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('王一鹤',1,2,1,1,2)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('郭清越',1,1,1,1,3)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('蔡鹏飞',0,1,1,1,4)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('田晓青',0,2,1,1,5)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('李博洋',0,2,1,1,6)

--user
insert into [User](UserName,Password,CreateTime,Available,EmployeeId) values('yyx','666','2018-2-2',1,1)