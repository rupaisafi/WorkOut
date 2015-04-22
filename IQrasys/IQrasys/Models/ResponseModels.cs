using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IQrasys.Models
{
    public class Result
    {
        public bool error { get; set; }
        public object model { get; set; }
        public string message { get; set; }
    }

    public class Site
    {
        public int id { get; set; }
        public int volume { get; set; }
        public string type { get; set; }
        public string image { get; set; }
        public int parentId { get; set; }
        public string useFunction { get; set; }
        public string description { get; set; }
    }
}