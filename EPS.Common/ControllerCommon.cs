using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.Common
{
    public class ControllerCommon
    {
        /// <summary>
        /// 列表页容量
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/21 21:42
        /// 修改者：
        /// 修改时间：
        public static int PageSize
        {
            get
            {
                var result = (ConfigurationManager.AppSettings["PageSize"] ?? string.Empty);
                if (!int.TryParse(result, out int pageSize))
                {
                    return 15;
                }

                return pageSize;
            }
        }

        /// <summary>
        /// 字段UserSessionKey
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/21 21:43
        /// 修改者：
        /// 修改时间：
        public const string UserSessionKey = "UserSession";
    }
}
