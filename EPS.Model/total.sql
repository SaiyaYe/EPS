use EpsDb
truncate table Menu

insert into Menu(Name,ParentId) values('������������',0)
insert into Menu(Name,ParentId) values('������·GIS���ݿ�',0)
insert into Menu(Name,ParentId) values('����Ѳ��ҵ��',0)
insert into Menu(Name,ParentId) values('Ѳ������ݷ���',0)
insert into Menu(Name,ParentId) values('Ѳ�췽������',0)
insert into Menu(Name,ParentId) values('ң��Ӱ��',0)
insert into Menu(Name,ParentId) values('�豸����',0)
insert into Menu(Name,ParentId) values('ϵͳ����',0)

insert into Menu(Name,ParentId,Link) values('�����߽�',1,'')
insert into Menu(Name,ParentId,Link) values('��ͨ��·',1,'')
insert into Menu(Name,ParentId,Link) values('����ˮϵ',1,'')
insert into Menu(Name,ParentId,Link) values('DEM����',1,'')
insert into Menu(Name,ParentId,Link) values('��������',1,'')
insert into Menu(Name,ParentId,Link) values('�˿ھ���',1,'')

insert into Menu(Name,ParentId,Link) values('����',2,'')
insert into Menu(Name,ParentId,Link) values('���',2,'')
insert into Menu(Name,ParentId,Link) values('����·',2,'')
insert into Menu(Name,ParentId,Link) values('���վ',2,'')

insert into Menu(Name,ParentId,Link) values('Ѳ��ƻ�',3,'Transaction/SchemeList')
insert into Menu(Name,ParentId,Link) values('Ѳ�������',3,'Transaction/PatrolPointList')
insert into Menu(Name,ParentId,Link) values('����Ѳ������',3,'Transaction/TaskList')
insert into Menu(Name,ParentId,Link) values('�趨Ѳ��·��',3,'Transaction/RouteList')
insert into Menu(Name,ParentId,Link) values('Ѳ�챨��',3,'Transaction/PatrolReportList')
insert into Menu(Name,ParentId,Link) values('Ѳ�����⴦��',3,'Transaction/ProblemHandledList')

insert into Menu(Name,ParentId,Link) values('��ѯ',4,'')
insert into Menu(Name,ParentId,Link) values('���˻�Ӱ���е�������',4,'')
insert into Menu(Name,ParentId,Link) values('����ȱ�����ͷ���',4,'')
insert into Menu(Name,ParentId,Link) values('����ȱ�ݿռ�ֲ�����',4,'')
insert into Menu(Name,ParentId,Link) values('����ȱ��ʱ��仯����',4,'')
insert into Menu(Name,ParentId,Link) values('��·���շ���',4,'')
insert into Menu(Name,ParentId,Link) values('Ѳ�챨��',4,'')

insert into Menu(Name,ParentId,Link) values('������Ϣ',8,'')
insert into Menu(Name,ParentId,Link) values('����',8,'SystemManagement/DepartmentList')
insert into Menu(Name,ParentId,Link) values('С��',8,'SystemManagement/GroupList')
insert into Menu(Name,ParentId,Link) values('��Ա',8,'SystemManagement/EmployeeList')
insert into Menu(Name,ParentId,Link) values('��ɫȨ��',8,'')
insert into Menu(Name,ParentId,Link) values('�û���־ͳ��',8,'')
insert into Menu(Name,ParentId,Link) values('ϵͳ��Ϣ',8,'')

--dictionary
--Ѳ�������
insert into Dictionary(Code,Type) values('P10101','����')
insert into Dictionary(Code,Type) values('P10102','���')
insert into Dictionary(Code,Type) values('P10103','����·')
insert into Dictionary(Code,Type) values('P10104','���վ')
--ȱ������
insert into Dictionary(Code,Type) values('D10101','����')
insert into Dictionary(Code,Type) values('D10102','����')
insert into Dictionary(Code,Type) values('D10103','��Ե��')
insert into Dictionary(Code,Type) values('D10104','����')
insert into Dictionary(Code,Type) values('D10105','�߼�')
insert into Dictionary(Code,Type) values('D10106','����')
insert into Dictionary(Code,Type) values('D10107','���滷��')
--ȱ�ݵȼ��������̶�1�¡�1�ܡ�1�죩
insert into Dictionary(Code,Type) values('D20101','��ȱ��')
insert into Dictionary(Code,Type) values('D20102','һ��ȱ��')
insert into Dictionary(Code,Type) values('D20103','����ȱ��')
insert into Dictionary(Code,Type) values('D20104','Σ��ȱ��')

--province
insert into Province(Name) values('������')
insert into Province(Name) values('�㽭ʡ')
insert into Province(Name) values('����ʡ')
insert into Province(Name) values('�Ĵ�ʡ')

--city
insert into City(Name,ProvinceId) values('������',1)
insert into City(Name,ProvinceId) values('����',2)
insert into City(Name,ProvinceId) values('֣����',3)
insert into City(Name,ProvinceId) values('�ɶ���',4)

--county
insert into County(Name,CityId) values('������',1)
insert into County(Name,CityId) values('�ĳ���',2)
insert into County(Name,CityId) values('������',3)
insert into County(Name,CityId) values('�¶���',4)

--organization
insert into Company(Name) values('����Ͱ�')

insert into Department(Name,CompanyId) values('���۲�',1)
insert into Department(Name,CompanyId) values('������',1)

insert into [Group](Name,DepartmentId) values('����һ��',1)
insert into [Group](Name,DepartmentId) values('���۶���',1)
insert into [Group](Name,DepartmentId) values('����һ��',2)
insert into [Group](Name,DepartmentId) values('��������',2)

insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId) values('����Խ',1,1,1,1)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId) values('������',0,1,1,1)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId) values('������',0,2,1,1)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId) values('���',0,2,1,1)

--user
insert into [User](UserName,Password,CreateTime,Available,EmployeeId) values('yyx','666','2018-2-2',1,1)

--PatrolRoute
insert into PatrolRoute(Name) values('��·һ')
insert into PatrolRoute(Name) values('��·��')
insert into PatrolRoute(Name) values('��·��')

--PatrolPoint
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId) values('001','120.1','34.1',1,1)
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId) values('002','120.2','34.2',1,1)
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId) values('003','120.3','34.3',2,2)
insert into PatrolPoint(PoleTowerNumber,Longitude,Latitude,CountyId,PatrolPointTypeId) values('004','120.4','34.4',2,2)

--PatrolPoint_PatrolRoute
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(1,1)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(2,1)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(2,2)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(3,2)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(3,3)
insert into [PatrolPoint_PatrolRoute](PatrolPoint_Id,PatrolRoute_Id) values(4,3)

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