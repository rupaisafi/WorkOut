using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace IQrasys.Models
{
    public class MyDataContext:DbContext
    {
        public DbSet<LocationArea> LocationArea { get; set; }
    }
}