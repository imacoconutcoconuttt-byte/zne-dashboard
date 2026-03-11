import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ZNE Bot - Discord Bot Dashboard</title>
        <meta name="description" content="ZNE is a powerful Discord bot with economy, moderation, verification, AI chat, and much more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">ZNE</div>
            <span className="text-xl font-bold text-gray-900">ZNE Bot</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#overview" className="text-gray-700 hover:text-purple-600 transition">Overview</a>
            <a href="#commands" className="text-gray-700 hover:text-purple-600 transition">Commands</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#stats" className="text-gray-700 hover:text-purple-600 transition">Stats</a>
          </div>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition font-semibold">Add to Discord</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="overview" className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Bring your Discord server to <span className="text-blue-300">life</span>.</h1>
            <p className="text-lg text-gray-200 mb-8">ZNE is a powerful Discord bot with economy, moderation, verification, AI chat, and much more.</p>
            <div className="flex gap-4">
              <button className="bg-blue-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition">Add to Discord</button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition">Explore Features</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
              <div>
                <h3 className="font-bold text-gray-900">ZNE Bot</h3>
                <p className="text-sm text-gray-600">Online • 50,000+ servers</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-sm text-gray-600">💰 Economy</p>
                <p className="text-lg font-bold text-gray-900">Daily rewards, work, gambling</p>
              </div>
              <div className="border-b pb-3">
                <p className="text-sm text-gray-600">🛡️ Moderation</p>
                <p className="text-lg font-bold text-gray-900">AutoMod, verification, bans</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">🤖 AI Features</p>
                <p className="text-lg font-bold text-gray-900">Chat, image generation, vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: 'Economy System', desc: 'Daily rewards, work, treasure hunting, gambling, and leaderboards. Earn coins and climb the ranks!' },
              { icon: '🛡️', title: 'Moderation', desc: 'AutoMod, verification systems, bans, kicks, mutes, and message sniping. Keep your server safe.' },
              { icon: '🤖', title: 'AI Powered', desc: 'GPT-5 chat, image generation, vision analysis. Your server\'s personal AI assistant.' },
              { icon: '🎮', title: 'Fun Commands', desc: '1000+ fun commands with GIFs and embeds. Jokes, games, ratings, and more!' },
              { icon: '⚙️', title: 'Server Config', desc: 'Admin commands to configure verification, AutoMod levels, and server settings.' },
              { icon: '📊', title: 'Leaderboards', desc: 'Real-time economy leaderboards, stats, and per-server tracking.' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Command Categories</h2>
          
          {[
            { emoji: '💰', title: 'Economy', color: 'yellow', cmds: ['balance', 'daily', 'work', 'treasure', 'gamble', 'leaderboard'] },
            { emoji: '🎲', title: 'Fun', color: 'pink', cmds: ['joke', 'roast', 'compliment', 'ship', 'waifu', 'iq', 'pp', 'rate', '8ball', 'flip', 'dice'] },
            { emoji: '🛡️', title: 'Moderation', color: 'red', cmds: ['kick', 'ban', 'clear', 'mute', 'unmute'] },
            { emoji: '⚙️', title: 'Server Setup', color: 'blue', cmds: ['setup_verify', 'setup_automod', 'guild_config', 'send_verify'] },
            { emoji: '🛠️', title: 'Utility', color: 'green', cmds: ['ping', 'userinfo', 'serverinfo', 'snipe'] },
            { emoji: '🤖', title: 'AI Features', color: 'purple', cmds: ['imagine', 'ai_chat', 'devpanel'] },
          ].map((category, i) => (
            <div key={i} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">{category.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="bg-white rounded-xl p-8 shadow">
                <div className="flex flex-wrap gap-2">
                  {category.cmds.map((cmd, j) => (
                    <span key={j} className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-${category.color}-100 text-${category.color}-800`}>
                      {cmd}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1000+', label: 'Total Commands' },
              { num: '50K+', label: 'Servers' },
              { num: '100K+', label: 'Daily Users' },
              { num: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{stat.num}</div>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">Developed with ❤️ by <span className="text-purple-400 font-bold">silkcord</span></p>
          <p className="text-sm">Prefix: <span className="bg-gray-800 px-2 py-1 rounded">n!</span></p>
          <p className="text-xs text-gray-500 mt-4">© 2026 ZNE Bot. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
