import React, { useState } from 'react';
import { Plus, Pause, Play, Trash2 } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { OpportunityCategory } from '../../types';

interface NewCampaignState {
  title: string;
  category: OpportunityCategory;
  reward: number;
  timeEstimate: string;
  description: string;
  targetMembers: number;
}

const INITIAL_FORM: NewCampaignState = {
  title: '',
  category: 'Social Follow',
  reward: 15,
  timeEstimate: '3 min',
  description: '',
  targetMembers: 50,
};

export const AdminView: React.FC = () => {
  const {
    opportunities,
    navigateTo,
    createCampaign,
    toggleCampaignStatus,
    deleteCampaign,
  } = useApp();

  const [newCampaign, setNewCampaign] = useState<NewCampaignState>(INITIAL_FORM);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = createCampaign(newCampaign);
    if (success) {
      setNewCampaign(INITIAL_FORM);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
              Admin Prototype
            </span>
            <span className="text-xs font-bold text-amber-900">Campaign & Follower Management</span>
          </div>
          <h1 className="text-2xl font-black text-slate-900 mt-1">Admin Desi Dashboard</h1>
          <p className="text-xs text-slate-600">
            Create real follower campaigns (Instagram / YouTube), launch surveys, and reward verified Indian members in ₹ Rupees.
          </p>
        </div>
        <button
          onClick={() => navigateTo('dashboard')}
          className="px-4 py-2 text-xs font-bold bg-white border border-slate-300 text-slate-800 rounded-xl hover:bg-slate-50 transition"
        >
          Go to Member View
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Total Desi Members</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">127</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Active Members</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">84</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Campaigns</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{opportunities.length}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Follows & Tasks</p>
          <p className="text-2xl font-bold text-teal-700 mt-1">342</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
          <p className="text-xs text-slate-500 font-medium">Rewards Distributed</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">₹18,450</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="w-4 h-4 text-teal-700" />
            <h2 className="text-sm font-bold text-slate-900">Create Follower or Task Campaign</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <div>
              <label htmlFor="campaign-title" className="block text-slate-700 font-bold mb-1">
                Campaign Name
              </label>
              <input
                id="campaign-title"
                type="text"
                required
                placeholder="e.g. Follow Indie Artist on Instagram"
                value={newCampaign.title}
                onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="campaign-category" className="block text-slate-700 font-bold mb-1">
                  Category
                </label>
                <select
                  id="campaign-category"
                  value={newCampaign.category}
                  onChange={(e) =>
                    setNewCampaign({
                      ...newCampaign,
                      category: e.target.value as OpportunityCategory,
                    })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-white focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                >
                  <option value="Social Follow">Social Follow (Real Follower)</option>
                  <option value="Survey">Survey</option>
                  <option value="App Testing">App Testing</option>
                  <option value="Website Feedback">Website Feedback</option>
                  <option value="Product Testing">Product Testing</option>
                  <option value="Local Campaign">Local Campaign</option>
                </select>
              </div>

              <div>
                <label htmlFor="campaign-reward" className="block text-slate-700 font-bold mb-1">
                  Reward (₹ Rupee)
                </label>
                <input
                  id="campaign-reward"
                  type="number"
                  min="1"
                  required
                  value={newCampaign.reward}
                  onChange={(e) =>
                    setNewCampaign({ ...newCampaign, reward: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="campaign-time" className="block text-slate-700 font-bold mb-1">
                  Estimated Time
                </label>
                <input
                  id="campaign-time"
                  type="text"
                  placeholder="e.g. 2 min"
                  value={newCampaign.timeEstimate}
                  onChange={(e) =>
                    setNewCampaign({ ...newCampaign, timeEstimate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                />
              </div>

              <div>
                <label htmlFor="campaign-targets" className="block text-slate-700 font-bold mb-1">
                  Target Followers / Members
                </label>
                <input
                  id="campaign-targets"
                  type="number"
                  min="1"
                  value={newCampaign.targetMembers}
                  onChange={(e) =>
                    setNewCampaign({ ...newCampaign, targetMembers: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label htmlFor="campaign-desc" className="block text-slate-700 font-bold mb-1">
                Handle / Channel & Instructions
              </label>
              <textarea
                id="campaign-desc"
                rows={2}
                placeholder="Share Instagram / YouTube handle or survey URL..."
                value={newCampaign.description}
                onChange={(e) =>
                  setNewCampaign({ ...newCampaign, description: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-600 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition text-xs shadow-xs"
            >
              Launch Desi Campaign
            </button>
          </form>
        </div>

        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-slate-900">
              Active Listed Campaigns ({opportunities.length})
            </h2>
            <span className="text-xs text-slate-400">Controls</span>
          </div>

          <div className="space-y-2.5">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="p-3.5 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 text-xs bg-slate-50/50"
              >
                <div className="space-y-0.5 max-w-[65%]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 truncate">{opp.title}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        opp.status === 'active'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {opp.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {opp.category} • ₹{opp.reward} • {opp.participantsCount} participants
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => toggleCampaignStatus(opp.id)}
                    aria-label={opp.status === 'active' ? 'Pause campaign' : 'Activate campaign'}
                    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition"
                  >
                    {opp.status === 'active' ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => deleteCampaign(opp.id)}
                    aria-label="Delete campaign"
                    className="p-2 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
