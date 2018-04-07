using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EPS.UI.Portal.Models
{
    public class StatisticModel
    {
        /// <summary>
        /// 计数
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 10:57
        /// 修改者：
        /// 修改时间：
        public int Count { get; set; }

        /// <summary>
        /// 年份
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 10:57
        /// 修改者：
        /// 修改时间：
        public int Year { get; set; }

        /// <summary>
        /// 月份
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 10:57
        /// 修改者：
        /// 修改时间：
        public int Month { get; set; }

        /// <summary>
        /// 年月
        /// </summary>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 10:57
        /// 修改者：
        /// 修改时间：
        public string YearMonth { get; set; }

        /// <summary>
        /// 通过年份和月份获得年月字符串
        /// </summary>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/4/7 11:00
        /// 修改者：
        /// 修改时间：
        public string GetYearMonth()
        {
            string year = Year.ToString();
            string month = Month.ToString();

            return year + "." + month;
        }
    }
}