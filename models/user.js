const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    events: [events],
    googleId: String
}, {
    timestamps: true
});