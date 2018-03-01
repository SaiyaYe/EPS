using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EPS.Common
{
    public class ServiceResultList<T>
    {
        public List<T> Result { get; set; }

        public int TotalCount { get; set; }

        public bool State { get; set; }

        public string Message { get; set; }
    }
}
