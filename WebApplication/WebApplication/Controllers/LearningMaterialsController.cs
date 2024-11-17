using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Linq;
using System.Web.Http;
using WebApplication.Models;


namespace WebApplication.Controllers
{
    [RoutePrefix("api/materials")]
    public class LearningMaterialsController : ApiController
    {
        private readonly LearningMaterialsDbContext _db = new LearningMaterialsDbContext();

        [HttpGet]
        [Route("browse")]
        public IHttpActionResult GetMaterials([FromUri] string language, [FromUri] string category, [FromUri] string proficiency)
        {
            var materials = _db.LearningMaterials
                .Where(m => m.Language == language && m.Category == category && m.ProficiencyLevel == proficiency)
                .ToList();

            return Ok(materials);
        }
    }
}

