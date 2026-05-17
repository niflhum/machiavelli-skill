# 马基雅维利分身 / Machiavelli Digital Twin

> 让马基雅维利的思维方式和分析能力成为你的日常工具。
> Turn Machiavelli's way of thinking into your everyday tool.

一个基于马基雅维利著作全集（君主论、论李维、政务与外交著作、书信集、佛罗伦萨史、兵法等）蒸馏而成的 AI Skill。不只是知识库，而是一个**可对话的数字分身**——他按照马基雅维利的思维方式、分析框架和表达风格与你交流。

A WorkBuddy Skill distilled from Machiavelli's complete works. Not just a knowledge base — a **conversational digital twin** that thinks, analyzes, and speaks like Machiavelli himself.

---

## 核心特性 / Features

- **三种工作模式**：对话模式（完整人格）、分析模式（纯分析）、写作模式（专注公文）
- **13条核心信条**：从实效真理到狮狐之喻，每条附原文引用和含义解释
- **11个历史镜鉴**：切萨雷·博尔贾、卡泰丽娜·斯福尔扎等真实案例
- **5个可执行框架**：局势研判、公文建议、角色扮演分析、写作表达、谈判准备——每个配有马基雅维利原文示例
- **四重人格刻画**：共和 vs 君主、行动 vs 书斋、冷眼 vs 怀古、政论 vs 喜剧

---

## 安装 / Installation

### WorkBuddy

```bash
cp -r machiavelli-skill ~/.workbuddy/skills/马基雅维利
```

### CodeBuddy

```bash
cp -r machiavelli-skill ~/.codebuddy/skills/马基雅维利
```

直接复制到 skills 目录即可，系统会自动识别。

---

## 使用方式 / Usage

| 模式 | 触发词 | 适用场景 |
|------|--------|----------|
| 对话模式 | `/马` 或 "马基雅维利，……" | 完整人格对话，需要深度分析 |
| 分析模式 | `/马分析` | 纯局势研判，不讲故事，直奔结论 |
| 写作模式 | `/马写作` | 专注公文写作策略和表达分寸 |

对话中途可切换模式，说"换分析模式"或"换写作模式"即可。

### 示例 / Examples

```
/马 单位里两个科室争主导权，我该怎么协调？
/马分析 这个项目的风险点在哪里？
/马写作 向领导汇报坏消息时怎么措辞？
```

---

## 文件结构 / Project Structure

```
machiavelli-skill/
├── SKILL.md                    # 主技能定义（699行）
├── test-prompts.json           # 12条触发条件测试用例
├── frameworks/                 # 8个概念框架卡片
│   ├── 01-verita-effettuale.md
│   ├── 02-virtu-vs-fortuna.md
│   ├── 03-lion-and-fox.md
│   ├── 04-fear-vs-love.md
│   ├── 05-learn-to-be-evil.md
│   ├── 06-people-vs-elites.md
│   ├── 07-own-arms.md
│   └── 08-republic-vs-principality.md
├── sources/                    # 10个著作蒸馏
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
│   └── machiavelli-bio-distilled.md
├── README.md
└── LICENSE
```

---

## 源材料 / Source Materials

本 skill 基于以下著作蒸馏而成：

- **马基雅维利原著**：《君主论》《论李维》《兵法》《佛罗伦萨史》《政务与外交著作》（上下）《书信集》（上下）
- **传记**：盐野七生《我的朋友马基雅维利》、亚历山大·李《马基雅维利：他的生活与时代》、维罗利《尼科洛的微笑》
- **研究**：盐野七生《马基雅维利语录》、麦考米克《解读马基雅维利》、娄林《君主及其战争技艺》
- **小说**：毛姆《彼时此时——马基雅维利在伊莫拉》

---

## 测试 / Testing

项目附带 `test-prompts.json`，包含 12 条测试用例：

- 5条 **应触发**（该调用时是否调用）
- 4条 **不应触发**（不该调用时是否忍住）
- 3条 **边界场景**（模糊场景的判断是否合理）

---

## 许可证 / License

MIT License. See [LICENSE](./LICENSE).

---

## 致谢 / Acknowledgements

- 吉林出版集团《马基雅维利全集》中文版
- 所有在 openclaw / workbuddy 生态中贡献 skills 的开发者
