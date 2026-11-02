const toast = document.querySelector('#toast');
let toastTimer;
function notify(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }

document.querySelector('#advanceBtn').addEventListener('click', () => {
  const current = document.querySelector('.journey-step.current');
  const next = current?.nextElementSibling;
  if (!next) return;
  current.classList.remove('current'); current.classList.add('done'); next.classList.add('current');
  const label = next.querySelector('strong').textContent;
  document.querySelector('#actionPoints').innerHTML = '14<em> AP</em>';
  document.querySelector('#winRate').innerHTML = '72<em>%</em>';
  notify(`已推进至「${label}」，赢单概率提升 4%`);
});

document.querySelectorAll('.choice-button').forEach(button => button.addEventListener('click', () => {
  const labels = { listen: '倾听客户担忧', demo: '演示安全方案', delegate: '授权架构师沟通' };
  document.querySelector('#actionPoints').innerHTML = '13<em> AP</em>';
  notify(`行动已记录：${labels[button.dataset.action]} · 获得客户信任`);
}));

document.querySelector('#addNote').addEventListener('click', () => {
  const note = document.createElement('div'); note.className = 'activity'; note.innerHTML = '<span class="activity-dot blue"></span><div><strong>已记录新的客户洞察</strong><p>刚刚 · 由张顾问添加</p></div><span class="activity-score">+1 AP</span>';
  document.querySelector('#activityList').prepend(note); notify('事件已记录到活动日志');
});
document.querySelector('#addMember').addEventListener('click', () => notify('协作角色入口已打开（Demo）'));
document.querySelector('#editRoles').addEventListener('click', () => notify('团队编辑模式已开启（Demo）'));
document.querySelector('#viewTasks').addEventListener('click', () => notify('任务清单：客户访谈、方案评审、竞品分析'));
