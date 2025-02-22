
[Serializable]
internal class err : Exception
{
    public err()
    {
    }

    public err(string? message) : base(message)
    {
    }

    public err(string? message, Exception? innerException) : base(message, innerException)
    {
    }
}