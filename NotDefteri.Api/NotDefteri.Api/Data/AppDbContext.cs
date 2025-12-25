using Microsoft.EntityFrameworkCore;
using NotDefteri.Api.Models;

namespace NotDefteri.Api.Data;

// Buradaki ': DbContext' ifadesi çok kritik!
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Note> Notes { get; set; }
}