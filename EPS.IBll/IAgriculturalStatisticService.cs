using EPS.ASModel;
using EPS.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IAgriculturalStatisticService : IBaseService<AgriculturalStatistic>
    {
        ServiceResultList<AgiculturalRagionalStatistic> AgiculturalRagionalStatistic();
    }
}
