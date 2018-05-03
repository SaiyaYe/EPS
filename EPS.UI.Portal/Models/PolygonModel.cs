using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using static EPS.Common.ControllerCommon;

namespace EPS.UI.Portal.Models
{
    public class PolygonModel
    {
        public PolygonModel()
        {
            PolylineList = new List<PolylineModel>();
        }

        /// <summary>
        /// 顺序点集
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:05
        /// 修改者：
        /// 修改时间：
        public List<PolylineModel> PolylineList { get; set; }

        /// <summary>
        /// 空间参考ID
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:06
        /// 修改者：
        /// 修改时间：
        public SpatialReferenceID SpatialReferenceID { get; set; }

        /// <summary>
        /// 获取wkt
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/31 20:07
        /// 修改者：
        /// 修改时间：
        public string GetWktPolyline()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("POLYGON(");

            foreach (var polyline in PolylineList)
            {
                sb.Append("(");

                foreach (var point in polyline.PointList)
                {
                    double longitude = point.Longitude;
                    double latitude = point.Latitude;
                    sb.Append(string.Format("{0} {1},", longitude, latitude));
                }

                sb.Remove(sb.Length - 1, 1);
                sb.Append("),");
            }

            sb.Remove(sb.Length - 1, 1);
            sb.Append(")");

            return sb.ToString();
        }
    }
}