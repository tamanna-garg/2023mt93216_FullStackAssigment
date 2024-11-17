using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebApplication.Models;


namespace WebApplication.Controllers
{
    [RoutePrefix("api/language")]
    public class LanguageController : ApiController
    {
        private static readonly List<LanguageModel> Languages = new List<LanguageModel>
    {
        new LanguageModel { Id = 1, Name = "English" },
        new LanguageModel { Id = 2, Name = "Spanish" },
        new LanguageModel { Id = 3, Name = "French" }
    };

        [HttpGet]
        [Route("all")]
        public IHttpActionResult GetLanguages()
        {
            return Ok(Languages);
        }

        [HttpPost]
        [Route("select")]
        public IHttpActionResult SelectLanguage([FromBody] LanguageModel selectedLanguage)
        {
            // Here you could update the user's language preference in the database.
            return Ok($"Language {selectedLanguage.Name} selected successfully.");
        }
    }
}
