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
    }
}
