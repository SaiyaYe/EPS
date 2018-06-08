using EPS.BLL;
using EPS.Common;
using EPS.IBLL;
using EPS.ASModel;
using EPS.UI.Portal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EPS.UI.Portal.Controllers
{
    public class BaseController : Controller
    {
        //[Ninject.Inject]
        public IMenuService MenuService = new MenuService();//{ get; set; }

        public BaseController()
        {
            List<Menu> menuList = MenuService.GetElementList().Result;
            List<MenuModel> modelList = new List<MenuModel>();
            foreach (var menu in menuList)
            {
                MenuModel model = new MenuModel
                {
                    Id = menu.Id,
                    Name = menu.Name,
                    ParentId = menu.ParentId,
                    Link = menu.Link,
                    Children = new List<MenuModel>()
                };

                if (menu.ParentId == 0)
                {
                    modelList.Add(model);
                    continue;
                }

                var parent = modelList.Find(u => u.Id == menu.ParentId);
                parent.Children.Add(model);

            }

            ViewBag.nav = modelList;
            ViewBag.UserSession = UserSession;
        }

        /// <summary>
        /// 分页模型
        /// </summary>
        /// <param name="currentCount">当前获取的数据条数</param>
        /// <param name="totalCount">数据总条数</param>
        /// <param name="pageIndex">页码号</param>
        /// <param name="pageSize">页容量</param>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/24 10:15
        /// 修改者：
        /// 修改时间：
        protected void GetPaginationModel(int currentCount, int totalCount, int pageIndex, int pageSize = 15)
        {
            var pageModel = new PaginationModel()
            {
                CurrentCount = currentCount,
                TotalCount = totalCount,
                TotalPageCount = (totalCount / pageSize + (totalCount % pageSize == 0 ? 0 : 1)),
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            ViewBag.PageModel = pageModel;
        }

        /// <summary>
        /// 用户会话
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/24 10:17
        /// 修改者：
        /// 修改时间：
        public UserSession UserSession
        {
            get
            {
                if (System.Web.HttpContext.Current.Session[ControllerCommon.UserSessionKey] == null)
                {
                    return new UserSession();
                }

                return System.Web.HttpContext.Current.Session[ControllerCommon.UserSessionKey].ToString().Deserialize<UserSession>();
            }
        }
    }
}