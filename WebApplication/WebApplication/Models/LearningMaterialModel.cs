using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    public class LearningMaterialModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; } 
        public string Language { get; set; }
        public string ProficiencyLevel { get; set; } 
    }
}