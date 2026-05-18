# 马基雅维利分身 / Machiavelli Digital Twin

> 让马基雅维利的思维方式和分析能力成为你的日常工具。
> Turn Machiavelli's way of thinking into your everyday tool.

---

## 中文说明

一个基于马基雅维利著作全集（《君主论》《论李维》《政务与外交著作》《书信集》《佛罗伦萨史》《兵法》等）蒸馏而成的 AI Skill。不只是知识库，而是一个 **可对话的数字分身**——他按照马基雅维利的思维方式、分析框架和表达风格与你交流。

### 核心特性

- **三种工作模式**：对话模式（完整人格）、分析模式（纯分析）、写作模式（专注公文）
- **13条核心信条**：从实效真理到狮狐之喻，每条附原文引用和含义解释
- **11个历史镜鉴**：切萨雷·博尔贾、卡泰丽娜·斯福尔扎等真实案例
- **5个可执行框架**：局势研判、公文建议、角色扮演分析、写作表达、谈判准备——每个配有马基雅维利原文示例
- **四重人格刻画**：共和 vs 君主、行动 vs 书斋、冷眼 vs 怀古、政论 vs 喜剧

### 安装

#### WorkBuddy

```bash
# 方法一：直接复制
cp -r machiavelli-skill ~/.workbuddy/skills/马基雅维利

# 方法二：通过 ClawHub 安装
npx clawhub install machiavelli-skill --workdir ~ --dir .workbuddy/skills
```

#### CodeBuddy

```bash
cp -r machiavelli-skill ~/.codebuddy/skills/马基雅维利
```

#### OpenClaw / Hermes

```bash
# 方法一：通过 OpenClaw ClawHub 安装
npx clawhub install machiavelli-skill

# 方法二：手动复制到 skills 目录
cp -r machiavelli-skill ~/.clawdbot/skills/马基雅维利

# 方法三：Hermes (兼容目录)
cp -r machiavelli-skill ~/.hermes/skills/马基雅维利
```

直接复制到对应平台的 skills 目录即可，系统会自动识别。

### 使用方式

| 模式 | 触发词 | 适用场景 |
|------|--------|----------|
| 对话模式 | `/mach` | 完整人格对话，需要深度分析 |
| 分析模式 | `/mach-a` | 纯局势研判，不讲故事，直奔结论 |
| 写作模式 | `/mach-w` | 专注公文写作策略和表达分寸 |

对话中途可切换模式，说"/mach-a"或"换分析模式"即可。

### 示例

```
/mach 单位里两个科室争主导权，我该怎么协调？
/mach-a 这个项目的风险点在哪里？
/mach-w 向领导汇报坏消息时怎么措辞？
```

---

## English Description

An AI Skill distilled from the complete works of Niccolò Machiavelli (The Prince, Discourses on Livy, Art of War, Florentine Histories, Diplomatic Writings, Letters, etc.). This is not merely a knowledge base — it is a **conversational digital twin** that analyzes situations, assesses risks, and offers advice the way Machiavelli himself would.

### Features

- **Three Working Modes**: Dialogue (full persona), Analysis (pure reasoning, no stories), Writing (document strategy focus)
- **13 Core Tenets**: From *verità effettuale* (effectual truth) to the Lion-and-Fox analogy, each with original quotes and explanations
- **11 Historical Mirrors**: Real cases drawn from Cesare Borgia, Caterina Sforza, Roman history, and Machiavelli's own diplomatic missions
- **5 Executable Frameworks**: Situation Analysis, Policy Proposal, Role-Playing Analysis, Writing Expression, Negotiation Prep — each illustrated with Machiavelli's original dispatches
- **Four Layers of Persona**: Republican vs Monarchist, Man of Action vs Forced Scholar, Cynic vs Nostalgic, Political Analyst vs Comedy Playwright

### Installation

#### WorkBuddy

```bash
# Option 1: copy directly
cp -r machiavelli-skill ~/.workbuddy/skills/马基雅维利

# Option 2: install via ClawHub
npx clawhub install machiavelli-skill --workdir ~ --dir .workbuddy/skills
```

#### CodeBuddy

```bash
cp -r machiavelli-skill ~/.codebuddy/skills/马基雅维利
```

#### OpenClaw / Hermes

```bash
# Option 1: install via ClawHub
npx clawhub install machiavelli-skill

# Option 2: manual copy to skills directory
cp -r machiavelli-skill ~/.clawdbot/skills/马基雅维利

# Option 3: Hermes (compatible directory)
cp -r machiavelli-skill ~/.hermes/skills/马基雅维利
```

Simply copy the folder into your platform's skills directory. The system will auto-detect it.

### Usage

| Mode | Trigger | When to Use |
|------|---------|-------------|
| Dialogue | `/mach` | Full persona conversation, deep analysis |
| Analysis | `/mach-a` | Pure situation analysis, straight to the point |
| Writing | `/mach-w` | Document strategy, phrasing, and tone advice |

Switch modes mid-conversation by typing `/mach-a` or `/mach-w`.

### Examples

```
/mach Two departments are fighting over project ownership. How do I mediate?
/mach-a Where are the real risks in this project?
/mach-w How should I phrase bad news in a report to my superiors?
```

---

## 文件结构 / Project Structure

```
machiavelli-skill/
├── SKILL.md                    # Main skill definition (699 lines)
├── test-prompts.json           # 12 trigger-condition test cases
├── frameworks/                 # 8 conceptual framework cards
│   ├── 01-verita-effettuale.md        # Effectual Truth
│   ├── 02-virtu-vs-fortuna.md         # Virtù vs Fortuna
│   ├── 03-lion-and-fox.md             # Lion and Fox
│   ├── 04-fear-vs-love.md             # Fear vs Love
│   ├── 05-learn-to-be-evil.md         # Learn to Be Evil
│   ├── 06-people-vs-elites.md         # People vs Elites
│   ├── 07-own-arms.md                 # Own Arms
│   └── 08-republic-vs-principality.md # Republic vs Principality
├── sources/                    # 11 distilled source summaries
│   ├── the-prince.md
│   ├── discourses.md
│   ├── art-of-war.md
│   ├── florentine-histories.md
│   ├── letters.md
│   ├── prince-from-dispatches.md
│   ├── bio-alexander-lee.md
│   ├── quotes-shiotani.md
│   ├── maugham-novel.md
│   └── mccormic-interpretation.md
├── personality/
│   └── machiavelli-bio-distilled.md   # Biography-based persona distillation
├── README.md
└── LICENSE
```

---

## 源材料 / Source Materials

本 skill 基于以下著作蒸馏而成。

**马基雅维利原著**：
- 《君主论》/ *The Prince*
- 《论李维》/ *Discourses on Livy*
- 《兵法》/ *The Art of War*
- 《佛罗伦萨史》/ *Florentine Histories*
- 《政务与外交著作》（上下）/ *Diplomatic Writings (2 vols.)*
- 《书信集》（上下）/ *Collected Letters (2 vols.)*

**传记 / Biographies**：
- 盐野七生《我的朋友马基雅维利》/ Shiono Nanami, *My Friend Machiavelli*
- 亚历山大·李《马基雅维利：他的生活与时代》/ Alexander Lee, *Machiavelli: His Life and Times*
- 维罗利《尼科洛的微笑》/ Maurizio Viroli, *Niccolò's Smile*
- 盐野七生《马基雅维利语录》/ Shiono Nanami, *Machiavelli: A Book of Quotes*

**研究 / Studies**：
- 麦考米克《解读马基雅维利》/ John McCormick, *Machiavelli on Liberty and Conflict*
- 娄林《君主及其战争技艺》/ Lou Lin, *The Prince and the Art of War*

**小说 / Fiction**：
- 毛姆《彼时此时》/ W. Somerset Maugham, *Then and Now*

---

## 测试 / Testing

项目附带 `test-prompts.json`，包含 12 条测试用例 / 12 test cases:

- 5条 **应触发** / should_trigger — verify the skill activates when it should
- 4条 **不应触发** / should_not_trigger — verify it stays silent when it shouldn't
- 3条 **边界场景** / edge_case — verify it handles ambiguous situations correctly

---

## 许可证 / License

MIT License. See [LICENSE](./LICENSE).

---

## 致谢 / Acknowledgements

- 吉林出版集团《马基雅维利全集》中文版 / Jilin Publishing Group for the Chinese *Complete Works of Machiavelli*
- 所有在 openclaw / workbuddy 生态中贡献 skills 的开发者 / Everyone building in the OpenClaw and WorkBuddy ecosystem
