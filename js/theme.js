(function () {
  'use strict';

  var themeStorageKey = 'bingoSiteTheme';
  var themes = ['simple','medieval', 'purple', 'literature'];
  var themeLabels = {
    simple: 'Simple',
    medieval: 'Medieval',
    purple: 'Purple',
    literature: 'Literature',
  };

  function applyTheme(nextTheme) {
    var theme = themes.indexOf(nextTheme) >= 0 ? nextTheme : 'simple';
    document.body.dataset.theme = theme;
    localStorage.setItem(themeStorageKey, theme);
    document.querySelectorAll('.site-theme-picker').forEach(function (picker) {
      picker.value = theme;
      picker.setAttribute('aria-label', 'Site theme: ' + themeLabels[theme]);
    });
  }

  var savedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(savedTheme);
  document.querySelectorAll('.site-theme-picker').forEach(function (picker) {
    picker.addEventListener('change', function (event) {
      applyTheme(event.target.value);
    });
  });
  window.addEventListener('storage', function (event) {
    if (event.key === themeStorageKey) applyTheme(event.newValue);
  });
})();

window.WEEKLY_REPORT_EMAIL_CONFIG = {
  // Replace these placeholders with the values from your EmailJS account.
  publicKey: 'eq9gL4jYCpdVSBD3w',
  serviceId: 'service_e78h44k',
  templateId: 'template_khrggtq',
  recipient: 'shannnon.neumann@gmail.com'
};

const isWeeklyReportConfigured = (config) =>
  Object.values(config).every(value =>
    value === config.recipient
      ? typeof value === 'string' && value.trim() !== '' && !value.toLowerCase().includes('your-email')
      :
    typeof value === 'string' &&
    value.trim() !== '' &&
    !value.startsWith('YOUR_') &&
    value !== 'shannnon.neumann@gmail.com'
  );

if (window.emailjs && isWeeklyReportConfigured(window.WEEKLY_REPORT_EMAIL_CONFIG)) {
  window.emailjs.init({ publicKey: window.WEEKLY_REPORT_EMAIL_CONFIG.publicKey });
}

const getLogDate = (log) => {
  const timestamp = log.loggedAt || log.timestamp;
  const parsedDate = timestamp ? new Date(timestamp) : null;
  if (parsedDate && !Number.isNaN(parsedDate.getTime())) return parsedDate;

  const fallbackDate = new Date(Number(log.id));
  return Number.isNaN(fallbackDate.getTime()) ? null : fallbackDate;
};

const getCurrentWeekRange = (now = new Date()) => {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const daysSinceMonday = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - daysSinceMonday);

  const end = new Date(start);
  end.setDate(end.getDate() + 7);

  return { start, end };
};

const NUTRITION_GOALS = [
  { id: 'movement', name: 'Movement', emoji: '🤸🏼‍♀️', color: '#edbc52' },
  { id: 'hydration', name: 'Hydration', emoji: '💧', color: '#00CECB' },
  { id: 'protein', name: 'Protein', emoji: '🫘', color: '#FF5E5B' },
  { id: 'fibre', name: 'Fibre', emoji: '🥬', color: '#b7c938' },
  { id: 'meds', name: 'Meds', emoji: '💊', color: '#FF9F1C' },
  { id: 'sleep', name: 'Sleep', emoji: '🛌', color: '#bbbdf6' },
  { id: 'mindfulness', name: 'Mindfulness', emoji: '🧘', color: '#68b0fc' }
];

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getWeekDates = (start) =>
  Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });

const readWeeklyReportData = (key, defaultValue) => {
  const rawData = localStorage.getItem(key);
  if (rawData === null) return defaultValue;
  const data = JSON.parse(rawData);
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new TypeError(`Saved ${key} data is not in the expected format.`);
  }
  return data;
};

const escapeReportHtml = (value) =>
  String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);

window.buildWeeklyReportTemplateParams = () => {
  let logs;
  let nutritionData;
  let bingoHistory;
  logs = JSON.parse(localStorage.getItem('health_logs') || '[]');
  nutritionData = readWeeklyReportData('kbTrackerData_v2', {});
  bingoHistory = readWeeklyReportData('bingoCardHistory', {});

  if (!Array.isArray(logs)) {
    throw new TypeError('Your saved log data is not in the expected format.');
  }

  if (logs.some(log => !log || typeof log !== 'object' || Array.isArray(log))) {
    throw new TypeError('Some saved log entries are invalid.');
  }

  const { start, end } = getCurrentWeekRange();
  const weeklyLogs = logs
    .map(log => ({ log, date: getLogDate(log) }))
    .filter(entry => entry.date && entry.date >= start && entry.date < end)
    .sort((a, b) => a.date - b.date);

  const weekDates = getWeekDates(start);
  const daySummaries = weekDates.map(date => {
    const dateKey = formatDateKey(date);
    const dayLogs = weeklyLogs.filter(entry => formatDateKey(entry.date) === dateKey);
    const meals = dayLogs
      .filter(({ log }) => log.type === 'meal')
      .map(({ log }) => log.name)
      .filter(Boolean);
    const symptoms = dayLogs
      .filter(({ log }) => log.type === 'symptom')
      .map(({ log }) => log.name)
      .filter(Boolean);
    const goalsMet = NUTRITION_GOALS
      .filter(goal => nutritionData[dateKey] && nutritionData[dateKey][goal.id])
      .map(goal => goal.name);

    return {
      date,
      dateKey,
      meals,
      symptoms,
      goalsMet,
      bingoAchieved: bingoHistory[dateKey] === true
    };
  });

  const bestDay = [...daySummaries].sort((first, second) =>
    second.goalsMet.length - first.goalsMet.length ||
    Number(second.bingoAchieved) - Number(first.bingoAchieved)
  )[0];
  const bestDayName = bestDay.goalsMet.length || bestDay.bingoAchieved
    ? bestDay.date.toLocaleDateString('en-GB', { weekday: 'long' })
    : '—';

  const dailyBreakdown = daySummaries.map(day =>
    `<div class="report-day" style="padding:14px 0;border-bottom:1px solid #EAEAEA;"><h3 class="report-day-title" style="margin:0 0 8px;color:#111111;font-size:15px;font-weight:700;">${escapeReportHtml(day.date.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' }))}${bestDayName !== '—' && day.dateKey === bestDay.dateKey ? ' 🏆' : ''}</h3><ul class="report-day-items" style="margin:0;padding-left:18px;color:#333333;font-size:13px;line-height:1.6;"><li><strong>🥗 Meals:</strong> ${escapeReportHtml(day.meals.length ? day.meals.join(', ') : 'None logged')}</li><li><strong>💭 Symptoms:</strong> ${escapeReportHtml(day.symptoms.length ? day.symptoms.join(', ') : 'None logged')}</li><li><strong>⭐ Bingo:</strong> ${day.bingoAchieved ? 'Achieved' : 'Not achieved'}</li><li><strong>📊 Goals:</strong> ${day.goalsMet.length}/${NUTRITION_GOALS.length}${day.goalsMet.length ? ` (${escapeReportHtml(day.goalsMet.join(', '))})` : ''}</li></ul></div>`
  ).join('');

  const lastDay = new Date(end);
  lastDay.setDate(lastDay.getDate() - 1);
  const weekRange = `${start.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })} – ${lastDay.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}`;
  const nutritionCounts = NUTRITION_GOALS.map(goal => {
    const daysMet = weekDates.filter(date => {
      const dayData = nutritionData[formatDateKey(date)];
      return dayData && dayData[goal.id];
    }).length;
    return { ...goal, daysMet };
  });
  const completedGoalDays = daySummaries.filter(day => day.goalsMet.length === NUTRITION_GOALS.length).length;
  const totalBingos = weekDates.filter(date => bingoHistory[formatDateKey(date)] === true).length;
  const mealCounts = new Map();
  weeklyLogs.forEach(({ log }) => {
    if (log.type === 'meal' && typeof log.name === 'string' && log.name.trim()) {
      const name = log.name.trim();
      mealCounts.set(name, (mealCounts.get(name) || 0) + 1);
    }
  });
  const mostEatenCount = Math.max(0, ...mealCounts.values());
  const mostEatenMeal = mostEatenCount
    ? [...mealCounts.entries()]
        .filter(([, count]) => count === mostEatenCount)
        .map(([name]) => name)
        .sort((first, second) => first.localeCompare(second))
        .join(', ')
    : 'No meals logged';
  const nutritionGoalCells = nutritionCounts.map(goal => {
    const segments = Array.from({ length: 7 }, (_, index) => {
      const isFilled = index >= 7 - goal.daysMet;
      const color = isFilled ? goal.color : '#E8E8E8';
      return `<tr><td width="18" height="9" bgcolor="${color}" style="width:18px;height:9px;background-color:${color};font-size:0;line-height:0;">&nbsp;</td></tr>`;
    }).join('');
    return `<td align="center" valign="bottom" width="14%" style="width:14%;padding:8px 2px 12px;"><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;"><tr><td align="center" valign="bottom"><table role="presentation" cellpadding="0" cellspacing="1" border="0" style="border-collapse:separate;">${segments}</table></td></tr><tr><td align="center" valign="top" style="padding:5px 0 0;font-size:14px;line-height:18px;">${goal.emoji}</td></tr><tr><td align="center" valign="top" style="padding:2px 0 0;font-size:10px;line-height:12px;color:#333333;overflow-wrap:anywhere;">${goal.name}</td></tr></table></td>`;
  }).join('');
  const nutritionRing = `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;border-collapse:collapse;">
      <tr>${nutritionGoalCells}</tr>
    </table>`;
  return {
    subject: `Weekly Wellness Summary (${weekRange})`,
    daily_breakdown: dailyBreakdown,
    total_bingos: totalBingos,
    avg_nutrition: completedGoalDays,
    best_day: bestDayName,
    most_eaten_meal: mostEatenMeal,
    nutrition_ring: nutritionRing,
    week_range: weekRange
  };
};

const sendWeeklyReport = async () => {
  const config = window.WEEKLY_REPORT_EMAIL_CONFIG;
  if (!isWeeklyReportConfigured(config)) {
    alert('Email reports are not configured yet. Add your EmailJS public key, service ID, template ID, and recipient in js/theme.js.');
    return;
  }

  if (!window.emailjs) {
    alert('The email service could not be loaded. Check your internet connection and try again.');
    return;
  }

  let templateParams;
  try {
    templateParams = {
      to_email: config.recipient,
      ...window.buildWeeklyReportTemplateParams()
    };
  } catch (error) {
    console.error('Could not read saved data for the weekly report.', error);
    alert('Could not read your saved tracker data, so the weekly report was not sent.');
    return;
  }

  try {
    await window.emailjs.send(config.serviceId, config.templateId, templateParams);
    alert('Success! Your weekly report has been emailed to you. 💌');
  } catch (error) {
    console.error('Failed to send the weekly report.', error);
    alert('Failed to send the weekly report. Check your EmailJS service, template, and recipient settings.');
  }
};

document.getElementById('weekly-report-button')?.addEventListener('click', sendWeeklyReport);