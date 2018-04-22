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

        /// <summary>
        /// 空间参考ID
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 17:33
        /// 修改者：
        /// 修改时间：
        public enum SpatialReferenceID
        {
            GCS_Beijing_1954 = 4214,
            GCS_WGS_1984 = 4326,
            GCS_China_Geodetic_Coordinate_System_2000 = 4490,
            GCS_New_Beijing = 4555,
            GCS_Xian_1980 = 4610,
            WGS_1984_World_Mercator = 3395
        }

        public static Dictionary<string, string> Color
        {
            get
            {
                return new Dictionary<string, string>
                {
                    { "red", "#f56954" },
                    { "orange","#f39c12"},
                    { "green", "#00a65a" },
                    { "lightblue", "#00c0ef" },
                    { "darkblue", "#3c8dbc" },
                    { "grey", "#d2d6de" },
                };
            }
        }
    }
}
