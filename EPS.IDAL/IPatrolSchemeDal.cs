using EPS.Common;
using EPS.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IDAL
{
    public interface IPatrolSchemeDal : IBaseDal<PatrolScheme>
    {
        /// <summary>
        /// 更新巡检计划
        /// </summary>
        /// <param name="scheme">巡检计划</param>
        /// <returns></returns>
        /// 创建者：叶烨星
        /// 创建时间：2018/3/14 15:40
        /// 修改者：
        /// 修改时间：
        ServiceResult<bool> UpdateScheme(PatrolScheme scheme);
    }
}
