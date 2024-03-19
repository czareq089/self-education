using Microsoft.Xna.Framework.Graphics;

namespace Test.Content.obj.Player;

public class Player
{
    public Texture2D Texture { get; set; }
    public Vector2 Position { get; set; }
    
    public void Draw(SpriteBatch spriteBatch)
    {
        spriteBatch.Draw(Texture, Position, Color.White);
    }
    
}