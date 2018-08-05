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

insert into Menu(Name,ParentId) values('�ؼ���Ϣϵͳ',0)
insert into Menu(Name,ParentId) values('��׼ũҵ����',0)
insert into Menu(Name,ParentId) values('ũ��Ʒ�۸�',0)
insert into Menu(Name,ParentId) values('ũҵ����insurance',0)
insert into Menu(Name,ParentId) values('ũҵ�����ݷ���',0)
insert into Menu(Name,ParentId) values('ũҵ������ƽ̨����',0)
insert into Menu(Name,ParentId) values('ũҵ�ɺ�ң�м��',0)
insert into Menu(Name,ParentId) values('ũ���ﲡ�溦�������',0)
insert into Menu(Name,ParentId) values('��ά����ϵͳ',0)
insert into Menu(Name,ParentId) values('ʳƷ׷��ƽ̨',0)
insert into Menu(Name,ParentId) values('������Դ����ؽ���',0)

insert into Menu(Name,ParentId,link) values('�ؼ���Ϣ',1,'')
insert into Menu(Name,ParentId,link) values('��������',1,'')
insert into Menu(Name,ParentId,link) values('����������״',1,'')
insert into Menu(Name,ParentId,link) values('���صǼ�',1,'')
insert into Menu(Name,ParentId,link) values('����ͳ��',1,'')
insert into Menu(Name,ParentId,link) values('�ؼ���������',1,'')

insert into Menu(Name,ParentId,link) values('����ũ��Ʒͳ��',2,'Analysis/ChinaMapDemo')
insert into Menu(Name,ParentId,link) values('�ٶȵ�ͼdemo',2,'Analysis/BaiduMapDemo')

insert into Menu(Name,ParentId,link) values('ũ��Ʒ�۸�',3,'')
insert into Menu(Name,ParentId,link) values('ũҵ����insurance',4,'')
insert into Menu(Name,ParentId,link) values('ũҵ�����ݷ���',5,'')
insert into Menu(Name,ParentId,link) values('ũҵ������ƽ̨����',6,'')
insert into Menu(Name,ParentId,link) values('ũҵ�ɺ�ң�м��',7,'')
insert into Menu(Name,ParentId,link) values('ũ���ﲡ�溦�������',8,'')
insert into Menu(Name,ParentId,link) values('��ά����ϵͳ',9,'')
insert into Menu(Name,ParentId,link) values('ʳƷ׷��ƽ̨',10,'')
insert into Menu(Name,ParentId,link) values('������Դ����ؽ���',11,'')

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