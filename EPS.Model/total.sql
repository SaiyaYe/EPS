use EpsDb
truncate table Menu

insert into Menu(Name,ParentId) values('基础本底数据',0)
insert into Menu(Name,ParentId) values('电力线路GIS数据库',0)
insert into Menu(Name,ParentId) values('电力巡检业务',0)
insert into Menu(Name,ParentId) values('巡检大数据分析',0)
insert into Menu(Name,ParentId) values('巡检方案案例',0)
insert into Menu(Name,ParentId) values('遥感影像',0)
insert into Menu(Name,ParentId) values('设备管理',0)
insert into Menu(Name,ParentId) values('系统管理',0)

insert into Menu(Name,ParentId,Link) values('行政边界',1,'')
insert into Menu(Name,ParentId,Link) values('交通道路',1,'')
insert into Menu(Name,ParentId,Link) values('河流水系',1,'')
insert into Menu(Name,ParentId,Link) values('DEM海拔',1,'')
insert into Menu(Name,ParentId,Link) values('土地类型',1,'')
insert into Menu(Name,ParentId,Link) values('人口经济',1,'')

insert into Menu(Name,ParentId,Link) values('电塔',2,'')
insert into Menu(Name,ParentId,Link) values('电杆',2,'')
insert into Menu(Name,ParentId,Link) values('电线路',2,'')
insert into Menu(Name,ParentId,Link) values('变电站',2,'')

insert into Menu(Name,ParentId,Link) values('巡检计划',3,'Transaction/SchemeList')
insert into Menu(Name,ParentId,Link) values('巡检点设置',3,'Transaction/PatrolPointList')
insert into Menu(Name,ParentId,Link) values('创建巡检任务',3,'Transaction/TaskList')
insert into Menu(Name,ParentId,Link) values('设定巡检路线',3,'Transaction/RouteList')
insert into Menu(Name,ParentId,Link) values('巡检报告',3,'Transaction/PatrolReportList')
insert into Menu(Name,ParentId,Link) values('巡检问题处理',3,'Transaction/ProblemHandledList')
insert into Menu(Name,ParentId,Link) values('巡检问题处理',3,'Transaction/ProblemHandledList')
insert into Menu(Name,ParentId,Link) values('空间信息查询',3,'Transaction/SpatialInformationQuery')
insert into Menu(Name,ParentId,Link) values('最短路径导航',3,'Transaction/Navigation')
insert into Menu(Name,ParentId,Link) values('地图量测',3,'Transaction/Measure')

insert into Menu(Name,ParentId,Link) values('查询',4,'')
insert into Menu(Name,ParentId,Link) values('无人机影像中电力问题',4,'')
insert into Menu(Name,ParentId,Link) values('问题缺陷类型分析',4,'')
insert into Menu(Name,ParentId,Link) values('问题缺陷空间分布规律',4,'')
insert into Menu(Name,ParentId,Link) values('问题缺陷时间变化规律',4,'')
insert into Menu(Name,ParentId,Link) values('线路风险分析',4,'Analysis/RiskAnalysis')
insert into Menu(Name,ParentId,Link) values('巡检报告',4,'')

insert into Menu(Name,ParentId,Link) values('基础信息',8,'')
insert into Menu(Name,ParentId,Link) values('部门',8,'SystemManagement/DepartmentList')
insert into Menu(Name,ParentId,Link) values('小组',8,'SystemManagement/GroupList')
insert into Menu(Name,ParentId,Link) values('人员',8,'SystemManagement/EmployeeList')
insert into Menu(Name,ParentId,Link) values('角色权限',8,'')
insert into Menu(Name,ParentId,Link) values('用户日志统计',8,'')
insert into Menu(Name,ParentId,Link) values('系统信息',8,'')

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

--province
insert into Province(Name) values('北京市')
insert into Province(Name) values('浙江省')
insert into Province(Name) values('河南省')
insert into Province(Name) values('四川省')

--city
insert into City(Name,ProvinceId) values('北京市',1)
insert into City(Name,ProvinceId) values('金华市',2)
insert into City(Name,ProvinceId) values('郑州市',3)
insert into City(Name,ProvinceId) values('成都市',4)

--county
insert into County(Name,CityId) values('怀柔县',1)
insert into County(Name,CityId) values('婺城区',2)
insert into County(Name,CityId) values('二七区',3)
insert into County(Name,CityId) values('新都区',4)

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

--PatrolRoute
insert into PatrolRoute(Name,Shape) values('线路一',geography::STGeomFromText('LINESTRING(116.63 40.32, 115.33 40.57, 114.82 40.16)', 4326))
insert into PatrolRoute(Name,Shape) values('线路二',geography::STGeomFromText('LINESTRING(115.33 40.57, 114.82 40.16, 113.59 41.29)', 4326))
insert into PatrolRoute(Name,Shape) values('线路三',geography::STGeomFromText('LINESTRING(115.33 40.57, 114.82 40.16, 112.17 41.84)', 4326))

--PatrolPoint
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('001','116.63','40.32',1,1,'2017-12-1',geography::STGeomFromText('POINT (116.63 40.32)', 4326))
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('002','115.33','40.57',1,1,'2018-1-1',geography::STGeomFromText('POINT (115.33 40.57)', 4326))
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('003','114.82','40.16',1,1,'2018-1-1',geography::STGeomFromText('POINT (114.82 40.16)', 4326))
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('004','113.59','41.29',1,1,'2018-2-1',geography::STGeomFromText('POINT (113.59 41.29)', 4326))
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('005','112.17','41.84',1,1,'2018-2-1',geography::STGeomFromText('POINT (112.17 41.84)', 4326))
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('006','120.3','34.3',2,2,'2018-3-1',geography::STGeomFromText('POINT (120.3 34.3)', 4326))
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId,CreateTime,Shape) values('007','120.4','34.4',2,2,'2018-4-1',geography::STGeomFromText('POINT (120.4 34.4)', 4326))

--PatrolPoint_PatrolRoute
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(1,1)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(2,1)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(3,1)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(2,2)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(3,2)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(4,2)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(3,3)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(4,3)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(5,3)

--PatrolScheme
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('1',1,1,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('2',2,2,'2018-02-01','2018-02-01','2018-03-01',0)
insert into PatrolScheme(Number,EmployeeId,PatrolRouteId,SchemeDate,StartDate,EndDate,IsCompleted) values('3',3,3,'2018-02-01','2018-02-01','2018-03-01',0)

--PatrolReport
insert into PatrolReport(DefectTypeId,DefectLevelId,PatrolRouteId,PatrolPointId,ReportTime,ReportEmployeeId) values(5,12,1,1,'2018-3-18',1)
insert into PatrolReport(DefectTypeId,DefectLevelId,PatrolRouteId,PatrolPointId,ReportTime,ReportEmployeeId) values(6,12,1,1,'2018-3-18',1)
insert into PatrolReport(DefectTypeId,DefectLevelId,PatrolRouteId,PatrolPointId,ReportTime,ReportEmployeeId) values(7,12,1,1,'2018-3-18',1)
insert into PatrolReport(DefectTypeId,DefectLevelId,PatrolRouteId,PatrolPointId,ReportTime,ReportEmployeeId) values(8,12,1,1,'2018-3-18',1)