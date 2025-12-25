import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => { getNotesFromAPI(); }, []);

  const getNotesFromAPI = async () => {
    try {
      const response = await axios.get('https://localhost:7041/api/Notes');
      setNotes(response.data);
    } catch (error) { console.error("Api hatası:", error); }
  };

  const startEditing = (note) => {
    setEditingNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const noteData = { title, content };
    try {
      if (editingNote) {
        await axios.put(`https://localhost:7041/api/Notes/${editingNote.id}`, noteData);
        setEditingNote(null);
      } else {
        await axios.post("https://localhost:7041/api/Notes", noteData);
      }
      setTitle(''); setContent(''); getNotesFromAPI();
    } catch (error) { console.error("Hata:", error); }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`https://localhost:7041/api/Notes/${id}`);
      getNotesFromAPI();
    } catch (error) { console.error("Hata:", error); }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Not Defterim</h1>

        {/* Form Alanı */}
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-md mb-8 space-y-4">
          <input
            type="text"
            placeholder="Başlık yaz kanka..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Notun içeriği ne olsun?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition min-h-[100px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className={`flex-1 p-3 text-white font-semibold rounded-lg transition ${editingNote ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              {editingNote ? "Değişiklikleri Güncelle" : "Yeni Not Ekle"}
            </button>
            {editingNote && (
              <button
                type="button"
                onClick={() => { setEditingNote(null); setTitle(''); setContent(''); }}
                className="bg-gray-200 text-gray-700 px-6 rounded-lg hover:bg-gray-300 transition"
              >
                Vazgeç
              </button>
            )}
          </div>
        </form>

        {/* Liste Alanı */}
        <div className="grid gap-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500 flex justify-between items-start hover:shadow-md transition">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{note.title}</h3>
                <p className="text-gray-600 mt-2">{note.content}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => startEditing(note)}
                  className="text-blue-600 hover:bg-blue-50 p-2 rounded-md transition"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-md transition"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App