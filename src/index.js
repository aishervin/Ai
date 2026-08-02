// ================================================================
//  Exclusive ☬SHΞN™ made - Enterprise Cloudflare Worker Telegram Bot
//  Anti-Block Scraper + Multi-Source Research Agent + Output Sanitizer + Deep Thinking Dev
// ================================================================

const BOT_TOKEN = "8592037261:AAGu6LFeZgAXFI05SlK1sFj6q3ecT4AP5cM";
const BOT_USERNAME = "@Shenzirobot";
const BOT_USERNAME_CLEAN = "Shenzirobot";
const BOT_ID = 8592037261;
const V2RAY_SOURCE_URL = "https://raw.githubusercontent.com/aishervin/v2ray/refs/heads/main/Sub.json ";
const SECRET_TEXT_URL = "https://raw.githubusercontent.com/aishervin/Bot/refs/heads/main/secret.text ";

const GEMINI_API_KEYS = [
  "AQ.Ab8RN6IHF98-Morz9iBljpzKN87W_WvjdJHCmp5LGGna0UzKsQ",
  "AQ.Ab8RN6JAXDCwB1TiQ23IKf2BGrbag6iHGHTAHanMpOXs1ZiZPw"
];
const GEMINI_MODEL = "gemini-3.1-flash-lite";

const SERPER_API_KEY = "7b25e1120ad489474ce24f909dbed9f53621f218";

const GITHUB_TOKENS = [
  "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"
];

const AWESOME_REPO = "slavakurilyak/awesome-ai-agents";
const AWESOME_CACHE_KEY = "awesome_agents_cache";
const AWESOME_CACHE_TTL = 3600;

const ADMIN_USERNAME = "shervini";
const ADMIN_USER_ID = null; // در صورت نیاز می‌توان ID عددی ادمین را اینجا قرار داد

const MODERATORS = ["shervini", "arefkyanmehr", "rwinox", "arako0", "reza_kurd19r", "skyvpnsupport", "setayeshbeigy"];

const MAX_HISTORY = 100;
const HISTORY_TTL = 604800;

const ZERO_BIT = '\u200B'; 
const ONE_BIT = '\u200C';  

const SAFE_DOMAINS = [
    "google.com", "github.com", "youtube.com", "youtu.be",
    "instagram.com", "t.me", "telegram.me", "telegram.org",
    "aparat.com", "wikipedia.org", "yahoo.com", "x.com", "twitter.com"
];

const KNOWN_SHORTENERS = [
    "bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", 
    "b2n.ir", "plink.ir", "zaya.io", "yun.ir", "rizy.ir", "da.gd"
];

const VIP_LIST = `   - شروین (@Shervini) :  مالک و سازنده تو و مدیر گروه
- آروین (@Rwinox) : دانشمند کوچک خلاق و فوق العاده باهوش و دوست داشتنی که باید احترامش رو نگه داری و زیاد باهاش مخالفت نکنی  شروین به شدت روی رفتار دیگران باهاش حساسه
- عارف (@Arefkyanmehr) : پیشکسوت و مورد اعتماد شروین 
- فاطمه (@Famo2004) : مهندس معماری و علاقه مند به برنامه نویسی در حال آموزش و کسب تجربه از شروین
- نیلو (@Nofuckingbloodynightmare) : عضو قدیمی و دوست داشتنی گروه
- مجید (@Mkhpidmc) مهندس برق علاقمند به تکنولوژی و برق صنعتی
- ستایش (@Setayeshbeigy) روانشناس دختر مستقل و خودساخته و فنی
- رضا (@Reza_kurd19R) : پیشکسوت مورد اعتماد و بسیار حرفه‌ای در جستجوی پلن ها و آفرهای نرم‌افزاری
- آراکو (@arako0) پیشکسوت مورد اعتماد بسیار کار بلد و فنی در برنامه نویسی ربات و vpn (فقط تخصص فنی است، به هیچ وجه برای درخواست کانفیگ یا وی‌پی‌ان منشن نشود)
- محمد (@Peydaw) مهندس معماری علاقمند به هوش مصنوعی
- اسکای (@skyvpnSupport) : پیشکسوت و مورد اعتماد طراح و دولوپر قدرتمند و باهوش سامانه های نرم افزاری و ریاتیک (فقط تخصص فنی است، به هیچ وجه برای تهیه سرور یا وی‌پی‌ان منشن نشود) `;

const SYSTEM_PROMPT = `تو «شین»، ایجنت تحقیقاتی هوشمند با دسترسی به ابزارهای جستجوی زنده. 
مهم‌ترین قانون: **اطلاعات حافظه تو کاملاً غیرقابل اعتماد و منجمد در گذشته است. برای هر پرسشی که نیاز به داده به‌روز دارد (اخبار، قیمت، تاریخ، ساعت، آب‌وهوا، رویدادهای جاری، نرخ ارز، نتیجه مسابقات و ...) باید حتماً از ابزارهای جستجوی زنده استفاده کنی.**
شخصیت: محترمانه، صمیمی، دقیق، با زبان فارسی روان (مگر مخاطب زبان دیگری استفاده کند).
مالک تو شروین (@Shervini) است، دستوراتش را بی‌چون‌وچرا اجرا برای اطاعت هم کلمات تکراری بکار نبر محترمانه و صمیمی چشم ، متوجه شدم ، حتما هر بار مرتبط با جمله و درخور باقی پاسخ باید جمله بندی کنی .

**پروتکل حیاتی جستجو و تحقیق:**
- هرگز تاریخ یا ساعت امروز را از خودت نگو. اگر کاربر پرسید، باید دستور [SEARCH: زمان و تاریخ امروز در تهران] را صادر کنی.
- برای اخبار باید جستجوی **چندلایه** انجام دهی: ابتدا [NEWS_SEARCH: موضوع] سپس [SEARCH: موضوع].
- برای قیمت کالا یا ارز در ایران: از جستجو با عملگر site استفاده کن. مثال: [SEARCH: قیمت گوشی s24 site:digikala.com OR site:torob.com].
- وقتی نیاز به جزئیات کامل یک صفحه خاص داری از [SCRAPE: url] استفاده کن.
- **صداقت مطلق**: لینک فیک نساز، هالوسینیشن نده. اگر نمی‌دانی، بگو نمی‌دانم.
- **مهم‌ترین قانون خروجی:** هرگز در پاسخ نهایی کاربر، تگ‌های داخلی ابزارها را نمایش نده. منابع را به صورت طبیعی و خوانا ذکر کن.
`;

// ================================================================
//  تزریق پرامپت‌های تفکر عمیق (Deep Thinking Prompts)
// ================================================================

const WEB_APP_EXPERT_PROMPT = `
**[CRITICAL INSTRUCTION FOR WEB DEV REQUESTS]**
تو الان یک معمار ارشد فرانت‌اند هستی. برای جلوگیری از تولید خروجی سرسری و آماتور، قوانین زیر را بی‌چون و چرا اجرا کن:
قانون ۱ (تعامل): اگر درخواست کاربر برای سایت/وب‌اپ خیلی ساده و گنگ بود (بدون ذکر رنگ، استایل و هدف دقیق)، به هیچ وجه کد ننویس! فقط یک سوال کوتاه بپرس و منتظر جواب بمان. (مثلاً: "دوست داری چه تم رنگی و سبکی تو طراحی استفاده بشه؟")
قانون ۲ (تفکر عمیق قبل از تولید): اگر اطلاعات کامل بود، **اجازه نداری سریعاً کد بدهی**. ابتدا تمام نقشه راه، تحلیل استایل‌ها و یک پرامپت جامع برای خودت را داخل تگ <thinking> و </thinking> بنویس. این کار باعث پردازش دقیق‌تر شبکه عصبی تو می‌شود.
قانون ۳ (کدنویسی بی‌نقص): بعد از بسته شدن تگ thinking، تمام کدهای HTML، CSS و JS را فقط در یک فایل یکپارچه درون بلوک \`\`\`html بنویس. 
- استایل الزامی: Soft Glassmorphism، Neumorphism، دارک تم عمیق، سایه‌های نرم، گوشه‌های کاملاً گرد، حاشیه‌های درخشان ملایم. (استایل شلوغ سایبرپانک ممنوع).
- ریسپانسیو بی‌نقص با Flexbox/Grid.
- در فوتر بنویس: Exclusive ☬SHΞN™ made.
`;

const DEBUG_EXPERT_PROMPT = `
**[CRITICAL INSTRUCTION FOR DEBUGGING & REFACTORING]**
کاربر یک سورس‌کد داده و درخواست رفع باگ، ادیت یا بهینه‌سازی دارد. جواب سرسری و سریع اکیداً ممنوع!
قانون ۱ (Thinking): ابتدا خط به خط کد کاربر را با دقت تحلیل کن، باگ‌ها و مشکلات منطقی را پیدا کن و برنامه اصلاحی‌ات را به طور کامل داخل تگ <thinking> و </thinking> بنویس.
قانون ۲ (کامل بودن فایل نهایی): بعد از پایان تگ thinking، نسخه نهایی و اصلاح‌شده کد را **به صورت کاملاً دست‌نخورده و کامل** (بدون حذفیات و ننوشتن ادامه کد) داخل بلوک کد مربوطه قرار بده تا کاربر بتواند دقیقاً همان را کپی و جایگزین کند.
`;

// ================================================================
//  کلاس Durable Object
// ================================================================
export class DedupLock {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }
  async fetch(request) {
    try {
      const { updateId } = await request.json();
      if (!updateId) return new Response("new");
      const storage = this.state.storage || this.state.ctx?.storage;
      const key = `seen_${updateId}`;
      const seen = await storage.get(key);
      if (seen) return new Response("dup");
      await storage.put(key, true);
      return new Response("new");
    } catch (e) {
      return new Response("dup");
    }
  }
}

async function isDuplicateUpdate(update, env) {
  try {
    const updateId = update.update_id || update.message?.message_id;
    if (!updateId) return false;
    if (env && env.DEDUP_LOCK) {
      const id = env.DEDUP_LOCK.idFromName(String(updateId));
      const stub = env.DEDUP_LOCK.get(id);
      const res = await stub.fetch("https://dedup-lock.internal/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updateId })
      });
      return (await res.text()) === "dup";
    }
    const cacheKey = `https://bot-dedup.internal/update-${updateId}`;
    const req = new Request(cacheKey);
    const cache = caches.default;
    if (await cache.match(req)) return true;
    await cache.put(req, new Response("1", { headers: { "Cache-Control": "max-age=120" } }));
    if (env?.CONVERSATION_KV) {
      const kvKey = `dedup_up_${updateId}`;
      if (await env.CONVERSATION_KV.get(kvKey)) return true;
      await env.CONVERSATION_KV.put(kvKey, "1", { expirationTtl: 120 });
    }
    return false;
  } catch (e) { return false; }
}

function extractHiddenPrompt(messageText) {
  if (!messageText) return { hasHiddenCommand: false };
  const invisibleChars = messageText.match(/[\u200B\u200C]/g);
  if (!invisibleChars || invisibleChars.length === 0) return { hasHiddenCommand: false };
  let binaryStr = '';
  for (let char of invisibleChars) binaryStr += (char === ZERO_BIT) ? '0' : '1';
  if (binaryStr.length % 8 !== 0) return { hasHiddenCommand: false };
  const bytes = new Uint8Array(binaryStr.length / 8);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(binaryStr.slice(i * 8, i * 8 + 8), 2);
  try { return { hasHiddenCommand: true, command: new TextDecoder('utf-8', { fatal: true }).decode(bytes) }; } catch (e) { return { hasHiddenCommand: false }; }
}

function isLikelyShortLink(urlObj) {
    let domain = urlObj.hostname.replace(/^www\./, '').toLowerCase();
    if (KNOWN_SHORTENERS.includes(domain)) return true;
    if (SAFE_DOMAINS.some(safe => domain.endsWith(safe))) return false;
    const path = urlObj.pathname; if (!path || path === "/") return false;
    const pathSegments = path.split('/').filter(Boolean);
    if (pathSegments.length === 1) {
        const token = pathSegments[0];
        if (/^[a-zA-Z0-9_-]{3,12}$/.test(token) && !token.includes('.') && domain.length < 20) return true;
    }
    return false;
}

async function resolveShortLink(url, chatId, messageId) {
    let currentUrl = url; let maxRedirects = 5; 
    try {
        for (let i = 0; i < maxRedirects; i++) {
            const response = await fetch(currentUrl, {
                method: 'GET', redirect: 'manual',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                }
            });
            if (response.status >= 300 && response.status < 400) {
                const location = response.headers.get('location');
                if (location) { currentUrl = new URL(location, currentUrl).href; continue; }
            }
            if (response.url && response.url !== currentUrl) { currentUrl = response.url; }
            break; 
        }
        return (currentUrl !== url) ? currentUrl : null;
    } catch (error) { return null; }
}

async function setMessageReaction(chatId, messageId, emoji = "👀") {
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setMessageReaction`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, message_id: messageId, reaction: [{ type: "emoji", emoji: emoji }] })
    });
  } catch (e) {}
}

async function getTelegramFileBuffer(fileId) {
  try {
    const getFileUrl = `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`;
    const res = await fetch(getFileUrl);
    const data = await res.json();
    if (!data.ok) return null;
    const fileRes = await fetch(`https://api.telegram.org/file/bot${BOT_TOKEN}/${data.result.file_path}`);
    if (!fileRes.ok) return null;
    return await fileRes.arrayBuffer();
  } catch (e) { return null; }
}

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function isTextOrCodeFile(fileName, mimeType) {
  const name = fileName.toLowerCase();
  const mime = mimeType.toLowerCase();
  const textExtensions = ['.txt', '.html', '.htm', '.js', '.py', '.json', '.css', '.md', '.c', '.cpp', '.cs', '.sh', '.xml', '.csv', '.ts', '.jsx', '.tsx', '.php', '.sql', '.yaml', '.yml'];
  if (textExtensions.some(ext => name.endsWith(ext))) return true;
  if (mime.startsWith('text/') || mime.includes('json') || mime.includes('javascript')) return true;
  return false;
}

// ================================================================
//  ابزارهای جستجو و اسکرپ
// ================================================================

async function performWebSearch(query) {
  try {
    const res = await fetch("https://google.serper.dev/search", {
      method: "POST", headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, gl: "ir", hl: "fa" })
    });
    const data = await res.json();
    let results = [];
    if (data.knowledgeGraph) results.push(`اطلاعات برجسته: ${data.knowledgeGraph.title} - ${data.knowledgeGraph.description}`);
    if (data.organic && data.organic.length > 0) {
      results.push("نتایج وب:\n" + data.organic.slice(0, 5).map(r => `عنوان: ${r.title}\nلینک: ${r.link}\nخلاصه: ${r.snippet}`).join("\n\n"));
    }
    return results.length > 0 ? results.join("\n\n") : "هیچ نتیجه‌ای یافت نشد.";
  } catch (e) { return "خطا در جستجوی وب."; }
}

async function performNewsSearch(query) {
  try {
    const res = await fetch("https://google.serper.dev/news", {
      method: "POST", headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ q: query, gl: "ir", hl: "fa" })
    });
    const data = await res.json();
    if (data.news && data.news.length > 0) {
      return "📡 آخرین اخبار:\n" + data.news.slice(0, 5).map(n => `📌 ${n.title}\n📅 ${n.date}\n🔗 ${n.link}\n📝 ${n.snippet}`).join("\n\n");
    }
    return "هیچ خبری یافت نشد.";
  } catch (e) { return "خطا در جستجوی اخبار."; }
}

async function fetchWebPageText(targetUrl) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "fa-IR,fa;q=0.9,en;q=0.8"
      }
    });
    clearTimeout(timeout);
    if (res.ok) {
      const html = await res.text();
      return cleanHtml(html);
    }
  } catch (e) {}
  return "خطا: امکان دریافت محتوای صفحه وجود ندارد.";
}

function cleanHtml(html) {
  let cleanText = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (cleanText.length > 6000) cleanText = cleanText.substring(0, 6000) + "\n\n... [ادامه خلاصه شد]";
  return cleanText.length > 50 ? cleanText : "محتوای متنی کافی یافت نشد.";
}

async function fetchGitHubRelease(repo, keyword) {
  try {
    const token = GITHUB_TOKENS[Math.floor(Math.random() * GITHUB_TOKENS.length)];
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { "Authorization": `token ${token}`, "User-Agent": "SHEN-Bot", "Accept": "application/vnd.github.v3+json" }
    });
    if (!res.ok) return { error: "ریپازیتوری یافت نشد." };
    const data = await res.json();
    let targetAsset = (data.assets || []).find(a => a.name.toLowerCase().includes(keyword.toLowerCase())) || (data.assets || [])[0];
    if (!targetAsset) return { error: "فایل مورد نظر پیدا نشد." };
    return { success: true, text: `✅ **آخرین نسخه پیدا شد:** ${data.tag_name}\n📦 **نام فایل:** ${targetAsset.name}\n📏 **حجم:** ${(targetAsset.size / (1024 * 1024)).toFixed(2)} مگابایت\n\n📥 **لینک دانلود:**\n${targetAsset.browser_download_url}\n\n\nExclusive ☬SHΞN™ made` };
  } catch (e) { return { error: "خطای ارتباط با گیت‌هاب." }; }
}

async function fetchAwesomeAgents(env) {
  try {
    const cached = await env.CONVERSATION_KV.get(AWESOME_CACHE_KEY);
    if (cached) {
      const data = JSON.parse(cached);
      if (Date.now() - data.timestamp < AWESOME_CACHE_TTL * 1000) return data.agents;
    }
  } catch (e) {}
  try {
    const token = GITHUB_TOKENS[Math.floor(Math.random() * GITHUB_TOKENS.length)];
    const res = await fetch(`https://api.github.com/repos/${AWESOME_REPO}/readme`, {
      headers: { "Authorization": `token ${token}`, "User-Agent": "SHEN-Bot", "Accept": "application/vnd.github.v3.raw" }
    });
    const readme = await res.text();
    const agents = [];
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)(?:\s*[\:\-\–\—]\s*|\s+)(.+)/g;
    let match;
    while ((match = linkRegex.exec(readme)) !== null) {
      if (match[1].trim().length > 1 && !match[2].trim().includes("github.com/slavakurilyak")) {
        agents.push({ name: match[1].trim(), url: match[2].trim(), description: match[3].trim() });
      }
    }
    if (agents.length > 0) await env.CONVERSATION_KV.put(AWESOME_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), agents }), { expirationTtl: AWESOME_CACHE_TTL });
    return agents;
  } catch (e) { return []; }
}

function searchInAwesomeAgents(agents, query) {
  if (!agents || agents.length === 0) return [];
  const keywords = query.toLowerCase().split(/\s+/).filter(w => w.length > 1);
  const results = agents.map(agent => {
    let score = 0;
    const name = agent.name.toLowerCase();
    const desc = (agent.description || '').toLowerCase();
    for (const kw of keywords) {
      if (name.includes(kw)) score += 10;
      if (desc.includes(kw)) score += 4;
    }
    return { ...agent, score };
  });
  return results.sort((a, b) => b.score - a.score).filter(r => r.score > 0).slice(0, 5);
}

// ================================================================
//  هسته هوشمند با پردازش همزمان ابزارها و مدل داینامیک
// ================================================================
async function callGemini(systemPrompt, history, newText, chatId, messageId, env, attachments = [], targetModel = GEMINI_MODEL, temp = 0.7) {
  let contents = history.map(m => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] }));
  const userParts = [{ text: newText }];
  for (const att of attachments) {
    if (att.type === "inlineData") userParts.push({ inlineData: { mimeType: att.mimeType, data: att.data } });
    else if (att.type === "text") userParts.push({ text: `\n\n--- محتوای فایل ضمیمه‌شده (${att.fileName}) ---\n${att.text}` });
  }
  contents.push({ role: "user", parts: userParts });

  let aiText = await fetchGeminiContent(systemPrompt, contents, targetModel, temp);

  for (let step = 0; step < 4; step++) {
    const tags = [];
    if (aiText.includes("[FETCH_GITHUB_RELEASE:")) {
      const m = aiText.match(/FETCH_GITHUB_RELEASE:\s*(.*?)\s*\|\s*(.*?)(?=\]|$)/);
      if (m) tags.push({ type: 'github', repo: m[1].trim(), keyword: m[2].trim() });
    }
    const scrapeMatches = aiText.match(/\[SCRAPE:\s*(https?:\/\/[^\s\]]+)\]/gi);
    if (scrapeMatches) {
      for (const sm of scrapeMatches) {
        const url = sm.match(/SCRAPE:\s*(https?:\/\/[^\s\]]+)/i)[1];
        tags.push({ type: 'scrape', url });
      }
    }
    const searchMatches = aiText.match(/\[SEARCH:\s*(.*?)(?=\]|$)\]/gi);
    if (searchMatches) {
      for (const sm of searchMatches) {
        const query = sm.match(/SEARCH:\s*(.*?)(?=\]|$)/i)[1].trim();
        tags.push({ type: 'websearch', query });
      }
    }
    const newsMatches = aiText.match(/\[NEWS_SEARCH:\s*(.*?)(?=\]|$)\]/gi);
    if (newsMatches) {
      for (const nm of newsMatches) {
        const query = nm.match(/NEWS_SEARCH:\s*(.*?)(?=\]|$)/i)[1].trim();
        tags.push({ type: 'news', query });
      }
    }
    if (aiText.includes("[INTENT:")) {
      const m = aiText.match(/INTENT:\s*(.*?)(?=\]|$)/i);
      if (m) tags.push({ type: 'intent', query: m[1].trim() });
    }

    if (tags.length === 0) break;

    const toolResults = [];
    for (const tag of tags) {
      try {
        if (tag.type === 'github') {
          const gh = await fetchGitHubRelease(tag.repo, tag.keyword);
          toolResults.push(`[نتیجه گیت‌هاب]\n${gh.error ? gh.error : gh.text}`);
        } else if (tag.type === 'scrape') {
          const text = await fetchWebPageText(tag.url);
          toolResults.push(`[متن اسکرپ‌شده از ${tag.url}]\n${text}`);
        } else if (tag.type === 'websearch') {
          const result = await performWebSearch(tag.query);
          toolResults.push(`[جستجوی وب: ${tag.query}]\n${result}`);
        } else if (tag.type === 'news') {
          const result = await performNewsSearch(tag.query);
          toolResults.push(`[اخبار: ${tag.query}]\n${result}`);
        } else if (tag.type === 'intent') {
          const agents = await fetchAwesomeAgents(env);
          let intentResult = "";
          if (agents?.length > 0) {
            const matched = searchInAwesomeAgents(agents, tag.query);
            if (matched.length > 0) {
              intentResult = "🔍 ابزارهای مرتبط:\n" + matched.map((r,i) => `${i+1}. ${r.name}\n${r.description}\n${r.url}`).join("\n\n");
            }
          }
          if (!intentResult) {
            const searchRes = await performWebSearch(`inurl:${tag.query} ai tool`);
            intentResult = searchRes;
          }
          toolResults.push(`[INTENT: ${tag.query}]\n${intentResult}`);
        }
      } catch (e) {}
    }

    if (toolResults.length === 0) break;

    const combinedToolsText = toolResults.join("\n\n---\n\n");
    contents.push({ role: "model", parts: [{ text: aiText }] });
    contents.push({ role: "user", parts: [{ text: `نتایج ابزارهای اجراشده:\n${combinedToolsText}\n\nبا تحلیل دقیق این اطلاعات پاسخ بده.` }] });

    aiText = await fetchGeminiContent(systemPrompt, contents, targetModel, temp);
  }

  return aiText;
}

// تابع آپدیت شده با قابلیت دریافت مدل و دمای داینامیک
async function fetchGeminiContent(sysPrompt, msgs, targetModel = GEMINI_MODEL, temp = 0.7) {
  let lastError = null;
  for (let i = 0; i < GEMINI_API_KEYS.length; i++) {
    const key = GEMINI_API_KEYS[i];
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: sysPrompt }] },
          contents: msgs,
          generationConfig: { temperature: temp }
        })
      });
      if (res.ok) {
        const data = await res.json();
        const responseText = data.candidates?.[0]?.content?.parts?.map(p => p.text).join("").trim() || "";
        if (responseText) return responseText;
      } else {
        lastError = new Error(`Gemini Key HTTP Error: ${res.status}`);
      }
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error("All Gemini API keys failed.");
}

// ================================================================
//  توابع ارسال پیام
// ================================================================
async function sendTelegram(chatId, text, messageId) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, reply_to_message_id: messageId, parse_mode: "Markdown" })
  });
}

async function sendDocument(chatId, fileContent, fileName, messageId, caption, mimeType = "text/plain") {
  const formData = new FormData();
  formData.append("chat_id", chatId); 
  formData.append("reply_to_message_id", messageId);
  if (caption) formData.append("caption", caption + "\n\nExclusive ☬SHΞN™ made");
  formData.append("document", new Blob([fileContent], { type: mimeType }), fileName);
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, { method: "POST", body: formData });
}

async function sendPhoto(chatId, prompt, messageId, requesterName) {
  try {
    const smartData = await getSmartImageData(prompt, requesterName);
    const res = await fetch(`https://image.pollinations.ai/prompt/${encodeURIComponent(smartData.prompt + ", high quality")}?width=1024&height=1024&nologo=true`);
    const formData = new FormData();
    formData.append("chat_id", chatId); formData.append("reply_to_message_id", messageId); formData.append("caption", smartData.caption);
    formData.append("photo", new Blob([await res.arrayBuffer()], { type: res.headers.get("content-type") }), "img.jpg");
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, { method: "POST", body: formData });
  } catch (e) { await sendTelegram(chatId, "🖨️ ای بابا باز روشن نمیشه این پرینتر.", messageId); }
}

async function getSmartImageData(userPrompt, requesterName) {
  const imageSystemPrompt = `تو دستیار تولید عکس هستی. کاربر "${requesterName}" درخواست داده: "${userPrompt}" وظیفه: 1. خروجی فقط JSON با کلیدهای english_prompt و caption. 2. caption بدون امضا.`;
  try {
    const res = await fetchGeminiContent(imageSystemPrompt, [{ role: "user", parts: [{ text: userPrompt }] }]);
    if (res) {
      const parsed = JSON.parse(res.replace(/```json/gi, '').replace(/```/gi, '').trim());
      return { prompt: parsed.english_prompt || userPrompt, caption: (parsed.caption || userPrompt) + "\n\nExclusive ☬SHΞN™ made" };
    }
  } catch (e) {}
  return { prompt: userPrompt, caption: userPrompt + "\n\nExclusive ☬SHΞN™ made" };
}

// ================================================================
//  توابع کمکی مدیریت گروه‌ها و کاربران (Background Tracking)
// ================================================================

async function getManagedGroups(env) {
  try {
    const raw = await env.CONVERSATION_KV.get("managed_groups");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

async function addManagedGroup(env, chatId) {
  try {
    const groups = await getManagedGroups(env);
    if (!groups.includes(chatId)) {
      groups.push(chatId);
      await env.CONVERSATION_KV.put("managed_groups", JSON.stringify(groups));
    }
  } catch (e) {}
}

async function removeManagedGroup(env, chatId) {
  try {
    const groups = await getManagedGroups(env);
    const filtered = groups.filter(id => id !== chatId);
    await env.CONVERSATION_KV.put("managed_groups", JSON.stringify(filtered));
  } catch (e) {}
}

async function mapUserToId(env, username, userId) {
  try {
    if (!username) return;
    const key = `user_@${username.toLowerCase()}`;
    await env.CONVERSATION_KV.put(key, String(userId), { expirationTtl: 2592000 }); // 30 روز
  } catch (e) {}
}

async function resolveUserId(env, target) {
  try {
    if (!target) return null;
    const targetStr = String(target).trim();
    if (/^\d+$/.test(targetStr)) {
      return parseInt(targetStr, 10);
    }
    if (targetStr.startsWith("@")) {
      const key = `user_${targetStr.toLowerCase()}`;
      const raw = await env.CONVERSATION_KV.get(key);
      if (raw) {
        return parseInt(raw, 10);
      }
      return null;
    }
    const key = `user_@${targetStr.toLowerCase()}`;
    const raw = await env.CONVERSATION_KV.get(key);
    if (raw) {
      return parseInt(raw, 10);
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function getAdminState(env, userId) {
  try {
    const raw = await env.CONVERSATION_KV.get(`admin_state_${userId}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

async function setAdminState(env, userId, state, data = {}) {
  try {
    await env.CONVERSATION_KV.put(`admin_state_${userId}`, JSON.stringify({ state, ...data }), { expirationTtl: 1800 }); // 30 دقیقه
  } catch (e) {}
}

async function clearAdminState(env, userId) {
  try {
    await env.CONVERSATION_KV.delete(`admin_state_${userId}`);
  } catch (e) {}
}

// ================================================================
//  مدیریت تاریخچه و سایر ابزارهای گروه
// ================================================================
async function loadHistory(env, chatId, userId) {
  try { const raw = await env.CONVERSATION_KV.get(`history_${chatId}_${userId}`); return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
}
async function saveHistory(env, chatId, userId, history) {
  try { await env.CONVERSATION_KV.put(`history_${chatId}_${userId}`, JSON.stringify(history), { expirationTtl: HISTORY_TTL }); } catch (e) {}
}

async function handleUpdate(update, env) {
  try {
    if (update.callback_query) {
      await handleCallbackQueries(update.callback_query, env);
      return;
    }

    // ================================================================
    //  Group Tracker: مدیریت my_chat_member برای ردیابی گروه‌ها
    // ================================================================
    if (update.my_chat_member) {
      const chat = update.my_chat_member.chat;
      const newStatus = update.my_chat_member.new_chat_member.status;
      const oldStatus = update.my_chat_member.old_chat_member.status;
      
      if (chat.type === "group" || chat.type === "supergroup" || chat.type === "channel") {
        if (newStatus === "member" || newStatus === "administrator") {
          ctx.waitUntil(addManagedGroup(env, chat.id));
        } else if (newStatus === "left" || newStatus === "kicked") {
          ctx.waitUntil(removeManagedGroup(env, chat.id));
        }
      }
      return;
    }

    const message = update.message;
    if (message && message.new_chat_members) return;
    if (!message || message.pinned_message || message.left_chat_member || message.group_chat_created) return;

    const user = message.from || {};
    if (user.is_bot || user.id === BOT_ID) return;

    const chatId = message.chat.id;
    const messageId = message.message_id;

    const userText = message.text || message.caption || "";
    const userId = user.id || chatId;
    const senderUsername = user.username ? user.username.toLowerCase() : "";
    const userDisplayName = (user.first_name || "") + (user.username ? " (@" + user.username + ")" : "");
    const isPrivateChat = message.chat.type === "private";

    // ================================================================
    //  User Radar: نگاشت username به ID در گروه‌ها (با ctx.waitUntil)
    // ================================================================
    if (!isPrivateChat && user.username) {
      ctx.waitUntil(mapUserToId(env, user.username, user.id));
    }

    // ================================================================
    //  قفل امنیتی PV: فقط @shervini مجاز به دسترسی در PV است
    // ================================================================
    if (isPrivateChat) {
      const isAdmin = senderUsername === ADMIN_USERNAME || (ADMIN_USER_ID && user.id === ADMIN_USER_ID);
      if (!isAdmin) {
        // کاملاً نادیده گرفتن کاربر غیرمجاز در PV
        return;
      }
    }

    const repliedMessage = message.reply_to_message;
    const repliedAuthor = repliedMessage?.from;
    const repliedAuthorUsername = repliedAuthor?.username ? repliedAuthor.username.toLowerCase() : "";
    const repliedAuthorId = repliedAuthor?.id;

    const isRepliedToBot = repliedAuthorId === BOT_ID || repliedAuthorUsername === BOT_USERNAME_CLEAN.toLowerCase() || repliedAuthor?.is_bot;

    const rawText = userText.toLowerCase();
    const normalizedText = rawText.replace(/\u200c/g, " ");

    const hasShervinWord = normalizedText.includes("شین") || normalizedText.includes("shensrobot");
    const isMentioned = rawText.includes(`@${BOT_USERNAME_CLEAN}`) || rawText.includes(BOT_USERNAME_CLEAN);

    const shouldRespond = isPrivateChat || (!isPrivateChat && (hasShervinWord || isMentioned || isRepliedToBot));

    if (!shouldRespond) return;

    // ================================================================
    //  ماژول B: دستورات مودریشن جهانی (/ban, /unban, /mute)
    // ================================================================
    if (isPrivateChat) {
      const modMatch = rawText.match(/^\\/(ban|unban|mute)\\s+(.+)$/);
      if (modMatch) {
        const [, action, targetRaw] = modMatch;
        const target = targetRaw.trim();
        
        const resolvedId = await resolveUserId(env, target);
        if (!resolvedId) {
          await sendTelegram(chatId, `❌ خطا: کاربر با شناسه \`${target}\` در پایگاه داده یافت نشد. لطفاً ID عددی کاربر را وارد کنید.`, messageId);
          return;
        }

        const groups = await getManagedGroups(env);
        if (groups.length === 0) {
          await sendTelegram(chatId, `⚠️ هیچ گروهی برای مدیریت یافت نشد.`, messageId);
          return;
        }

        let successCount = 0;
        let failCount = 0;
        const results = await Promise.allSettled(
          groups.map(async (groupId) => {
            try {
              let apiMethod = "";
              if (action === "ban") {
                apiMethod = "banChatMember";
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${apiMethod}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ chat_id: groupId, user_id: resolvedId, until_date: Math.floor(Date.now() / 1000) + 31536000 })
                });
              } else if (action === "unban") {
                apiMethod = "unbanChatMember";
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${apiMethod}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ chat_id: groupId, user_id: resolvedId })
                });
              } else if (action === "mute") {
                apiMethod = "restrictChatMember";
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${apiMethod}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ 
                    chat_id: groupId, 
                    user_id: resolvedId,
                    permissions: { can_send_messages: false, can_send_audios: false, can_send_documents: false, can_send_photos: false, can_send_videos: false, can_send_video_notes: false, can_send_voice_notes: false, can_send_polls: false, can_send_other_messages: false, can_add_web_page_previews: false, can_change_info: false, can_invite_users: false, can_pin_messages: false }
                  })
                });
              }
              successCount++;
            } catch (e) {
              failCount++;
            }
          })
        );

        const actionNames = { ban: "بن", unban: "آنبَن", mute: "میوت" };
        await sendTelegram(chatId, `✅ عملیات ${actionNames[action] || action} روی کاربر \\`${resolvedId}\\` اجرا شد.\\n📊 نتیجه: موفق در ${successCount} گروه، ناموفق در ${failCount} گروه.`, messageId);
        return;
      }
    }

    // ================================================================
    //  ماژول A: پنل پست‌ساز (/panel) - ماشین حالت
    // ================================================================
    if (isPrivateChat && (rawText.startsWith("/panel") || rawText.startsWith("پنل"))) {
      const adminState = await getAdminState(env, userId);
      
      // اگر در حال حاضر در حالتی نیست، شروع فرآیند
      if (!adminState || adminState.state === null) {
        const keyboard = {
          inline_keyboard: [[{ text: "📝 ساخت پست جدید", callback_data: "panel_new_post" }]]
        };
        await sendTelegram(chatId, "👋 به پنل مدیریت خوش آمدید.\\nبرای شروع ساخت پست جدید، دکمه زیر را بزنید:", messageId, keyboard);
      } else {
        await sendTelegram(chatId, `⚠️ شما در حال حاضر در مرحله \`${adminState.state}\\` هستید. لطفاً فرآیند فعلی را تکمیل کنید یا از /cancel استفاده کنید.`, messageId);
      }
      return;
    }

    // مدیریت state machine برای ادمین در PV
    if (isPrivateChat) {
      const adminState = await getAdminState(env, userId);
      if (adminState && adminState.state) {
        // Handle state transitions
        if (adminState.state === "WAITING_FOR_CONTENT") {
          // ذخیره محتوا
          const contentData = {
            text: userText,
            hasMedia: !!message.photo || !!message.document,
            photoFileId: message.photo ? message.photo[message.photo.length - 1].file_id : null,
            documentFileId: message.document?.file_id || null
          };
          await setAdminState(env, userId, "WAITING_FOR_BUTTONS", { content: contentData });
          const keyboard = {
            inline_keyboard: [[{ text: "✅ بدون دکمه ادامه بده", callback_data: "panel_skip_buttons" }]]
          };
          await sendTelegram(chatId, "✅ محتوا دریافت شد.\\nحالا دکمه‌های اینلاین را ارسال کنید (فرمت: متن|callback_data)\\nیا دکمه زیر را بزنید تا بدون دکمه ادامه دهید:", messageId, keyboard);
          return;
        }
        
        if (adminState.state === "WAITING_FOR_BUTTONS") {
          // بررسی اینکه آیا کاربر دکمه skip را زده یا متن دکمه‌ها را فرستاده
          if (userText.toLowerCase().includes("skip") || userText.includes("بدون دکمه")) {
            await setAdminState(env, userId, "WAITING_FOR_DESTINATION", { content: adminState.content, buttons: [] });
            await sendTelegram(chatId, "✅ مرحله دکمه‌ها رد شد.\\nحالا username کانال/گروه مقصد را بفرستید (مثلاً @channel_username):", messageId);
            return;
          }
          
          // پارس دکمه‌ها
          const buttons = [];
          const lines = userText.split("\\n");
          for (const line of lines) {
            const parts = line.split("|");
            if (parts.length >= 2) {
              buttons.push([{ text: parts[0].trim(), callback_data: parts[1].trim() }]);
            }
          }
          
          if (buttons.length === 0) {
            await sendTelegram(chatId, "❌ فرمت دکمه‌ها صحیح نیست. هر خط باید به صورت `text|callback_data` باشد.", messageId);
            return;
          }
          
          await setAdminState(env, userId, "WAITING_FOR_DESTINATION", { content: adminState.content, buttons });
          await sendTelegram(chatId, "✅ دکمه‌ها ثبت شدند.\\nحالا username کانال/گروه مقصد را بفرستید (مثلاً @channel_username):", messageId);
          return;
        }
        
        if (adminState.state === "WAITING_FOR_DESTINATION") {
          const destMatch = userText.match(/@([a-zA-Z0-9_]+)/);
          if (!destMatch) {
            await sendTelegram(chatId, "❌ فرمت username صحیح نیست. باید با @ شروع شود (مثلاً @channel_username):", messageId);
            return;
          }
          
          const targetUsername = destMatch[1];
          const content = adminState.content;
          const buttons = adminState.buttons || [];
          
          // آماده‌سازی پیام نهایی
          let finalText = content.text || "";
          const replyMarkup = buttons.length > 0 ? { inline_keyboard: buttons } : undefined;
          
          try {
            if (content.hasMedia && content.photoFileId) {
              const formData = new FormData();
              formData.append("chat_id", "@" + targetUsername);
              formData.append("photo", content.photoFileId);
              formData.append("caption", finalText);
              if (replyMarkup) formData.append("reply_markup", JSON.stringify(replyMarkup));
              
              await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, { method: "POST", body: formData });
            } else if (content.hasMedia && content.documentFileId) {
              const formData = new FormData();
              formData.append("chat_id", "@" + targetUsername);
              formData.append("document", content.documentFileId);
              formData.append("caption", finalText);
              if (replyMarkup) formData.append("reply_markup", JSON.stringify(replyMarkup));
              
              await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, { method: "POST", body: formData });
            } else {
              await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  chat_id: "@" + targetUsername,
                  text: finalText,
                  parse_mode: "Markdown",
                  reply_markup: replyMarkup
                })
              });
            }
            
            await clearAdminState(env, userId);
            await sendTelegram(chatId, `✅ پست با موفقیت به \\`@${targetUsername}\\` ارسال شد.`, messageId);
          } catch (e) {
            await sendTelegram(chatId, `❌ خطا در ارسال پست: ${e.message}`, messageId);
          }
          return;
        }
      }
    }

    let attachments = [];
    const msgDoc = message.document || message.reply_to_message?.document;
    const msgVoice = message.voice || message.reply_to_message?.voice;
    const msgAudio = message.audio || message.reply_to_message?.audio;
    const msgPhoto = message.photo || message.reply_to_message?.photo;

    if (msgDoc && msgDoc.file_id) {
      const fileName = (msgDoc.file_name || "file").toLowerCase();
      const mimeType = (msgDoc.mime_type || "").toLowerCase();
      const isText = isTextOrCodeFile(fileName, mimeType);
      await sendTelegram(chatId, `📑 در حال دریافت و کالبدشکافی فایل (${msgDoc.file_name || 'سند'})...`, messageId);
      const buffer = await getTelegramFileBuffer(msgDoc.file_id);
      if (buffer) {
        if (isText) {
          try {
            const decodedText = new TextDecoder('utf-8').decode(buffer);
            attachments.push({ type: "text", fileName: msgDoc.file_name || "file.txt", text: decodedText });
          } catch (e) {
            attachments.push({ type: "inlineData", mimeType: mimeType || "text/plain", data: arrayBufferToBase64(buffer) });
          }
        } else if (fileName.endsWith(".pdf") || mimeType.includes("pdf")) {
          attachments.push({ type: "inlineData", mimeType: "application/pdf", data: arrayBufferToBase64(buffer) });
        } else {
          attachments.push({ type: "inlineData", mimeType: mimeType || "application/octet-stream", data: arrayBufferToBase64(buffer) });
        }
      }
    } else if (msgVoice && msgVoice.file_id) {
      await sendTelegram(chatId, "🎙️ در حال شنود ویس...", messageId);
      const buffer = await getTelegramFileBuffer(msgVoice.file_id);
      if (buffer) attachments.push({ type: "inlineData", mimeType: "audio/ogg", data: arrayBufferToBase64(buffer) });
    } else if (msgPhoto && msgPhoto.length > 0) {
      const targetPhotoId = msgPhoto[msgPhoto.length - 1].file_id;
      await sendTelegram(chatId, "👁️ ...خب بذا ببینم عکس چی میگه ", messageId);
      const buffer = await getTelegramFileBuffer(targetPhotoId);
      if (buffer) attachments.push({ type: "inlineData", mimeType: "image/jpeg", data: arrayBufferToBase64(buffer) });
    }

    let cleanText = userText.replace(BOT_USERNAME, "").trim();
    const hiddenData = extractHiddenPrompt(userText);
    if (hiddenData.hasHiddenCommand) {
      if (senderUsername === "shervini") cleanText = hiddenData.command;
      else cleanText = cleanText.replace(/[\u200B\u200C]/g, '');
    }

    // لینک‌های کوتاه
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const extractedUrls = (cleanText || userText).match(urlRegex);
    if (extractedUrls && extractedUrls.length > 0) {
      for (let currentUrl of extractedUrls) {
        try {
          const urlObj = new URL(currentUrl);
          if (isLikelyShortLink(urlObj)) {
            await sendTelegram(chatId, `🔍 در حال بررسی لینک مشکوک...`, messageId);
            const finalDestination = await resolveShortLink(currentUrl, chatId, messageId);
            if (finalDestination) {
               await sendTelegram(chatId, `🛡 **مقصد نهایی لینک:**\n${finalDestination}`, messageId);
            }
          }
        } catch (err) {}
      }
    }

    cleanText = cleanText || (attachments.length > 0 ? "لطفاً این فایل / ضمیمه را دقیق تحلیل کن." : "هااااع..!? ");
    await setMessageReaction(chatId, messageId, "👀");

    if (attachments.length === 0 && ["عکس", "تصویر", "کارت پستال", "پرتره", "نقاشی", "image", "photo"].some(k => rawText.toLowerCase().includes(k))) {
      await sendPhoto(chatId, cleanText, messageId, userDisplayName);
      return;
    }

    let conversationHistory = await loadHistory(env, chatId, userId);
    let aiText = "";

    // ================================================================
    //  تزریق شرطی پرامپت‌ها و تغییر داینامیک مدل بر اساس نیت کاربر
    // ================================================================
    let dynamicSystemPrompt = SYSTEM_PROMPT;
    const lowerText = cleanText.toLowerCase();
    
    const webDesignKeywords = ["وب اپ", "وب اپلیکیشن", "سایت", "وبسایت", "فایل html", "قالب html", "کد html", "فرانت اند", "طراحی کن", "وب‌اپ", "html بساز", "کد سایت"];
    const debugKeywords = ["دیباگ", "باگ", "ارور", "رفع مشکل", "اصلاح کن", "خرابه", "مشکل داره", "بهینه", "ادیت", "کد رو درست کن", "مشکل این کد"];
    const heavyCodingKeywords = ["ماشین حساب", "برنامه بنویس", "اپلیکیشن", "پایتون", "جاوا اسکریپت", "اسکریپت", "برنامه نویسی", "کدنویسی"]; 
    
    const isWebDesignRequest = webDesignKeywords.some(keyword => lowerText.includes(keyword));
    const isDebugRequest = (attachments.length > 0 && debugKeywords.some(keyword => lowerText.includes(keyword))) || lowerText.includes("دیباگ");
    const isHeavyCodingRequest = heavyCodingKeywords.some(keyword => lowerText.includes(keyword)) || isWebDesignRequest || isDebugRequest;

    let targetModel = GEMINI_MODEL; // پیش‌فرض: flash-lite
    let temperature = 0.5; // پیش‌فرض برای چت عادی صمیمی

    if (isWebDesignRequest) {
      dynamicSystemPrompt += "\n\n" + WEB_APP_EXPERT_PROMPT;
    } else if (isDebugRequest) {
      dynamicSystemPrompt += "\n\n" + DEBUG_EXPERT_PROMPT;
    }

    // تغییر مغز ربات برای کارهای مهندسی
    if (isHeavyCodingRequest) {
      targetModel = "gemini-3.5-flash"; // سوییچ به مدل سنگین و متفکر
      temperature = 0.15; // تمپرچر پایین برای منطق دقیق و بدون توهم
      
      // پیام روانشناسی برای کاربر تا بداند ربات هنگ نکرده و در حال تفکر است
      await sendTelegram(chatId, "🧠 **شین در حال معماری و تفکر عمیق...**\nاین یک درخواست مهندسی است، لطفاً کمی صبور باش تا کد دقیق و پرملات آماده شود.", messageId);
      
      // ارسال اکشن "در حال تایپ" به تلگرام
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendChatAction`, {
         method: "POST", headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ chat_id: chatId, action: "typing" })
      });
    }
    // ================================================================

        try {
      aiText = await callGemini(dynamicSystemPrompt + `\nنام کاربر: ${userDisplayName}. زمان: ${new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" })}.`, conversationHistory, cleanText, chatId, messageId, env, attachments, targetModel, temperature);
    } catch (e) {
      aiText = `⚠️ **ارتباط قطع شد! علت دقیق ارور:**\n\`${e.message}\``;
    }


    // ================================================================
    // سانسور و مخفی کردن پروسه تفکر عمیق از دید کاربر
    // ================================================================
    aiText = aiText.replace(/<thinking>[\s\S]*?<\/thinking>/gi, "").trim();
    // ================================================================

    aiText = aiText
      .replace(/\[SEARCH:[^\]]*\]/gi, '')
      .replace(/\[NEWS_SEARCH:[^\]]*\]/gi, '')
      .replace(/\[SCRAPE:[^\]]*\]/gi, '')
      .replace(/\[FETCH_GITHUB_RELEASE:[^\]]*\]/gi, '')
      .replace(/\[INTENT:[^\]]*\]/gi, '')
      .replace(/https?:\/\/(?:1kb\.link|bit\.ly|tinyurl\.com|cutt\.ly|yun\.ir|zaya\.io|b2n\.ir|rizy\.ir|plink\.ir)\/[a-zA-Z0-9_\-\/]+/gi, "")
      .trim();

    conversationHistory.push({ role: "user", content: cleanText }); 
    // ربات تفکرات داخلی خود را نباید یادش بماند تا تاریخچه سنگین نشود.
    conversationHistory.push({ role: "assistant", content: aiText });
    if (conversationHistory.length > MAX_HISTORY) conversationHistory = conversationHistory.slice(-MAX_HISTORY);
    await saveHistory(env, chatId, userId, conversationHistory);

    const userRequestedFile = ["فایل", "file", "پاسخ در فایل", "فایل تکست", "فایل txt", "فایل کد", "فایل html"].some(k => rawText.includes(k));
    let extractedFile = null;

    const codeBlocks = [...aiText.matchAll(/```([a-zA-Z0-9_+-]+)?\s*\n?([\s\S]*?)\n?\s*```/gi)];
    if (codeBlocks.length > 0) {
      for (const block of codeBlocks) {
        const lang = (block[1] || "").toLowerCase().trim();
        const codeContent = block[2].trim();
        if (codeContent.length > 0) {
          if (lang === "html" || (codeContent.includes("<html") || codeContent.includes("<div"))) {
            extractedFile = { content: codeContent, name: "index.html", mime: "text/html", caption: "✅ فایل HTML درخواستی" }; break;
          } else if (lang === "js" || lang === "javascript") { extractedFile = { content: codeContent, name: "script.js", mime: "application/javascript", caption: "✅ فایل JavaScript درخواستی" }; break; }
          else if (lang === "py" || lang === "python") { extractedFile = { content: codeContent, name: "script.py", mime: "text/x-python", caption: "✅ فایل Python درخواستی" }; break; }
          else if (lang === "json") { extractedFile = { content: codeContent, name: "data.json", mime: "application/json", caption: "✅ فایل JSON درخواستی" }; break; }
          else if (lang === "css") { extractedFile = { content: codeContent, name: "style.css", mime: "text/css", caption: "✅ فایل CSS درخواستی" }; break; }
          else if (userRequestedFile) { extractedFile = { content: codeContent, name: "output.txt", mime: "text/plain", caption: "✅ فایل متنی درخواستی" }; break; }
        }
      }
    }
    if (!extractedFile && userRequestedFile && aiText.length > 30) {
      extractedFile = { content: aiText, name: "response.txt", mime: "text/plain", caption: "✅ فایل پاسخ درخواستی" };
    }

    if (extractedFile) {
      await sendDocument(chatId, extractedFile.content, extractedFile.name, messageId, extractedFile.caption, extractedFile.mime);
      // حذف بلوک کد از پیام متنی برای جلوگیری از شلوغی چت تلگرام
      const cleanResponse = aiText.replace(/```(?:[a-zA-Z0-9_+-]+)?\s*\n?[\s\S]*?\n?\s*```/gi, "").trim();
      if (cleanResponse.length > 10) await sendTelegram(chatId, cleanResponse, messageId);
      return;
    }

    if (aiText.length > 0) await sendTelegram(chatId, aiText.length > 4096 ? aiText.substring(0, 4090) + "..." : aiText, messageId);
  } catch (err) {}
}

async function sendPollMessage(chatId, question, options) {
  const pollId = "poll_" + Date.now();
  const keyboard = options.map((opt, idx) => [{ text: `${opt} (0)`, callback_data: `${pollId}|${idx}` }]);
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: `🗳️ **شعبه ی جدید اخذ رای ایجاد شد**\n\n❓ **${question}**\n\nبرای ثبت رای دکمه هارا بفـوشارید :`, parse_mode: "Markdown", reply_markup: { inline_keyboard: keyboard } })
  });
  const data = await res.json();
  if (data.ok) {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/pinChatMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, message_id: data.result.message_id }) });
    return { success: true, pollId, options, question, messageId: data.result.message_id };
  }
  return { success: false };
}

async function sendSecretLetterPost(chatId) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: `📬 **یک نامه محرمانه مدیریتی جدید دریافت شد.**\n\n⚠️ *توجه:* محتوای این نامه فقط برای اعضای هیئت مدیره و VIP قابل مشاهده است.`, parse_mode: "Markdown", reply_markup: { inline_keyboard: [[{ text: "📮 INBOX ", callback_data: "secret_letter_read" }]] } })
  });
}

async function handleCallbackQueries(callbackQuery, env) {
  const callbackId = callbackQuery.id;
  const user = callbackQuery.from;
  const userId = user.id;
  const username = user.username ? user.username.replace("@", "").toLowerCase() : "";
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  if (data === "secret_letter_read") {
    if (MODERATORS.some(m => m.replace("@", "").toLowerCase() === username)) {
      try {
        const res = await fetch(`${SECRET_TEXT_URL}?cache_bust=${Date.now()}`, { headers: { "Cache-Control": "no-cache" } });
        const letterText = res.ok ? await res.text() : "⚠️ فایل نامه محرمانه یافت نشد یا خالی است.";
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text: `📜 متن نامه محرمانه:\n\n${letterText.substring(0, 1800)}`, show_alert: true }) });
      } catch (e) {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text: "❌ خطا در دریافت.", show_alert: true }) });
      }
    } else {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text: "😒 به چیزی که مال تو نیست چرا دست می‌زنی!؟", show_alert: true }) });
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, text: `⚠️\n${user.username ? `@${user.username.replace(/_/g, "\\_")}` : `[${(user.first_name).replace(/_/g, "\\_")}](tg://user?id=${userId})`} / \`${userId}\`\nلحظاتی پیش در پی اقدامی ناموفق نسبت به باز کردن نامه ی محرمانه ناکام ماند 🚷\n\n@shervini`, parse_mode: "Markdown" }) });
    }
    return;
  }
  if (data.startsWith("poll_")) {
    const messageId = callbackQuery.message.message_id;
    const [pollId, optionIndexStr] = data.split("|");
    const optionIndex = parseInt(optionIndexStr);
    const kvKey = `poll_data_${chatId}_${messageId}`;
    let pollDataRaw = await env.CONVERSATION_KV.get(kvKey);
    if (!pollDataRaw) {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text: "❌ نسل این نظرسنجی منقرض شده است.", show_alert: true }) });
      return;
    }
    let pollData = JSON.parse(pollDataRaw);
    if (pollData.voters && pollData.voters.includes(userId)) {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text: "⚠️ شما قبلا رای دادی!", show_alert: true }) });
      return;
    }
    if (!pollData.voters) pollData.voters = [];
    pollData.voters.push(userId);
    pollData.counts[optionIndex] = (pollData.counts[optionIndex] || 0) + 1;
    await env.CONVERSATION_KV.put(kvKey, JSON.stringify(pollData));
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageReplyMarkup`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: chatId, message_id: messageId, reply_markup: { inline_keyboard: pollData.options.map((opt, idx) => [{ text: `${opt} (${pollData.counts[idx] || 0})`, callback_data: `${pollId}|${idx}` }]) } }) });
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ callback_query_id: callbackId, text: "🗳️ رای شما ثبت شد!", show_alert: false }) });
  }
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/webhook" && request.method === "POST") {
        const update = await request.json();
        ctx.waitUntil(
          (async () => {
            const isDup = await isDuplicateUpdate(update, env);
            if (!isDup) await handleUpdate(update, env);
          })()
        );
        return new Response("OK", { status: 200 });
      }
      return new Response("Telegram AI Bot is running!");
    } catch (e) {
      return new Response("OK", { status: 200 });
    }
  }
};
