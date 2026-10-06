import React, { useState, useEffect } from 'react';
import { DollarSign, ArrowUpRight, ArrowDownRight, Wallet, Plus, Trash2, X, Lock, Eye, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export default function Accounts() {
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'income',
    category: 'Fee Collection'
  });

  // Load saved transactions on mount
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("schoolTransactions")) || [];
    setTransactions(savedTransactions);
    
    // Check if previously unlocked in session storage
    const sessionUnlocked = sessionStorage.getItem("accountsUnlocked");
    if (sessionUnlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTx = {
      id: Date.now(),
      title: formData.title,
      amount: parseFloat(formData.amount),
      type: formData.type,
      category: formData.category,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newTx, ...transactions];
    setTransactions(updated);
    localStorage.setItem("schoolTransactions", JSON.stringify(updated));

    alert("Transaction added successfully!");
    setFormData({ title: '', amount: '', type: 'income', category: 'Fee Collection' });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction record?")) {
      const updated = transactions.filter(t => t.id !== id);
      setTransactions(updated);
      localStorage.setItem("schoolTransactions", JSON.stringify(updated));
    }
  };

  const handleToggleUnlock = () => {
    const nextState = !isUnlocked;
    setIsUnlocked(nextState);
    sessionStorage.setItem("accountsUnlocked", nextState ? "true" : "false");
  };

  // Calculations (Only meaningful when unlocked, or computed fresh)
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  return (
    <div className="space-y-6">
      
      {/* Top Header & Controls */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Financial Ledger & Accounts</h3>
          <p className="text-xs text-slate-500">Confidential institutional revenue & expenditure control panel.</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Admin Reveal / Calculate Toggle Button */}
          <button 
            onClick={handleToggleUnlock}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-2 shadow-sm ${
              isUnlocked 
                ? 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {isUnlocked ? <EyeOff size={16} /> : <Eye size={16} />}
            {isUnlocked ? 'Hide Financials & Lock' : 'Calculate & Reveal Financials'}
          </button>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <Plus size={16} /> Add Transaction
          </button>
        </div>
      </div>

      {/* Conditional Rendering: Metric Cards & Transactions Table */}
      {!isUnlocked ? (
        /* Locked State View */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-16 text-center space-y-4">
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Lock size={30} />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h4 className="font-bold text-base text-slate-800">Financial Data is Protected</h4>
            <p className="text-xs text-slate-500">
              Balances, income charts, and transaction ledger details remain hidden until you explicitly click **"Calculate & Reveal Financials"** above.
            </p>
          </div>
          <button 
            onClick={handleToggleUnlock}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-2xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Eye size={16} /> Reveal Now
          </button>
        </div>
      ) : (
        /* Unlocked State View */
        <div className="space-y-6 animate-fadeIn">
          
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Net Balance</p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">Rs. {totalBalance.toLocaleString()}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Wallet size={22} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Income</p>
                <h3 className="text-2xl font-black text-emerald-600 mt-1">+ Rs. {totalIncome.toLocaleString()}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ArrowUpRight size={22} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Expenses</p>
                <h3 className="text-2xl font-black text-red-600 mt-1">- Rs. {totalExpenses.toLocaleString()}</h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <ArrowDownRight size={22} />
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-base text-slate-800">Recent Financial Transactions</h3>
                <p className="text-xs text-slate-400">Showing active calculated ledger entries</p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-700 font-bold px-3 py-1 rounded-lg">
                {transactions.length} Records Found
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                    <th className="p-4 pl-6">Description / Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Date</th>
                    <th className="p-4 text-center pr-6">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {transactions.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="p-12 text-center text-slate-400">
                        No transactions available. Click "Add Transaction" to create entries.
                      </td>
                    </tr>
                  ) : (
                    transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-4 pl-6 font-bold text-slate-900 flex items-center space-x-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                            tx.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {tx.type === 'income' ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                          </div>
                          <span>{tx.title}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                            {tx.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
                            tx.type === 'income' ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                          }`}>
                            {tx.type}
                          </span>
                        </td>
                        <td className={`p-4 font-black ${tx.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                          {tx.type === 'income' ? '+' : '-'} Rs. {tx.amount.toLocaleString()}
                        </td>
                        <td className="p-4 text-slate-500 text-xs">{tx.date}</td>
                        <td className="p-4 text-center pr-6">
                          <button 
                            onClick={() => handleDelete(tx.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer inline-block"
                            title="Delete Transaction"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* Add Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-200">
            <div className="flex justify-between items-center px-6 py-5 bg-slate-900 text-white">
              <div>
                <h3 className="font-bold text-lg">Add New Transaction</h3>
                <p className="text-xs text-slate-400">Record school revenue or expenditure</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-2">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddTransaction} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Transaction Title *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Monthly Fee Collection" 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Type *</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 font-bold"
                  >
                    <option value="income">Income (+)</option>
                    <option value="expense">Expense (-)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Category</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fees, Salary" 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Amount (Rs.) *</label>
                <input 
                  type="number" 
                  required 
                  placeholder="e.g. 50000" 
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg cursor-pointer"
                >
                  Save Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}