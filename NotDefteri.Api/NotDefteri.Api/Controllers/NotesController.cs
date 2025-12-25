using Microsoft.AspNetCore.Mvc;
using NotDefteri.Api.Data;
using NotDefteri.Api.Models;
namespace NotDefteri.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NotesController(AppDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult GetNotes()
        {
            var _notes = _context.Notes.ToList();
            return Ok(_notes);
        }
        [HttpPost]
        public IActionResult AddNote([FromBody] Note newNote)
        {

            _context.Notes.Add(newNote);
            _context.SaveChanges();
            return Ok(newNote);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteNote(int id) { 
        var note=_context.Notes.Find(id);
            if (note == null) return NotFound();
            _context.Notes.Remove(note);
            _context.SaveChanges();
            return Ok();
        }
        [HttpPut("{id}")]
        public IActionResult UpdateResult(int id, [FromBody] Note updatedNote) {
            var note=_context.Notes.Find(id);
            if (note == null) NotFound();
            note.Title = updatedNote.Title;
            note.Content = updatedNote.Content;
            _context.SaveChanges();
            return Ok(note);
        }
    }
 }
