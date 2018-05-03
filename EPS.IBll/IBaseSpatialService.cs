using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.IBLL
{
    public interface IBaseSpatialService<T> : IBaseService<T> where T : class, new()
    {
    }
}
