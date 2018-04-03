using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static EPS.Common.ControllerCommon;

namespace EPS.UI.Portal.Models
{
    public class PointModel
    {
        public PointModel()
        {
            Latitude = 0;
            Longitude = 0;
        }

        /// <summary>
        /// 纬度
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:04
        /// 修改者：
        /// 修改时间：
        public double Latitude { get; set; }

        /// <summary>
        /// 经度
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:05
        /// 修改者：
        /// 修改时间：
        public double Longitude { get; set; }

        /// <summary>
        /// 空间参考ID
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:05
        /// 修改者：
        /// 修改时间：
        public SpatialReferenceID SpatialReferenceID { get; set; }

        /// <summary>
        /// 获取wkt
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:05
        /// 修改者：
        /// 修改时间：
        public string GetWktPoint()
        {
            return string.Format("POINT({0} {1})", Longitude, Latitude);
        }
    }
}