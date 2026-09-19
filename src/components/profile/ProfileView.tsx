import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, KeyRound, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { UserProfile } from '../../types';

export const ProfileView: React.FC = () => {
  const { profile, updateProfile, navigateTo } = useApp();
  const [editForm, setEditForm] = useState<UserProfile>({ ...profile });

  const computeInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2 && parts[0] && parts[1]) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase() || 'KS';
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: UserProfile = {
      ...editForm,
      avatarInitials: computeInitials(editForm.name),
    };
    updateProfile(updated);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-xs shrink-0">
              {computeInitials(editForm.name)}
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">Member Profile</h1>
              <p className="text-xs text-slate-500">Manage your member registration info</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
            Active
          </span>
        </div>

        <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
          <div>
            <label htmlFor="name-input" className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-teal-700" />
              <span>Full Name</span>
            </label>
            <input
              id="name-input"
              type="text"
              required
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              className="w-full px-3.5 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone-input" className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Phone Number (WhatsApp)</span>
              </label>
              <input
                id="phone-input"
                type="tel"
                inputMode="tel"
                required
                value={editForm.phone}
                onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                className="w-full px-3.5 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
              />
            </div>
            <div>
              <label htmlFor="email-input" className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-700" />
                <span>Email Address</span>
              </label>
              <input
                id="email-input"
                type="email"
                inputMode="email"
                required
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                className="w-full px-3.5 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city-input" className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>City / Town</span>
              </label>
              <input
                id="city-input"
                type="text"
                required
                value={editForm.city}
                onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
                className="w-full px-3.5 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
              />
            </div>
            <div>
              <label htmlFor="referral-input" className="block text-slate-700 font-bold mb-1.5 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-teal-700" />
                <span>Referral Code</span>
              </label>
              <input
                id="referral-input"
                type="text"
                value={editForm.referralCode}
                onChange={(e) =>
                  setEditForm({ ...editForm, referralCode: e.target.value.toUpperCase() })
                }
                className="w-full px-3.5 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-hidden font-mono uppercase"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <span className="block text-slate-700 font-bold mb-2">
              Community Channel Memberships:
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={editForm.whatsappJoined}
                  onChange={(e) => setEditForm({ ...editForm, whatsappJoined: e.target.checked })}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span className="font-medium text-xs text-slate-800 flex items-center gap-1">
                  <span>WhatsApp Community</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              </label>
              <label className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition">
                <input
                  type="checkbox"
                  checked={editForm.telegramJoined}
                  onChange={(e) => setEditForm({ ...editForm, telegramJoined: e.target.checked })}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span className="font-medium text-xs text-slate-800 flex items-center gap-1">
                  <span>Telegram Channel</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                </span>
              </label>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigateTo('dashboard')}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition shadow-xs active:scale-95"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
