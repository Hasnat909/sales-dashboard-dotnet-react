var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add CORS for React
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Use CORS
app.UseCors("AllowReactApp");

app.UseAuthorization();
app.MapControllers();

// Debug: List all registered routes
app.MapGet("/debug/routes", () => "Controllers should be mapped");

// Test endpoint
app.MapGet("/", () => "Sales Dashboard API is running!");

app.Run();