module.exports = {
  // 提交指令
  types: [
    { value: 'build', name: 'build: 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）' },
    { value: 'chore', name: 'chore: 变更构建流程或辅助工具' },
    { value: 'ci', name: 'ci: 持续集成修改' },
    { value: 'docs', name: 'docs: 文档修改' },
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复bug' },
    { value: 'perf', name: 'perf: 优化和性能提升' },
    { value: 'refactor', name: 'refactor: 代码重构' },
    { value: 'revert', name: 'revert: 回滚' },
    { value: 'style', name: 'style: 代码风格格式话' },
    { value: 'test', name: 'test: 增加测试用例' }
  ],
  // 修改范围选择
  scopes: [
    { name: 'pages', value: 'pages'},
    { name: 'components', value: 'components'},
    { name: 'utils', value: 'utils'},
    { name: 'commonStyles', value: 'commonStyles'},
  ],
  // 自定义提示消息
  messages: {
    type: "选择提交的类型:",
    scope: '\n选择修改的范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '自定义修改范围:',
    subject: '简述修改(<100字):\n',
    body: '详细描述修改 (可选). 使用 "|"换行:\n',
    breaking: '重大修改列表 (可选):\n',
    footer: '关闭的issuer(可选). 例如: #31, #34:\n',
    confirmCommit: '确认提交以上内容?',
  },
  // 是否允许自定义修改范围
  allowCustomScopes: true,
  // // 允许重大修改的提交
  // allowBreakingChanges: ['feat', 'refactor', 'ci']
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
};
