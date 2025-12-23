import React from 'react';
import ReactMarkdown from 'react-markdown';

interface FormattedTextProps {
  text: string;
  className?: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text, className = "" }) => {
  if (!text) return null;

  return (
    <div className={`formatted-text ${className}`}>
      <ReactMarkdown
        components={{
          h1: ({node, ...props}) => <h1 className="text-2xl font-bold text-indigo-900 mt-6 mb-4 border-b border-indigo-100 pb-2" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-xl font-bold text-slate-800 mt-5 mb-3" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-lg font-semibold text-slate-700 mt-4 mb-2" {...props} />,
          p: ({node, ...props}) => <p className="mb-3 leading-relaxed text-slate-700" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-700" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 space-y-1 text-slate-700" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-200 pl-4 italic my-4 text-slate-600 bg-slate-50 py-2 rounded-r" {...props} />,
          code: ({node, ...props}) => <code className="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono text-pink-600" {...props} />,
          pre: ({node, ...props}) => <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 text-sm" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-slate-900" {...props} />,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default FormattedText;