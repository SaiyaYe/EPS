using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.Common
{
    /// <summary>
    /// 类名称：Extend
    /// 命名空间：EPS.Common
    /// 类功能：扩展类，用于类方法的扩展
    /// </summary>
    /// 创建者：叶烨星
    /// 创建时间：2018/2/11 12:29
    /// 修改者：
    /// 修改时间：
    public static class Extend
    {
        public static bool IsEmptyOrNull(this string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return true;
            }

            return value.Trim().Length == 0;
        }
    }
}
