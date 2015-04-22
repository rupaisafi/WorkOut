using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace IQrasys.Models
{
    public class MaterModel
    {
        [Required(ErrorMessage = "{0} is required")]
        public int id { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public int volume { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public string type { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public string image { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public int parentId { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public string useFunction { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public string description { get; set; }
    }

    public class LocationArea
    {
        public int Id { get; set; }
        public int Volume { get; set; }
        public string Type { get; set; }
        public string Image { get; set; }
        public int ParentId { get; set; }
        public string UseFunction { get; set; }
        public string Description { get; set; }
    }
}