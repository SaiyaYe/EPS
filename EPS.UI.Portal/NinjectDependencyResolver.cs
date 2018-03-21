using EPS.BLL;
using EPS.IBLL;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectDependencyResolver()
        {
            kernel = new StandardKernel(); //跟其它教程不同的是把IKernel放这儿实例化
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        /// <summary>
        /// 添加绑定
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/21 13:58
        /// 修改者：
        /// 修改时间：
        private void AddBindings()
        {
            //kernel.Bind<IProductRepository>().To<EFProductRepository>();
            kernel.Bind<IMenuService>().To<MenuService>();
            kernel.Bind<IDictionaryService>().To<DictionaryService>();
            kernel.Bind<IUserService>().To<UserService>();
            kernel.Bind<ICompanyService>().To<CompanyService>();
            kernel.Bind<IDepartmentService>().To<DepartmentService>();
            kernel.Bind<IGroupService>().To<GroupService>();
            kernel.Bind<IEmployeeService>().To<EmployeeService>();
            kernel.Bind<IPatrolPointService>().To<PatrolPointService>();
            kernel.Bind<IPatrolRouteService>().To<PatrolRouteService>();
            kernel.Bind<IPatrolSchemeService>().To<PatrolSchemeService>();
            kernel.Bind<IPatrolReportService>().To<PatrolReportService>();

            
            kernel.Bind<IPatrolReportService>().To<PatrolReportService>();
            kernel.Bind<IPatrolReportService>().To<PatrolReportService>();
        }
    }
}