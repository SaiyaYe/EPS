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
insert into Menu(Name,ParentId,Link) values('Ѳ�����⴦��',3,'Transaction/ProblemHandledList')
insert into Menu(Name,ParentId,Link) values('�ռ���Ϣ��ѯ',3,'Transaction/SpatialInformationQuery')
insert into Menu(Name,ParentId,Link) values('���·������',3,'Transaction/Navigation')
insert into Menu(Name,ParentId,Link) values('��ͼ����',3,'Transaction/Measure')

insert into Menu(Name,ParentId,Link) values('��ѯ',4,'')
insert into Menu(Name,ParentId,Link) values('���˻�Ӱ���е�������',4,'')
insert into Menu(Name,ParentId,Link) values('����ȱ�����ͷ���',4,'')
insert into Menu(Name,ParentId,Link) values('����ȱ�ݿռ�ֲ�����',4,'')
insert into Menu(Name,ParentId,Link) values('����ȱ��ʱ��仯����',4,'')
insert into Menu(Name,ParentId,Link) values('��·���շ���',4,'Analysis/RiskAnalysis')
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

--organization
insert into Company(Name,Number) values('����Ͱ�',1)

insert into Department(Name,CompanyId,Number) values('���۲�',1,1)
insert into Department(Name,CompanyId,Number) values('������',1,2)

insert into [Group](Name,DepartmentId,Number,CompanyId) values('����һ��',1,1,1)
insert into [Group](Name,DepartmentId,Number,CompanyId) values('���۶���',1,2,1)
insert into [Group](Name,DepartmentId,Number,CompanyId) values('����һ��',2,3,1)
insert into [Group](Name,DepartmentId,Number,CompanyId) values('��������',2,4,1)

insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('Ҷ����',1,1,1,1,1)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('��һ��',1,2,1,1,2)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('����Խ',1,1,1,1,3)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('������',0,1,1,1,4)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('������',0,2,1,1,5)
insert into Employee(Name,IsTeamLeader,GroupId,DepartmentId,CompanyId,Number) values('���',0,2,1,1,6)

--user
insert into [User](UserName,Password,CreateTime,Available,EmployeeId) values('yyx','666','2018-2-2',1,1)