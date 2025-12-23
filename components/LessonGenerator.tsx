import React, { useState, useEffect } from 'react';
import { CURRICULUM, THEMES } from '../constants';
import { generateLessonContent } from '../services/geminiService';
import { GradeLevel, GeneratedLesson } from '../types';
import Loading from './Loading';
import FormattedText from './FormattedText';

const LessonGenerator: React.FC = () => {
  // Hardcoded to Grade VII
  const grade = GradeLevel.VII;
  
  // State for selections
  const [selectedThemeId, setSelectedThemeId] = useState<string>(THEMES[0].id);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  
  // State for content
  const [lesson, setLesson] = useState<GeneratedLesson | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Custom fields for the print view
  const [teacherName, setTeacherName] = useState('');
  const [schoolName, setSchoolName] = useState('');

  // Derived state: Available topics based on theme
  const availableTopics = CURRICULUM.filter(topic => topic.themeId === selectedThemeId);

  // Set default topic when theme changes
  useEffect(() => {
    if (availableTopics.length > 0) {
      setSelectedTopic(availableTopics[0].name);
    } else {
      setSelectedTopic("");
    }
  }, [selectedThemeId]);

  const handleGenerate = async () => {
    if (!selectedTopic) return;
    setLoading(true);
    setError(null);
    setLesson(null);
    try {
      const result = await generateLessonContent(selectedTopic, grade);
      setLesson(result);
    } catch (err: any) {
      setError(err.message || "Се појави грешка при генерирање на лекцијата.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 animate-fade-in">
       {/* Force Portrait specifically for this component */}
       <style>{`
        @media print {
            @page {
                size: portrait;
            }
        }
      `}</style>

      {/* Input Section - Hidden on Print */}
      <div className="print:hidden">
        <div className="border-b pb-4 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                📚 Генератор на лекции
                <span className="text-sm font-normal text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">VII Одд.</span>
            </h2>
            <p className="text-slate-500 mt-1">Изберете тема и лекција од наставната програма за 7-мо одделение.</p>
        </div>

        {/* Motivational Instruction for Teachers */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                    <p className="text-indigo-900 text-sm font-medium">
                        Осовременете ја наставата!
                    </p>
                    <p className="text-indigo-800 text-sm mt-1">
                        Оваа алатка е вашиот дигитален асистент за креирање иновативни содржини. Генерирајте структурирани лекции кои штедат време и овозможуваат <strong>покреативен пристап</strong> во пренесувањето на знаењето, следејќи ги современите образовни стандарди.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Theme Selector */}
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">1. Избери Наставна Тема</label>
                    <select 
                        value={selectedThemeId}
                        onChange={(e) => setSelectedThemeId(e.target.value)}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white font-medium text-slate-700"
                    >
                        {THEMES.map(theme => (
                        <option key={theme.id} value={theme.id}>{theme.title}</option>
                        ))}
                    </select>
                </div>

                {/* Topic Selector */}
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">2. Избери Лекција</label>
                    <select 
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-slate-700"
                        disabled={availableTopics.length === 0}
                    >
                        {availableTopics.map(topic => (
                        <option key={topic.id} value={topic.name}>{topic.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 pt-4 mt-2">
                 <p className="text-sm font-bold text-slate-500">Податоци за наставникот (за печатење):</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">Изготвил (Име)</label>
                        <input 
                            type="text" 
                            value={teacherName} 
                            onChange={(e) => setTeacherName(e.target.value)}
                            placeholder="Вашето име"
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-600 mb-1">ООУ</label>
                        <input 
                            type="text" 
                            value={schoolName} 
                            onChange={(e) => setSchoolName(e.target.value)}
                            placeholder="Име на училиштето"
                            className="w-full p-2 border border-slate-300 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-white text-sm"
                        />
                    </div>
                 </div>
            </div>

            <button
                onClick={handleGenerate}
                disabled={loading || !selectedTopic}
                className="w-full md:w-auto self-end px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors font-semibold shadow-sm mt-2"
            >
                {loading ? 'Се пишува...' : '✨ Генерирај Лекција'}
            </button>
        </div>

        {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
            <strong>Грешка:</strong> {error}
            <br/>
            <span className="text-sm opacity-80">Проверете дали е внесен API_KEY во Vercel Environment Variables.</span>
            </div>
        )}

        {loading && <Loading message="Наставникот ја подготвува лекцијата..." />}
      </div>

      {lesson && !loading && (
        <div className="mt-8 space-y-6 animate-slide-up print:mt-0">
          
          {/* Print Button - Hidden on Print */}
          <div className="print:hidden flex justify-end">
             <button 
                onClick={handlePrint}
                className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors shadow-lg"
             >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Печати PDF (Portret)
             </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm print:border-none print:shadow-none print:p-0">
            {/* Header for Screen View */}
            <div className="bg-gradient-to-r from-indigo-50 to-white p-6 border-b border-indigo-100 print:hidden">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">{lesson.title}</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">Цели:</span>
                <div className="flex flex-wrap gap-2">
                    {lesson.objectives.map((obj, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-medium border border-indigo-200">
                        {obj}
                    </span>
                    ))}
                </div>
              </div>
            </div>

            {/* PRINT HEADER TABLE - Visible ONLY on print */}
            <div className="hidden print:block mb-6 text-black">
                 <table className="w-full border-collapse border border-black mb-6 text-sm">
                    <tbody>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-slate-100 w-1/3">Предмет:</td>
                            <td className="border border-black p-2 w-2/3">Математика за VII одделение</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-slate-100">Тема:</td>
                            <td className="border border-black p-2 uppercase font-bold">{THEMES.find(t => t.id === selectedThemeId)?.title || "ГЕОМЕТРИЈА"}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-slate-100">Лекција:</td>
                            <td className="border border-black p-2 font-bold">{lesson.title}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-slate-100">Изготвил/-а:</td>
                            <td className="border border-black p-2">{teacherName || '__________________'}</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2 font-bold bg-slate-100">ООУ:</td>
                            <td className="border border-black p-2">{schoolName || '__________________'}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mb-4">
                    <p className="font-bold underline mb-2">Цели на часот:</p>
                    <ul className="list-disc pl-5">
                        {lesson.objectives.map((obj, idx) => (
                            <li key={idx} className="text-sm">{obj}</li>
                        ))}
                    </ul>
                </div>
                <hr className="border-black mb-4"/>
            </div>

            {/* CONTENT */}
            <div className="p-8 text-slate-700 leading-relaxed print:p-0 print:text-black">
              <FormattedText text={lesson.content} />
            </div>

            {/* PRINT FOOTER */}
            <div className="mt-8 pt-4 border-t border-black hidden print:block text-black">
                <div className="flex justify-between text-xs">
                    <p>Датум: ________________</p>
                    <p>Потпис: ________________</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonGenerator;