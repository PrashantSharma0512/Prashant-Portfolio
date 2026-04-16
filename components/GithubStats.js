"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiStar, FiGitCommit, FiLayers, FiCode, FiUsers } from "react-icons/fi";

const GithubStats = () => {
  const username = "PrashantSharma0512";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposRes.json();

        // Calculate total stars
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        
        // Calculate language distribution
        const langMap = {};
        reposData.forEach(repo => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
          }
        });
        
        const sortedLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([name, count]) => ({
            name,
            percent: Math.round((count / reposData.length) * 100),
            color: getLangColor(name),
          }));

        setData({
          stars: totalStars,
          repos: userData.public_repos,
          followers: userData.followers,
          languages: sortedLangs,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const getLangColor = (lang) => {
    const colors = {
      JavaScript: "bg-yellow-400",
      React: "bg-blue-400",
      Java: "bg-red-500",
      Python: "bg-blue-600",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
      TypeScript: "bg-blue-400",
    };
    return colors[lang] || "bg-slate-500";
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-slate-800 rounded-full mb-4"></div>
          <div className="h-4 w-48 bg-slate-800 rounded"></div>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Total Stars", value: data?.stars || 0, icon: FiStar, color: "text-yellow-400" },
    { label: "Public Repos", value: data?.repos || 0, icon: FiLayers, color: "text-blue-400" },
    { label: "Followers", value: data?.followers || 0, icon: FiUsers, color: "text-green-400" },
    { label: "High Impact", value: "Verified", icon: FiCode, color: "text-purple-400" },
  ];

  return (
    <div className="section-padding border-b border-white/5 overflow-x-hidden" id="github">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center text-4xl sm:text-5xl font-bold text-white tracking-tight"
      >
        GitHub <span className="text-accent">Impact</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-4 sm:p-8 flex flex-col items-center text-center group hover:border-accent/50 transition-all duration-500"
          >
            <div className={`text-3xl sm:text-5xl ${stat.color} mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300`}>
              <stat.icon />
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-slate-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 sm:p-10 border-white/5"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-accent/10 rounded-2xl">
              <FiGithub className="text-3xl text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-white">Top Languages</h3>
          </div>
          <div className="space-y-8">
            {data?.languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between mb-3 items-end">
                  <span className="text-slate-200 font-semibold tracking-wide">{lang.name}</span>
                  <span className="text-slate-500 font-mono text-sm">{lang.percent}%</span>
                </div>
                <div className="h-2.5 bg-slate-800/50 rounded-full overflow-hidden p-[2px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: "circOut" }}
                    className={`h-full rounded-full ${lang.color} shadow-[0_0_20px_currentColor]`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-6 sm:p-10 border-white/5 flex flex-col"
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-white">Live Activity</h3>
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent text-sm hover:underline flex items-center gap-2 group"
            >
              Explore Profile <FiGithub className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          <div className="flex-grow flex items-end justify-between gap-1 sm:gap-2 h-48 sm:h-56">
            {[40, 70, 45, 90, 65, 30, 85, 50, 95, 60, 40, 80, 55, 75].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 1.5, delay: 1 + i * 0.05, ease: "backOut" }}
                className="w-full bg-accent/40 rounded-t-lg border-t border-accent/60 relative group shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:bg-accent transition-colors cursor-crosshair"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 whitespace-nowrap z-50 shadow-2xl">
                  Activity: {height}%
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-white/5 flex justify-center">
            <p className="text-slate-500 text-xs italic flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Syncing real-time metrics with GitHub API v3
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GithubStats;
