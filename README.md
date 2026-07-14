# Power Within EN Content

这是 **心里有树 Power Within** 的英文内容再创作 Skill，用于把 NotebookLM、播客 transcript 或已确认文案，转化为适合 Instagram 与 LinkedIn 的英文 carousel。

它处理的不是逐句翻译，而是可追溯的英文 transcreation：保留原节目观点与隐喻，经过 native-English 调整，再进入 Power Within 的视觉系统。默认不虚构故事、人物经历、地点、数字或因果关系。

## 仓库内容

- `create-power-within-instagram-carousel/`：可直接查看与维护的完整 Skill。
- `create-power-within-instagram-carousel.zip`：可下载、解压和安装的分发包。

Skill 内含：

- 主工作流 `SKILL.md`
- NotebookLM 取材与 source-fidelity 规则
- 五页 carousel 的内容、排版与 QA 标准
- Power Within 品牌素材与不含节目内容的通用 carousel 模板
- SVG / PNG / LinkedIn PDF 渲染脚本
- 周日定稿、审批后预约周二与周五发布的自动化规则

## 内容原则

1. 每条观点都能追溯到具体节目材料。
2. NotebookLM 英译默认视为 close paraphrase；只有回查原 transcript 或 audio 后才使用引号。
3. 对外内容默认 idea-led，不为了“好看”添加未经确认的个人故事。
4. 同一套五页内容同时用于 Instagram carousel 与 LinkedIn PDF document post；LinkedIn 不另写长文。
5. 文案先完成 source-faithful draft，再单独做 native-English pass，不改变原意。

## 默认五页结构

1. 点出张力或重新定义主题
2. 澄清关键区别
3. 使用节目中最具体的隐喻或画面
4. 给出一个有来源依据的小练习
5. 温和邀请，并放入播客与 1:1 coaching CTA

视觉规格为 `1080 × 1350`。第 1、5 页使用 `76 px` 全大写标题作为 bookend；第 2–4 页使用 `64 px` sentence case。所有标题保持同一左侧锚点。每页只承担一个信息动作，并使用克制、minimalist 的自然元素。

## 每周自动流程

- Codex 自动任务每周日只触发一次。
- 周日按 episode 顺序完成下一组两期内容，分别指定给周二和周五。
- 用户确认当前版本的文案和视觉后，才在周日工作流中使用平台原生排程。
- Instagram 与 LinkedIn 的预约时间均为周二、周五 `09:00`，时区为 `Europe/Berlin`。
- Instagram 邀请 `@powerwithin.xlys` collab；LinkedIn 从 Ran 的个人账号发布。
- 任何审批后的文案、链接、页序或视觉修改，都会让该内容回到待确认状态。
- 未获得确认、平台访问失败或双平台无法同时完成时，不自动发布。

## 固定 CTA

```text
Listen to 心里有树 Power Within: https://powerwithin.riverside.com/

Book a free discovery call to explore 1:1 coaching with Ran: https://calendly.com/randing-work/coaching-session
```

## 安装

下载并解压 `create-power-within-instagram-carousel.zip`，将完整文件夹复制到 Codex Skills 目录：

```bash
unzip create-power-within-instagram-carousel.zip
cp -R create-power-within-instagram-carousel "${CODEX_HOME:-$HOME/.codex}/skills/"
```

之后可在 Codex 中用自然语言调用，例如：

```text
用 create-power-within-instagram-carousel，从 NotebookLM 提取下一期节目，生成审批版英文 carousel 和双平台 caption。
```

## 发布边界

Skill 可以完成取材、文案、设计、渲染与审批后的预约发布，但不会把“草稿生成”视为“发布授权”。每一组实际发布文件都需要用户看过并明确确认。

公开仓库不包含真实 episode 草稿、transcript 摘录、发布 tracker 或 NotebookLM notebook ID。使用时由团队提供已授权的 NotebookLM URL 与节目材料。
