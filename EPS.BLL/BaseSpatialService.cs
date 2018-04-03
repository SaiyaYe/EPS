using EPS.IBLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.BLL
{
    public class BaseSpatialService<T> : BaseService<T>, IBaseSpatialService<T> where T : class, new()
    {
    }
}
