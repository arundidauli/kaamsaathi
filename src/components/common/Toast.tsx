import React, { useEffect } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useToast();

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      hideToast();
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast, hideToast]);

  if (!toast) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 max-w-sm transform transition-all duration-300"
    >
      {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
      {toast.type === 'info' && <Info className="w-5 h-5 text-sky-400 shrink-0" />}
      {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
      <p className="text-xs sm:text-sm font-medium text-slate-100">{toast.text}</p>
      <button
        onClick={hideToast}
        className="ml-auto text-slate-400 hover:text-white p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
